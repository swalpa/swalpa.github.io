import { UseFormSetValue, useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import { LucideX } from 'lucide-react'
import DOMPurify from 'dompurify'
import NormalInput from './NormalInput'

const InternshipTableForm = (
  { fieldName, watchedValue, setValue, errors,}: 
  { fieldName: any, watchedValue: { task: string, tentativeTimeline: string }[], setValue: UseFormSetValue<any>, errors: any }) => {
  const {handleSubmit, register, watch, reset} = useForm<{task: string, tentativeTimeline: string}>()
  
  return (
    <div className='mt-3 flex flex-col gap-y-2 my-2 p-2 px-3 bg-slate-50 border border-black/20 rounded-md'>
      <h2 className='text-2xl font-medium'>Timeline*</h2>
      <div className='flex flex-wrap gap-2'>
        {
          watchedValue.length > 0 && (
            watchedValue.map((item: { task: string, tentativeTimeline: string }, index: number) => (
              <div key={index} className='group p-1 px-2 rounded-sm bg-slate-200/80 flex items-center gap-x-1' >
                <div onClick={() => {setValue(fieldName, watchedValue.filter((_, i) => i !== index)); reset(item)}} className='cursor-pointer' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.task.length > 40 ? item.task.slice(0, 38) + '...' : item.task)}}/>
                <div className='invisible group-hover:visible cursor-pointer hover:bg-slate-300 transition rounded-full' onClick={() => setValue(fieldName, watchedValue.filter((_, i) => i !== index))}>
                  <LucideX className='text-xs' />
                </div>
              </div>
            ))
          )
        }
      </div>
      <form>
        <NormalInput label='Task' placeholder='Add task' register={register('task', { required: true })} required={true} error={null} type='text' />
        <NormalInput label='Tentative Timeline' placeholder='Add tentative timeline' register={register('tentativeTimeline', { required: true })} required={true} error={null} type='text' />
        <Button className='mt-2' disabled={!watch('task') || !watch('tentativeTimeline')} onClick={handleSubmit((data) => {setValue(fieldName, [...watchedValue, data]); reset({task: '', tentativeTimeline: '' })})}>Add</Button>
      </form>
      {errors && <span className="text-red-500">This field is required</span>}
    </div>
  )
}

export default InternshipTableForm