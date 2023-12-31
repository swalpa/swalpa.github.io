"use client"
import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { LucideGlobe, LucideLinkedin } from "lucide-react"
import { Metadata } from "next"

const Page = () => {
  const [teamData, setTeamData] = useState <teamMemberType[] | null> (null)

  useEffect(()=> {
    (async ()=> {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/team`)
      console.log(data)
      setTeamData(data)
    })()
    return ()=> {
      
    }
  }, [])
  if(teamData === null || teamData === undefined) return (<main></main>)
  return (
    <main className="flex justify-center p-5">
      <div className="w-3/5">
        <h3 className="h2-heading">Students</h3>
        <div className="grid xl:grid-cols-4 gap-5 px-2">
          {
            teamData.filter((member)=> member.category === 'student').map((member: teamMemberType, index: number)=> (
              <Dialog key={index}>
                <DialogTrigger key={index} className="bg-[#fefffe] pt-4 pb-1 w-full hover:scale-105 hover:border hover:border-black/10  rounded-sm px-4 
                  shadow-[5px_10px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:cursor-pointer duration-150 transition-all">
                  <Image src={member.profileImage} alt={member.name} draggable={false} width={300} height={300} className="rounded-sm object-cover w-56 h-72"/>
                  <p className="h-16 px-2 text-xl font-semibold">{member.name}</p>
                </DialogTrigger>
                <DialogContent className="w-1/3 flex">
                  <Image src={member.profileImage} alt={member.name} draggable={false} width={300} height={300} className="rounded-sm object-cover w-40 h-56"/>
                  <div className="flex flex-col justify-between">
                    <div>
                      <DialogHeader className="text-2xl font-semibold w-full">{member.name}</DialogHeader>
                      <i className="text-lg opacity-75 w-full">{member.college}&lsquo;{member.graduationYear?.toString().slice(-2)}</i>
                      <DialogDescription className="text-lg max-h-80 overflow-auto">{member.currentPosition}</DialogDescription>
                    </div>
                    <div>
                      {
                        member.linkedIn && (<Link href={member.linkedIn} target="_blank"><LucideLinkedin/></Link>)
                      }
                      {
                        member.websiteLnk && (<Link href={member.websiteLnk} target="_blank"><LucideGlobe/></Link>)
                      }
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Page