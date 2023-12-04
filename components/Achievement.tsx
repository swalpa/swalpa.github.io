"use client"
import { LucideAward, LucidePencil, LucideTrash2 } from 'lucide-react'
// import { toast } from 'sonner'
// import { Dialog, DialogContent, DialogHeader, DialogTrigger } from './ui/dialog'
// import { useForm } from 'react-hook-form'
// import { Button } from './ui/button'
// import { AchievementCategory } from '@/types/enums.'
// import axios from 'axios'
import DOMPurify from 'isomorphic-dompurify'

const Achievement = ({ achievement }: { achievement: AchievementType, }) => {
  // const { handleSubmit, register, setValue, watch, formState: { errors } } = useForm<AchievementType>({ defaultValues: achievement })
  // const category = watch('category')
  // const statement = watch('statement')
  // const handleDelete = async (data: AchievementType) => {
  //   try {
  //     await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/achievements/${achievement._id}`)
  //     toast.success('Deleted successfully')
  //   } catch (error) {
  //     console.log(error)
  //     toast.error('Something went wrong')
  //   }
  // }

  // const handleEdit = async (editedAchievement: AchievementType) => {
  //   try {
  //     const { data } = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/achievements/${achievement._id}`, editedAchievement)
  //     achievement = data
  //     toast.success('Edited successfully')
  //   } catch (error) {
  //     console.log(error)
  //     toast.error('Something went wrong')
  //   }
  // }
  return (
    <div className={`flex gap-x-2 font-normal text-base text-black text-opacity-80 my-1 p-1`}>
      <div className='w-[3%]'>
        <LucideAward size={25} className='invisible lg:visible'/>
      </div>
      <div className={`sw-[97%]"} text-base lg:text-lg text-justify`} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(achievement.statement) }} />
      {/* {
        admin && (
          <div className="flex gap-x-1">
            <Dialog>
              <DialogTrigger className="w-fit h-fit p-2 rounded-full hover:bg-slate-200 cursor-pointer transition">
                <LucidePencil />
              </DialogTrigger>
              <DialogContent>
                <NormalInput label='Statement' type='text' placeholder='Awards and Achievents' register={register('statement', { required: true })} required={true} error={errors.statement} />
                <div className='px-1 text-justify bg-slate-100 p-1 rounded-sm border border-black/20' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(statement) }} />
                <label className='font-semibold'>Category*</label>
                <div className='flex rounded-sm overflow-hidden border border-black/75 w-fit'>
                  <p onClick={() => setValue('category', AchievementCategory.International)} className={`${category === AchievementCategory.International ? "bg-slate-300" : null} p-1 cursor-pointer`}>International</p>
                  <p onClick={() => setValue('category', AchievementCategory.National)} className={`${category === AchievementCategory.National ? "bg-slate-300" : null} p-1 cursor-pointer`}>National</p>
                </div>
                <Button onClick={handleSubmit(handleEdit)}>Save</Button>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger className="w-fit h-fit p-2 rounded-full hover:bg-red-400/50 cursor-pointer transition">
                <LucideTrash2 />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>Are you sure?</DialogHeader>
                <Button className='bg-red-600 hover:bg-red-700' onClick={handleSubmit(handleDelete)}>Delete</Button>
              </DialogContent>
            </Dialog>
          </div>
        )
      } */}
    </div>
  )
}

export default Achievement