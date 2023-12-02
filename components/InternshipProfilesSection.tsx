"use client"
import { useState } from 'react'
import ProfileCard from './ProfileCard'

const InternshipProfilesSection = ({title, profiles}: {title: string, profiles: InternshipProfile[]}) => {
  const [allProfiles, setAllProfiles] = useState<boolean>(false)
  return (
    <div className='w-full mt-2'>
      <div className='w-full flex justify-between items-center'>
        <h3 className='text-base lg:text-lg ml-2 font-medium'>{title}</h3>
        {
          profiles.length > 5 && (
            <p className='text-blue-400 hover:text-blue-600 text-sm px-2 p-1 hover:bg-blue-500/20 rounded-full hover:cursor-pointer transition' 
              onClick={()=> setAllProfiles(!allProfiles)}>
              { allProfiles ? "See less" : "See more"}
            </p>
          )
        }
      </div>
      <div className='p-1 py-2 lg:p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 lg:gap-4'>
        {
          profiles.map((profile, index) => (
            allProfiles ? <ProfileCard key={index} profile={profile} /> : index < 6 && <ProfileCard key={index} profile={profile} />
          ))
        }
      </div>
  </div>
  )
}

export default InternshipProfilesSection