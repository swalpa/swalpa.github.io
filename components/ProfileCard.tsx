import Image from 'next/image'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from './ui/dialog'
import Link from 'next/link'
import { LucideGlobe2, LucideLink2, LucideLinkedin } from 'lucide-react'

const ProfileCard = ({profile}: { profile: InternshipProfile}) => {
  return (
    <Dialog>
       <DialogTrigger className='bg-white flex flex-col items-center p-1 hover:shadow-md transition rounded-sm'>
        <Image src={profile.profileImage} 
          width={ 200 } height={ 200 } alt='profile image' className='rounded-sm h-44 w-44 object-cover' draggable={false} />
          {
            profile.linkedIn ? <a target='_blank' href={profile.linkedIn} className='text-lg font-medium p-1 hover:text-blue-600 hover:underline'>{profile.name}</a> :
            profile.website  ? <a target='_blank' href={profile.website} className='text-lg font-medium p-1 hover:text-blue-600 hover:underline'>{profile.name}</a> :
            <p className='lg:text-lg font-medium p-1'>{profile.name}</p>
          }
          <p className='text-xs lg:text-sm text-black text-opacity-70'>{profile.highlightedText.length > 30  ? profile.highlightedText.slice(0,28) + "..." : profile.highlightedText}</p>
       </DialogTrigger>
      <DialogContent className='p-4 w-4/6  lg:w-full bg-[#fdfdfd] hover:shadow-lg transition flex flex-col md:flex-row items-center md:items-start gap-x-2 rounded-sm'>
        <Image src={profile.profileImage} 
        width={ 150 } height={ 150 } alt='profile image' className='rounded-sm h-56 w-44 object-cover mt-5 md:mt-1' draggable={false} />
        <div className='flex flex-col items-center md:items-start md:ml-2'>
          <DialogHeader className='text-2xl font-semibold '>{profile.name}</DialogHeader>
          {
            profile.college && <DialogDescription className='my-1 text-center text-xs'>{profile.college}</DialogDescription>
          }
          {
            profile.internshipTopic && (
              <DialogDescription className='my-1 text-base'>
                <b>Topic: </b> {profile.internshipTopic}
              </DialogDescription>
            )
          }
          <DialogDescription className='m-1 mt-3 text-base flex flex-gap-2'>
            {
              profile.linkedIn && <Link target='_blank' href={profile.linkedIn}><LucideLinkedin/></Link>
            }
            {
              profile.website && <Link target='_blank' href={profile.website}><LucideGlobe2/></Link>
            }
          </DialogDescription>
        </div>
        
    </DialogContent>
    </Dialog>
  )
}

export default ProfileCard