"use client"
import CreateOrUpdateTeamProfile from '@/components/admin-panel/team/CreateOrUpdateTeamProfile'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const params = useParams();
  console.log(params);
  const [memberDetails, setMemberDetails] = useState<teamMemberType | null>(null)
  useEffect(()=> {
    (async ()=> {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/team/${params.id}`)
        setMemberDetails(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  if(memberDetails === null) return (<main>Loading...</main>)
  return (
    <div className='w-full flex justify-center px-3'>
        <CreateOrUpdateTeamProfile memberDetails={memberDetails} newMember={false} />
    </div>
  )
}

export default Page