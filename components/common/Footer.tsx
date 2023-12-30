"use client"

import { LucideMail, LucidePhone, LucidePhoneCall } from "lucide-react"
import Link from "next/link"

const Footer = () => {

  return (
    <div className='w-full flex flex-col gap-1 justify-center items-center bg-[#303438] text-gray-400 py-3 pt-5'>
      <div className='w-full flex flex-col gap-1 justify-center items-center bg-[#303438] text-gray-400 pb-3'>
        <p className="text-center text-sm">© 2024 Swalpa Kumar Roy. All Rights Reserved</p>
        <div className="text-xs text-gray-400"><Link target="_blank" className="hover:underline" href={"https://swalpa-admin.vercel.app"}>Admin Panel</Link></div>
        <div className="text-xs text-gray-500">Built by <Link target="_blank" className="hover:underline" href={"https://www.linkedin.com/in/sarthakroy107/"}>Sarthak Roy</Link></div>
      </div>
      <div className="w-full flex flex-wrap gap-3 justify-center bg-[#303438] text-white/40">
        <p className="flex gap-1"><LucidePhone className="text-sm px-1" />(+91)-9749322213</p>
        <p className="flex gap-1"><LucideMail className="text-sm px-1" />swalpa@cse.jgec.ac.in</p>
        <p className="flex gap-1"><LucideMail className="text-sm px-1" />swalpa@ieee.org</p>
        <p className="flex gap-1"><LucideMail className="text-sm px-1" />swalpa@students.iiests.ac.in</p>
      </div>
    </div>
  )
}

export default Footer