'use client';
import React from 'react'
import { useParams } from 'next/navigation'
import useFetchSpecificPublication from '@/services/hooks/useFetchSpecificPublication';
import CreateAndEditPublicationsPage from '@/components/admin-panel/CreateAndEditPublicationsPage';
import Loading from '@/components/common/Loading';
const Page = () => {
  const params = useParams()
  const data = useFetchSpecificPublication(params.id as string)
  console.log(data)

  if (!data) return <Loading />
  
  return (
    <CreateAndEditPublicationsPage data={data} newEntry={false} />
  )
}

export default Page