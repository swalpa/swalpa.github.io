import { FieldValue, UseFormRegister, UseFormSetError, UseFormSetValue } from "react-hook-form"
import { Input } from "../ui/input"

const NormalInput = ({label, placeholder, required = true, type, register, error}: 
  {label: string, placeholder: string, required: boolean, type: string, register: any, error: any}) => {
  return (
    <div className='mt-3 flex flex-col gap-y-2'>
      <label className='font-semibold'>{label}{required ? "*" : null}</label>
      <Input className='w-full  text-lg' type={type} placeholder={placeholder} {...register } />
      {error && <span className="text-red-500">This field is required</span>}
    </div>
  )
}

export default NormalInput