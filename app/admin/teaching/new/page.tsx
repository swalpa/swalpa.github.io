import CreateOrEditTeachingDetails from '@/components/admin-panel/CreateOrEditTeachingDetails'
import React from 'react'

const Page = () => {
  return (
    <div className='w-full min-h-screen flex justify-center'>
        <CreateOrEditTeachingDetails teachingDetails={ null } newEntry={ true }/>
    </div>
  )
}

export default Page