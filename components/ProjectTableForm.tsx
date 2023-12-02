import { UseFormSetValue, useForm } from 'react-hook-form'
import { LucideX } from 'lucide-react'
import { Button } from './ui/button'
import DOMPurify from 'dompurify'
import NormalInput from './admin-panel/NormalInput'


const ProjectTableForm = (
  { heading, fieldName, watchedValue, setValue, errors,}: 
  { heading: string, fieldName: any, watchedValue: { name: string, value: string }[], setValue: UseFormSetValue<any>, errors: any }) => {
  const {handleSubmit, register, watch, reset} = useForm<{name: string, value: string}>()
  
  return (
    <div className='mt-3 flex flex-col gap-y-2 my-2 p-2 px-3 bg-slate-50 border border-black/20 rounded-md'>
      <h2 className='text-2xl font-medium'>{heading}</h2>
      <div className='flex flex-wrap gap-2'>
        {
          watchedValue.length > 0 && (
            watchedValue.map((item, index: number) => (
              <div key={index} className='group p-1 px-2 rounded-sm bg-slate-200/80 flex items-center gap-x-1' >
                <div onClick={() => {setValue(fieldName, watchedValue.filter((_, i) => i !== index)); reset(item)}} className='cursor-pointer' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.name.length > 40 ? item.name.slice(0, 38) + '...' : item.name)}}/>
                <div className='invisible group-hover:visible cursor-pointer hover:bg-slate-300 transition rounded-full' onClick={() => setValue(fieldName, watchedValue.filter((_, i) => i !== index))}>
                  <LucideX className='text-xs' />
                </div>
              </div>
            ))
          )
        }
      </div>
      <form>
        <NormalInput label='Field 1' placeholder='Write here' register={register('name', { required: true })} required={true} error={null} type='text' />
        <NormalInput label='Field 2' placeholder='Write here' register={register('value', { required: true })} required={true} error={null} type='text' />
        <Button className='mt-2' disabled={!watch('name') || !watch('value')} onClick={handleSubmit((data) => {setValue(fieldName, [...watchedValue, data]); reset({name: '', value: '' })})}>Add</Button>
      </form>
      {errors && <span className="text-red-500">This field is required</span>}
    </div>
  )
}

export default ProjectTableForm