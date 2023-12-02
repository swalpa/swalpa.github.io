"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { imageUpload } from '@/services/uploadImage'
import { TeamMemberCategory } from '@/types/enums.'
import axios from 'axios'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { Toaster, toast } from 'sonner'


type teamDataType = {
  _id:             string | null,
  name:            string,
  category:        TeamMemberCategory,
  college:         string | null,
  graduationYear:  number | null,
  profileImage:    File[]   | string | null,
  currentPosition: string | null,
  linkedIn:        string | null,
  websiteLnk:      string | null,

}

const CreateOrUpdateTeamProfile = ({ memberDetails, newMember = true } : { memberDetails: teamMemberType | null, newMember: boolean }) => {

  const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<teamDataType>({
    defaultValues: {
      category:               newMember ? TeamMemberCategory.Student : memberDetails?.category === undefined ? TeamMemberCategory.Student : memberDetails?.category,
      name:                   newMember ? ""   : memberDetails?.name === undefined ? "" : memberDetails?.name,
      college:                newMember ? null : memberDetails?.college === undefined ? null : memberDetails?.college,
      graduationYear:         newMember ? null : memberDetails?.graduationYear === undefined ? null : memberDetails?.graduationYear,
      profileImage:           newMember ? null : memberDetails?.profileImage,
      currentPosition:        newMember ? ""   : memberDetails?.currentPosition,
      linkedIn:               newMember ? null : memberDetails?.linkedIn === undefined ? null : memberDetails?.linkedIn,
      websiteLnk:             newMember ? null : memberDetails?.websiteLnk === undefined ? null : memberDetails?.websiteLnk,
    }
  })

  const profileImge = watch("profileImage")
  const category = watch("category")
  
  const handleFormSubmit = async (data: teamDataType) => {

    try {
      
      if(typeof data.profileImage !== 'string' && data.profileImage !== null && data.profileImage !== undefined) {
        data.profileImage = await imageUpload(data.profileImage[0])
      }
      if(newMember) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/team`, data)
        toast.success("Member profile created successfully")

        reset({
          category: TeamMemberCategory.Student,
          name: "",
          college: null,
          graduationYear: null,
          profileImage: null,
          currentPosition: "",
          linkedIn: null,
          websiteLnk: null,

        })
      }
      else {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/team/${memberDetails?._id}`, data)
        toast.success("Member profile updated successfully")
      }

    } 
    catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className='w-full md:2/3 lg:w-1/2 xl:w-1/3 pb-12'>
      <Toaster/>
      <h2 className='text-3xl font-medium mt-7'>{memberDetails !== null ? "Update member profiel" : "Create new member profile"}</h2>
      <div className='flex border border-black/10 p-1 rounded-md w-fit mt-7'>
        <p onClick={()=> setValue("category", TeamMemberCategory.Student )} className={`p-1 px-2 text-lg font-medium rounded-sm cursor-pointer
        transition-all ${category === TeamMemberCategory.Student ? "bg-black text-white" : ""}`}>Student</p>
        <p onClick={()=> setValue("category", TeamMemberCategory.Mentor )} className={`p-1 px-2 text-lg font-medium rounded-sm cursor-pointer
        transition-all ${category === TeamMemberCategory.Mentor ? "bg-black text-white" : ""}`}>Mentor</p>
        <p onClick={()=> setValue("category", TeamMemberCategory.Collaborator )} className={`p-1 px-2 text-lg font-medium rounded-sm cursor-pointer
        transition-all ${category === TeamMemberCategory.Collaborator ? "bg-black text-white" : ""}`}>Collaborator</p>
      </div>
      <div className='mt-3 flex flex-col gap-y-2'>
        <label className=''>Name*</label>
        <Input className='w-full  text-lg' placeholder='Name' {...register("name", { required: true })}/>
        {errors.name && <span className="text-red-500">This field is required</span>}
      </div>
      <div className='mt-3 flex flex-col gap-y-2'>
        <label className=''>Colege{ category === TeamMemberCategory.Student ? "*" : null }</label>
        <Input className='w-full  text-lg' placeholder='College' {...register("college")}/>
        {errors.college && <span className="text-red-500">This field is required</span>}
      </div>
      <div className='mt-3 flex flex-col gap-y-2'>
        <label className=''>Graduation year{ category === TeamMemberCategory.Student ? "*" : null }</label>
        <Input className='w-full  text-lg' type='number' inputMode='numeric' pattern='[0-9]+' placeholder='Graduation year' {...register("graduationYear")} />
        {errors.graduationYear && <span className="text-red-500">This field is required</span>}
      </div>
      <div className='mt-3 flex flex-col gap-y-2'>
        <label className=''>Profile Image*</label>
        <Input className='w-full  text-lg' type='file' accept='.jpeg, .jpg, .png' placeholder='Upload profile image' 
        {...register('profileImage', { required: category === TeamMemberCategory.Student ? true : false}) }/>
        {errors.profileImage && <span className="text-red-500">This field is required</span>}
        {
          profileImge && profileImge[0]  && (
            <Image src={typeof profileImge === 'string' ? profileImge : URL.createObjectURL(profileImge[0])} alt='profile image' width={300} height={300} className='rounded-sm object-cover w-56 h-72' />
          )
        }
      </div>
      <div className='mt-3 flex flex-col gap-y-2'>
        <label className=''>Current position*</label>
        <Textarea className='w-full  text-lg' required placeholder='i.e project intern' {...register("currentPosition", { required: true })} />
        {errors.currentPosition && <span className="text-red-500">This field is required</span>}
      </div>
      <div className='mt-3 flex flex-col gap-y-2'>
        <label className=''>LinkedIn{ category === TeamMemberCategory.Student ? "*" : null }</label>
        <Input className='w-full  text-lg' type='text' placeholder='LinkedIn URL' {...register("linkedIn", { required: category === TeamMemberCategory.Student ? true : false}) }/>
        {errors.linkedIn && <span className="text-red-500">This field is required</span>}
      </div>
      <div className='mt-3 flex flex-col gap-y-2'>
        <label className=''>Website Url</label>
        <Input className='w-full  text-lg mb-3' type='text' placeholder='Website URL' {...register("websiteLnk")} />
        {errors.graduationYear && <span className="text-red-500">This field is required</span>}
        <Button>Submit</Button>
      </div>
    </form>
  )
}

export default CreateOrUpdateTeamProfile