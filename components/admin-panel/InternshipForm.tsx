import { useState } from 'react'
import { Textarea } from '../ui/textarea';
import { UseFormSetValue, useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Dialog, DialogHeader, DialogTrigger, DialogContent } from '../ui/dialog';
import { Input } from '../ui/input';
import { imageUpload } from '@/services/uploadImage';
import { ProfileCategory } from '@/types/enums.';
import InternshipTableForm from './InternshipTableForm';
import NormalInput from './NormalInput';
import Image from 'next/image';
import axios from 'axios';
import ArrayInputField from './ArrayInputField';

const newProfileData: InternshipProfile = {
  name: 'New Entry',
  profileImage: 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
  highlightedText: '',
  college: '',
  linkedIn: '',
  website: '',
  currentPosition: '',
  internshipTopic: '',
  collegeTier: false,
  category: ProfileCategory.CurrentStudent
}

const InternshipForm = ({ internshipData }: {internshipData: InternshipDetailsWithProfiles}) => {
  //console.log(internshipData);
  const {register, handleSubmit, watch, setValue, formState: { errors } } = useForm<InternshipDetailsWithProfiles>({ defaultValues: internshipData });
  const topics = watch('topics');
  const eligibility = watch('eligibility');
  const selectionProcedure = watch('selectionProcedure');
  const timeline = watch('timeline');
  const profiles = watch('profiles');
  
  const submitHandler = async (data: InternshipDetails) => {
    toast.success('Updating Internship Details');
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/internship/6554367889b517b7ec08e404`, data);
      toast.success('Internship Details Updated');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  return (
    <div className='w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-w-3xl'>
      <h2 className='h2-heading'>Internship Details</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className='mt-3 flex flex-col gap-y-2 my-3'>
          <label className='font-semibold text-lg'>Internship Description</label>
          <Textarea className='min-h-[220px] lg:min-h-[150px]' placeholder='write description here' {...register('description', { required: true })}/>
        </div>
        <InternshipTableForm fieldName='timeline' watchedValue={timeline} setValue={setValue} errors={errors.timeline}/>
        <ArrayInputField label='Topics' watchedValue={topics} placeholder='Add topic' fieldName='topics' setValue={setValue} />
        <ArrayInputField label='Eligibility' watchedValue={eligibility} placeholder='Add eligibility' fieldName='eligibility' setValue={setValue} />
        <ArrayInputField label='Selection Procedure' watchedValue={selectionProcedure} placeholder='Add selection procedure' fieldName='selectionProcedure' setValue={setValue} />
        <div className='mt-3 flex flex-col gap-y-2 my-3'>
          <label className='font-semibold text-lg'>Internship Description*</label>
          <Textarea className='min-h-[200px] lg:min-h-[120px]' placeholder='write description here' {...register('applicationProcess', { required: true })}/>
          <NormalInput label='Application Link' placeholder='Add application link' register={register('applicationLink', { required: true })} 
          required={true} error={errors.applicationLink} type='url' />
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3'>
          <CreateAndEditInternshipProfiles profile={newProfileData} setValue={setValue} index={profiles.length} newEntry={true} allProfiles={profiles}/>
          {
            profiles.map((profile, index) => (
              <CreateAndEditInternshipProfiles key={index} profile={profile} setValue={setValue} index={index} newEntry={false} allProfiles={null}/>
            ))
          }
        </div>
        <Button>Save changes</Button>
      </form>
    </div>
  )
}

export default InternshipForm


const CreateAndEditInternshipProfiles = (
  {profile, setValue, index, newEntry, allProfiles = null}: 
  {profile: InternshipProfile, setValue: UseFormSetValue<InternshipDetailsWithProfiles>, index: number, newEntry: boolean, allProfiles: InternshipProfile[] | null}
  ) => {
  const {register, handleSubmit, watch, reset, formState: { errors } } = useForm<InternshipProfile>({ defaultValues: profile });
  const [profileImage, setProfileImage] = useState<string | FileList | null>(profile.profileImage);
  const [category, setCategory] = useState<ProfileCategory>(profile.category);
  //console.log(profileImage);

  const submitHandler = async (data: InternshipProfile) => {
    //console.log(data);
    //console.log(profileImage);
    if(!profileImage) return toast.error('Please upload profile image');
    else if(typeof profileImage !== 'string') {
      //console.log('uploading image');
      try {
        toast.loading('Uploading profile image');
        const profileImageLink = await imageUpload(profileImage[0]);
        data.profileImage = profileImageLink;
        toast.success('Profile image updated')
      } catch (error) {
        console.log(error);
        toast.error('Profile image upload failed');
      }
    }
    else data.profileImage = profileImage;
    data.category = category;
    if(newEntry) {
      if(allProfiles === null) return toast.error('Profiles not found');
      const res= await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/profile`, data);
      setValue('profiles', [...allProfiles, res.data]);
      reset({});
      setProfileImage(profile.profileImage);
      toast.success('Profile created');
    }
    else {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/profile/${profile._id}`, data);
      setValue(`profiles.${index}`, data);
      toast.success('Profile updated');
    }
  }

  return (
    <Dialog>
      <DialogTrigger className='bg-white flex flex-col items-center p-1 hover:shadow-md transition rounded-sm'>
        <Image src={profile.profileImage} 
          width={ 200 } height={ 200 } alt='profile image' className='rounded-sm h-44 w-44 object-cover' draggable={false} />
          {
            profile.linkedIn ? <a target='_blank' href={profile.linkedIn} className='text-lg font-medium p-1 hover:text-blue-600 hover:underline'>{profile.name}</a> :
            profile.website  ? <a target='_blank' href={profile.website} className='text-lg font-medium p-1 hover:text-blue-600 hover:underline'>{profile.name}</a> :
            <p className='lg:text-lg font-medium p-1'>{profile.name}</p>
          }
          <p className='text-xs lg:text-sm text-black text-opacity-70'>{profile.highlightedText.length > 30  ? profile.highlightedText.slice(0,28) + "..." : profile.highlightedText}</p>
       </DialogTrigger>
       <DialogContent className='p-4 w-4/6  lg:w-full max-h-[92vh] overflow-auto bg-[#fdfdfd] hover:shadow-lg transition flex flex-col justify-center gap-x-2 rounded-sm'>
        <DialogHeader className='text-2xl font-semibold'>Edit</DialogHeader>
        <form className='flex flex-col gap-x-2 pr-4'>
          <div className='mt-3 flex flex-col gap-y-2'>
            <label className=''>Profile Image*</label>
            <Input className='w-full  text-lg' type='file' accept='.jpeg, .jpg, .png' placeholder='Upload profile image' onChange={ (e)=> setProfileImage(e.target.files)}/>
            {errors.profileImage && <span className="text-red-500">This field is required</span>}
            {
              profileImage && profileImage[0]  && (
                <Image src={typeof profileImage === 'string' ? profileImage : URL.createObjectURL(profileImage[0])} alt='profile image' width={300} height={300} className='rounded-sm object-cover w-40 h-56' />
              )
            }
          </div>
          <div>
            <NormalInput label='Name' placeholder='Add name' register={register('name', { required: true })} type='text' required={true} error={errors.name} />
            <NormalInput label='College' placeholder='Add college' register={register('college')} type='text' error={errors.college} required={false} />
            <NormalInput label='Website' placeholder='Add website' register={register('website')} type='url' error={errors.website} required={false} />
            <NormalInput label='LinkedIn' placeholder='Add linkedIn' register={register('linkedIn')} type='url' error={errors.linkedIn} required={false} />
            <NormalInput label='Highlighted Text' placeholder='JGEC, West Bengal' register={register('highlightedText')} type='text' error={errors.highlightedText} required={true} />
            <NormalInput label='Intern topic' placeholder='Add intern topic' register={register('internshipTopic')} type='text' error={errors.internshipTopic} required={true} />
            <label>Category*</label>
            <div className='flex overflow-hidden border border-black rounded-md w-fit my-2'>
              <p onClick={() => setCategory(ProfileCategory.CurrentStudent)} className={`p-1 px-2 cursor-pointer ${category === ProfileCategory.CurrentStudent ? "bg-slate-300 font-medium" : ""}`}>Current Student</p>
              <p onClick={() => setCategory(ProfileCategory.PreviousStudent)} className={`p-1 px-2 cursor-pointer ${category === ProfileCategory.PreviousStudent ? "bg-slate-300 font-medium" : ""}`}>Previous Student</p>
              <p onClick={() => setCategory(ProfileCategory.InternshipMentor)} className={`p-1 px-2 cursor-pointer ${category === ProfileCategory.InternshipMentor ? "bg-slate-300 font-medium" : ""}`}>Mentor</p>
            </div>
            <NormalInput label='Tier 1?' placeholder='Add tier 1 position' register={register('collegeTier')} type='checkbox' error={errors.collegeTier} required={true} />
            <Button onClick={handleSubmit(submitHandler)} className='my-5'>Save</Button>
          </div>
        </form>
       </DialogContent>
    </Dialog>
  )
}