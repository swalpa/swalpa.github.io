"use client"
import { LucideAward } from 'lucide-react'
import DOMPurify from 'isomorphic-dompurify'

const Achievement = ({ achievement }: { achievement: AchievementType, }) => {
  return (
    <div className={`flex gap-x-2 font-normal text-base text-black text-opacity-80 my-1.5 p-1`}>
      <div className='w-[3%] max-w-[20px] pt-[3px]'>
        <LucideAward size={25} className='invisible lg:visible'/>
      </div>
      <div className={`sw-[97%]"} text-base lg:text-lg text-justify`} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(achievement.statement) }} />
    </div>
  )
}

export default Achievement