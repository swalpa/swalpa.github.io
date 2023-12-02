"use client"
import { useState } from 'react'
import { Button } from './ui/button'
import { LucideEye, LucideEyeOff } from 'lucide-react'
import { useRouter } from 'next/navigation'

const InternshipCard = ({ internship, adminPanel }: { internship: InternshipsHighlights, adminPanel: boolean }) => {
  const [ visible , setVisible ] = useState<boolean>( false )
  const router = useRouter()
  return (
    <div className='border border-black/10 hover:border-black/20 p-4 rounded-sm max-h-64 bg-white hover:shadow-md transition'>
      <h3 className='h2-heading mb-1 text-2xl font-medium'>{ internship.title }</h3>
      <p className='h-32 md:24 lg:h-32 xl:h-28 my-2'>{ internship.summary.length > 190 ? internship.summary.slice( 0, 189 ) + "..." : internship.summary }</p>
      <div className='w-full flex justify-between'>
        <Button onClick={()=> adminPanel ? router.push(`/admin/internship/${internship._id}`) : router.push(`/internship/${internship._id}`)}>{ adminPanel ? "Edit" : "Learn more"}</Button>
        <div className='p-2 hover:bg-slate-200 transition hover:cursor-pointer rounded-full'>
          {
            adminPanel ? 
            (
              !visible ? <LucideEyeOff onClick={ ()=> setVisible(true) } size={ 32 } /> 
              : <LucideEye className='text-yellow-500' onClick={ ()=> setVisible(false) } size={ 32 }/>
            )
            : null
          }
        </div>
      </div>
    </div>
  )
}

export default InternshipCard