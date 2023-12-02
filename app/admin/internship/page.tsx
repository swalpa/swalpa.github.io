"use client";
import InternshipForm from '@/components/admin-panel/InternshipForm';
import Loading from '@/components/common/Loading';
import useFetchInternshipDetails from '@/services/hooks/useFetchInternshipDetails'
import React from 'react'

const Page = () => {
  const data = useFetchInternshipDetails();
  if(!data) return <Loading />
  return (
   <div className='w-full flex justify-center p-3 md:p-4 lg:p-5 py-5'>
    <InternshipForm internshipData={data} />
   </div>
  )
}

export default Page