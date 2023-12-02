import CreateOrUpdateTeamProfile from '@/components/admin-panel/team/CreateOrUpdateTeamProfile'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full flex justify-center px-3'>
        <CreateOrUpdateTeamProfile memberDetails={null} newMember={true} />
    </div>
  )
}

export default Page