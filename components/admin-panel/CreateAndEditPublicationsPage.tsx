"use client"
import { UseFormSetValue, useForm } from "react-hook-form"
import NormalInput from "./NormalInput"
import { Button } from "../ui/button"
import { LucideX } from "lucide-react"
import { PublicationCategory } from "@/types/enums."
import axios from "axios"
import { toast } from "sonner"

const CreateAndEditPublicationsPage = ({data, newEntry}: {data: Publication | null, newEntry: boolean}) => {

  const {register, handleSubmit, setValue, watch, reset, formState: {errors}} = useForm<Publication>(
    newEntry || !data ? {
      defaultValues: {
        title: '',
        paperLink: '',
        authors: '',
        links: [],
        category: PublicationCategory.Journal
      } 
    } : { defaultValues: data}
  )

  const links = watch('links')
  const category = watch('category')
  const submitHandler = async (data: Publication) => {
    try {
      if (newEntry) {
        await axios.post('/api/publications', data)
      } else {
        await axios.put(`/api/publications/${data._id}`, data)
      }
      toast.success('Publication saved')
      reset();
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }
  return (
    <main className="w-full flex justify-center p-5">
      <div className="w-3/5">
        <h2 className="h2-heading">{newEntry ? "Create Publication" : "Edit Publication"}</h2>
        <form onSubmit={handleSubmit(submitHandler)}>
          <NormalInput label="Title" register={register('title', { required: true })} required={true} error={errors.title} type="text" placeholder="Enter title" />
          <NormalInput label="Paper link" register={register('paperLink', { required: false })} required={false} error={errors.paperLink} type="text" placeholder="Enter paper link" />
          <NormalInput label="Authors" register={register('authors', { required: true })} required={true} error={errors.authors} type="text" placeholder="Enter authors" />
          <NormalInput label="Year" register={register('year', { required: true })} required={true} error={errors.year} type="number" placeholder="Enter year" />
          <NormalInput label="Published in" register={register('publisher', { required: true })} required={true} error={errors.publisher} type="text" placeholder="Enter published in" /> 
          <p className="text-lg font-medium mt-2">Category*</p>
          <div className='flex overflow-hidden border border-black rounded-md w-fit my-2'>
            <p onClick={() => setValue('category', PublicationCategory.Book)}  className={`p-1 px-2 cursor-pointer ${category === PublicationCategory.Book ? "bg-slate-300 font-medium" : ""}`}>Book</p>
            <p onClick={() => setValue('category', PublicationCategory.Conference)}  className={`p-1 px-2 cursor-pointer ${category === PublicationCategory.Conference ? "bg-slate-300 font-medium" : ""}`}>Conference</p>
            <p onClick={() => setValue('category', PublicationCategory.Journal)}  className={`p-1 px-2 cursor-pointer ${category === PublicationCategory.Journal ? "bg-slate-300 font-medium" : ""}`}>Journal</p>
            </div>
          <LinksInput links={links} setValue={setValue} />
          <Button className="mt-3">Save</Button>
        </form>
      </div>
    </main>
  )
}

export default CreateAndEditPublicationsPage

const LinksInput = ({links,setValue}: {links: {name: string, link: string}[],setValue: UseFormSetValue<Publication>}) => {
  const {register, handleSubmit, reset, formState: {errors}} = useForm<{name: string, link: string }>()
  const submitHandler = (data: {name: string, link: string}) => {
    setValue('links', [...links, data])
    reset({name: '', link: ''})
  }
  return (
    <div className="mt-3 bg-slate-100 p-3 rounded-md border border-black/20">
      <p className="text-xl font-medium ">Links</p>
      <div className="flex flex-wrap gap-2 m-2">
        {
          links.map((link, index) => {
            return (
             <div key={index} onDoubleClick={() => { reset({ name: link.name, link: link.link}); setValue('links', links.filter((_, i) => i !== index))} }
              className="p-1 px-2 hover:bg-slate-400 border hover:text-slate-50 border-black/50 rounded-md transition cursor-pointer flex gap-2">{link.name}
                <div onClick={() => setValue('links', links.filter((_, i) => i !== index))} className="hover:bg-slate-600 rounded-full transition"><LucideX/></div>
              </div>
            )
          })
        }
      </div>
      <div className="flex gap-2 items-end">
        <NormalInput label="Name" register={register('name', { required: true })} required={true} error={errors.name} type="text" placeholder="Enter name" />
        <NormalInput label="Link" register={register('link', { required: true })} required={true} error={errors.link} type="text" placeholder="Enter link" />
        <Button onClick={handleSubmit(submitHandler)}>Add</Button>
      </div>
    </div>
  )
}