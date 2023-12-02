"use client"
import { useForm } from 'react-hook-form'
import NormalInput from './admin-panel/NormalInput';
import ProjectTableForm from './ProjectTableForm';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'sonner';
import { imageUpload } from '@/services/uploadImage';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const CreateAndEditProject = ({ project, newEntry }: { project: ProjectType | null, newEntry: boolean }) => {
  const router = useRouter();
  const { handleSubmit, setValue, watch, register, formState: { errors } } = useForm<ProjectType>({
    defaultValues: project || {
      title: '',
      description: '',
      image: '',
      collaborators: '',
      informations: [],
      links: []
    }
  });
  const [image, setImage] = useState<string | FileList | null>(project?.image || null);

  const formSubmitHandler = async (data: ProjectType) => {
    console.log(data);
    try {
      if (!image) setImage(null);
      else if (typeof image !== 'string') {
        try {
          toast.loading('Uploading profile image');
          const profileImageLink = await imageUpload(image[0]);
          data.image = profileImageLink;
          toast.success('Profile image updated')
        } catch (error) {
          console.log(error);
          toast.error('Profile image upload failed');
        }
      }
      else data.image = image;
      if (newEntry || !project) {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/projects`, data);
        toast.success('Profile created');
      }
      else {
        await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/projects/${project._id}`, data);
        toast.success('Profile updated');
      }
      router.push('/admin/projects');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='w-full md:w-3/4 lg:w-3/5 xl:w-1/2'>
      <h2 className='h2-heading'>{newEntry ? "Create new Project" : "Edit Project"}</h2>
      <NormalInput label='Title' placeholder='Title of the project' register={register('title', { required: true })} type='text' error={errors.title} required={true} />
      <NormalInput label='Description' placeholder='Description of the project' register={register('description', { required: true })} type='text' error={errors.description} required={true} />
      <div className='mt-3 flex flex-col gap-y-2'>
        <label className=''>Profile Image*</label>
        <Input className='w-full  text-lg' type='file' accept='.jpeg, .jpg, .png' placeholder='Upload profile image' onChange={(e) => setImage(e.target.files)} />
        {errors.image && <span className="text-red-500">This field is required</span>}
        {
          image && image[0] && (
            <Image src={typeof image === 'string' ? image : URL.createObjectURL(image[0])} alt='Image' width={300} height={300} className='rounded-sm object-cover w-40 h-56' />
          )
        }
      </div>
      <NormalInput label='Authors' placeholder='Collaborators of the project' register={register('collaborators', { required: true })} type='text' error={errors.collaborators} required={true} />
      <ProjectTableForm heading='Informations' fieldName='informations' watchedValue={watch('informations') || []} setValue={setValue} errors={errors.informations} />
      <ProjectTableForm heading='Links' fieldName='links' watchedValue={watch('links') || []} setValue={setValue} errors={errors.links} />
      <Button onClick={handleSubmit(formSubmitHandler)} className='w-full mt-2'>{newEntry ? "Create" : "Edit"}</Button>
    </div>
  )
}
