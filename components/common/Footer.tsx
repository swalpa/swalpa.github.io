"use client"

import { LucideMail, LucidePhone, LucidePhoneCall } from "lucide-react"
import Link from "next/link"

const Footer = () => {

  return (
    <div className='w-full flex flex-col gap-1 justify-center items-center bg-[#303438] text-gray-400 py-3 pt-5'>
      <div className='w-full flex flex-col gap-1 justify-center items-center bg-[#303438] text-gray-400 pb-3'>
        <p className="text-center text-sm">© 2024 Swalpa Kumar Roy. All Rights Reserved</p>
        <div className="text-xs text-gray-400"><Link target="_blank" className="hover:underline" href={"https://swalpa-admin.vercel.app"}>Admin Panel</Link></div>
        <div className="text-xs text-gray-500">Designed by <Link target="_blank" className="hover:underline" href={"https://www.linkedin.com/in/sarthakroy107/"}>Sarthak Roy</Link></div>
      </div>
      <div className="w-full flex md:text-lg flex-wrap gap-3 justify-center bg-[#303438] text-white/40">
        <div className="flex gap-1 w-56">
          <div className="w-[20px] h-[20px]"><LucidePhone className="text-sm px-1" /></div>(+91)-9749322213
        </div>
        <div className="flex gap-1 w-56">
          <div className="w-[20px] h-[20px]"><LucideMail className="text-sm px-1" /></div>swalpa@agemc.ac.in
        </div>
        {/* <div className="flex gap-1 w-56">
          <div className="w-[20px] h-[20px]"><LucideMail className="text-sm px-1" /></div>swalpa@ai.agemc.ac.in
        </div> */}
        <div className="flex gap-1 w-56">
          <div className="w-[20px] h-[20px]"><LucideMail className="text-sm px-1" /></div>swalpa-cs@ieee.org
        </div>
        <div className="flex gap-1 w-56">
          <div className="w-[20px] h-[20px]"><LucideMail className="text-sm px-1" /></div>swalpa@students.iiests.ac.in
        </div>
      </div>
    </div>
  )
}

export default Footer