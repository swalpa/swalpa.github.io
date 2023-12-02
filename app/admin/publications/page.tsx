"use client"
import React from 'react'
import { useForm } from 'react-hook-form'

const Page = () => {
  const {handleSubmit, register, formState: {errors}} = useForm<Publication>()
  return (
    <main className='w-full'>
      <div className='w-full md:w-2/3 lg:w-1/2'>
        
      </div>
    </main>
  )
}

export default Page