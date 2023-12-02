"use client"

import { UseFormSetValue, useForm } from "react-hook-form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useState } from "react"
import { LucidePencilLine, LucideTrash2 } from "lucide-react"
import { TeachingArrayFields } from "@/types/enums."
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Textarea } from "../ui/textarea"
import axios from "axios"
import DOMPurify from "dompurify"
import NormalInput from "./NormalInput"

const CreateOrEditTeachingDetails = ({ teachingDetails, newEntry = true } : { teachingDetails: TeachingAllDetails | null, newEntry: boolean }) => {

    const { register, handleSubmit, watch, setValue, reset, formState: { errors } } = useForm<TeachingAllDetails>(
        newEntry || teachingDetails === null ? { 
            defaultValues: {  
            title: '',
            courseDescription: '',
            creditPoints: '',
            year: null,
            attendancePercentage: '',
            assignmentInstructions: '',
            session: '',
            classLocation: '',
            routine: [],
            programmeObjectives: [],
            courseObjectives: [],
            referenceBooks: [],
            prerequisites: [],
            gradingPolicy: [],
            teachingLearningProccess: [],
            syllabus: [],
            otherResources: [],
            miscellaneous: [],
        }} : { defaultValues: teachingDetails }
    )
    
    const router = useRouter()

    const courseDescription = watch('courseDescription')
    const assignmentInstructions = watch('assignmentInstructions')
    const routine = watch('routine')
    const programmeObjectives = watch('programmeObjectives')
    const courseObjectives = watch('courseObjectives')
    const referenceBooks = watch('referenceBooks')
    const prerequisites = watch('prerequisites')
    const gradingPolicy = watch('gradingPolicy')
    const teachingLearningProccess = watch('teachingLearningProccess')
    const syllabus = watch('syllabus')
    const otherResources = watch('otherResources')
    const miscellaneous = watch('miscellaneous')
    
    const onSubmit = async (data: TeachingAllDetails) => {
        console.log(data);
        if(newEntry) {
            try {
                if(data.year) {
                    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/teaching`, data)
                    toast.success('Teaching details added successfully')
                    reset();
                    router.push('/admin/teaching')
                }else toast.error('Year field in null')
            }
            catch(error) {
                console.log(error);
                toast.error('Something went wrong')
            }
        }
        else {
            try {
                if(data.year) {
                    await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/teaching/${teachingDetails?._id}`, data)
                    toast.success('Teaching details updated successfully')
                    reset();
                    router.push('/admin/teaching')
                }else toast.error('Year field in null')
            }
            catch(error) {
                console.log(error);
                toast.error('Something went wrong')
            }
        }
    }


    return (
        <div className="w-full md:w-2/3 xl:w-1/2 p-5">
            <h2 className="h2-heading w-full">Create New Teaching</h2>
            <i className="text-sm text-red-600">**Each text input field supports HTML input except <b>Title</b> and <b>Attendance</b></i>
            <form className="w-full px-3"onSubmit={handleSubmit(onSubmit)}>
                <NormalInput label="Title" type="text" placeholder="Title" required={true} register={register("title", { required: true})} error={errors.title}/>
                
                <div className='mt-3 flex flex-col gap-y-2'>
                    <label className='font-semibold'>Desscription*</label>
                    {
                        courseDescription.length > 0 && (
                            <div className=" p-1 min-h-[40px] rounded-sm flex gap-2 items-center hover:bg-slate-200" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(courseDescription)}}/>
                        )
                    }
                    <Textarea className='w-full  text-lg' placeholder='Couse description' {...register("courseDescription", { required: true })} />
                    {errors.courseDescription && <span className="text-red-500">This field is required</span>}
                </div>

                <NormalInput label="Starting date"                 type="date"   placeholder="Starting date"      required={true} register={register("startDate", { required: true})} error={errors.startDate}/>
                <NormalInput label="Credit points"                 type="text"   placeholder="creditPoints"       required={true} register={register("creditPoints", { required: true})} error={errors.creditPoints}/>
                <NormalInput label="Class location"                type="text"   placeholder="Class location"     required={true} register={register("classLocation", { required: true})} error={errors.classLocation}/>
                <NormalInput label="Calender year"                 type="number" placeholder="Ex: 2021"           required={true} register={register("year", { required: true})} error={errors.year}/>
                <NormalInput label="Minimum attendance percentage" type="text"   placeholder="Without %"          required={true} register={register("attendancePercentage", { required: true})} error={errors.attendancePercentage}/>
                <NormalInput label="Session"                       type="text"   placeholder="Jan-Jun, 2021"      required={true} register={register("session", { required: true})} error={errors.session}/>
                
                <div className='mt-3 flex flex-col gap-y-2'>
                    <label className='font-semibold'>Assignment instructions*</label>
                    {
                        assignmentInstructions.length > 0 && (
                            <div className=" p-1 min-h-[40px] rounded-sm flex gap-2 items-center hover:bg-slate-200" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(assignmentInstructions)}}/>
                        )
                    }
                    <Textarea className='w-full  text-lg' placeholder='Assignment instructions' {...register("assignmentInstructions", { required: true })} />
                    {errors.assignmentInstructions && <span className="text-red-500">This field is required</span>}
                </div>
                
                <ArrayInputField label="Routine"                     placeholder="Add class"                      watchedValue={routine}                  setValue={setValue} fieldName={TeachingArrayFields.Routine} />
                <ArrayInputField label="Programme Objectives"        placeholder="Add programme objective"        watchedValue={programmeObjectives}      setValue={setValue} fieldName={TeachingArrayFields.programmeObjectives} />
                <ArrayInputField label="Course Outcomes"             placeholder="Add course objective"           watchedValue={courseObjectives}         setValue={setValue} fieldName={TeachingArrayFields.CourseObjectives} />
                <ArrayInputField label="References books"            placeholder="Add reference book"             watchedValue={referenceBooks}           setValue={setValue} fieldName={TeachingArrayFields.ReferenceBooks} />
                <ArrayInputField label="Prerequisites"               placeholder="Add prerequisite"               watchedValue={prerequisites}            setValue={setValue} fieldName={TeachingArrayFields.Prerequisites} />
                <ArrayInputField label="Grading Policy"              placeholder="Add grading policy"             watchedValue={gradingPolicy}            setValue={setValue} fieldName={TeachingArrayFields.GradingPolicy} />
                <ArrayInputField label="Teaching Learning Proccess"  placeholder="Add teaching learning proccess" watchedValue={teachingLearningProccess} setValue={setValue} fieldName={TeachingArrayFields.TeachingLearningProccess} />
                <ArrayInputField label="Syllabus"                    placeholder="Add syllabus"                   watchedValue={syllabus}                 setValue={setValue} fieldName={TeachingArrayFields.Syllabus} />
                <ArrayInputField label="Other Resources"             placeholder="Add other resources"            watchedValue={otherResources}           setValue={setValue} fieldName={TeachingArrayFields.OtherResources} />
                <ArrayInputField label="Miscellaneous"               placeholder="Add miscellaneous"              watchedValue={miscellaneous}            setValue={setValue} fieldName={TeachingArrayFields.Miscellaneous} />
                
                <Button className="w-full mt-5">Submit</Button>
            </form>
        </div>
    )
}

export default CreateOrEditTeachingDetails


const ArrayInputField = (
    { label, placeholder, watchedValue, fieldName, setValue }:
    { label: string, placeholder: string, watchedValue: string[], fieldName: TeachingArrayFields, setValue: UseFormSetValue<TeachingAllDetails> }) => {
    
    const [field, setField] = useState<string | null>(null);

    const handleSetValues = (e: any) => {
        e.preventDefault();  
        if(field && field !== "") {
            setValue(fieldName, [...watchedValue, field]);
            setField(null);
        }
    }


    return (
        <div className='mt-3 flex flex-col gap-y-2 my-1 p-2 px-3 bg-slate-50 border border-black/20 rounded-md'>
            <label className='font-semibold'>{label}*</label>
            <div className="">
                {
                    watchedValue.length > 0 && (
                        watchedValue.map((item: string, index: number) => (
                            <ArrayInputDisplay key={index} watchedValue={watchedValue} setValue={setValue} index={index} item={item} />
                        ))
                    )
                }
            </div>
            <div className="flex gap-x-3">
                <Input value={!field ? "" : field} onChange={(e) => setField(e.target.value)} className='w-full text-lg' placeholder={placeholder} />
                <Button onClick={(e)=>handleSetValues(e)}
                disabled={!field || field === ""}>
                    Add
                </Button>
            </div>
        </div>
    )

}

const ArrayInputDisplay = (
    { watchedValue, setValue, index, item }: 
    { watchedValue: string[], setValue: UseFormSetValue<TeachingAllDetails>, index: number, item: string }) => {

    const [edit, setEdit] = useState<boolean>(false);
    const [editedValue, setEditedValue] = useState<string>(item);

    return (
        <div key={index} className="group p-1 min-h-[40px] rounded-sm flex gap-2 items-center hover:bg-slate-200">
            <p className="">{index+1}.</p>
            {
                edit ? (
                    <div className="flex gap-x-2 w-full">
                        <Input className='text-lg' value={editedValue} onChange={(e) => setEditedValue(e.target.value)}/>
                        <Button disabled={!editedValue || editedValue === ""} onClick={(e) => {e.preventDefault(); setValue(`routine.${index}`, editedValue) ;setEdit(false)}}>Done</Button>
                    </div>
                ) : (
                   <>
                    <div key={index} className="w-[85%]" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
                    <div onClick={()=> setEdit(true)}
                    className="p-1 hidden group-hover:block hover:bg-slate-200 rounded-full transition hover:cursor-pointer"><LucidePencilLine/></div>
                    <div onDoubleClick={()=> setValue('routine', watchedValue.filter((_, i)=> i !== index))}
                    className="p-1 hidden group-hover:block hover:bg-red-200 rounded-full transition hover:cursor-pointer"><LucideTrash2 className="text-red-600"/></div>
                   </>
                )
            }
        </div>
    )
}