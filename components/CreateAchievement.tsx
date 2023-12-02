import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import NormalInput from "./admin-panel/NormalInput";
import { useForm } from "react-hook-form";
import { AchievementCategory } from "@/types/enums.";
import axios from "axios";
import { toast } from "sonner";
import DOMPurify from "dompurify";

const CreateAchievement = () => {
  const { setValue, handleSubmit, watch, register, formState: { errors } } = useForm<AchievementType>({ defaultValues: { category: AchievementCategory.National }});
  const category = watch('category')
  const statement = watch('statement')
  const handleCreate = async (data: AchievementType) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/achievements`, data)
      toast.success('Created successfully')
    } catch (error) {
      console.log(error)
      toast.error('Something went wrong')
    }
  }
  return (
    <div className="flex gap-x-1">
      <Dialog>
        <DialogTrigger className="w-fit h-fit p-2 rounded-full hover:bg-slate-200 cursor-pointer transition">
          <Button>New</Button>
        </DialogTrigger>
        <DialogContent>
          <NormalInput label='Statement' type='text' placeholder='Awards and Achievents' register={register('statement', { required: true })} required={true} error={errors.statement} />
          <div className='px-1 text-justify bg-slate-100 p-1 rounded-sm border border-black/20' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(statement) }} />
          <label className='font-semibold'>Category*</label>
          <div className='flex rounded-sm overflow-hidden border border-black/75 w-fit'>
            <p onClick={() => setValue('category', AchievementCategory.International)} className={`${category === AchievementCategory.International ? "bg-slate-300" : null} p-1 cursor-pointer`}>International</p>
            <p onClick={() => setValue('category', AchievementCategory.National)} className={`${category === AchievementCategory.National ? "bg-slate-300" : null} p-1 cursor-pointer`}>National</p>
          </div>
          <Button onClick={handleSubmit(handleCreate)}>Save</Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CreateAchievement