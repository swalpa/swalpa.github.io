"use client"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [teamData, setTeamData] = useState<teamMemberType[] | null>(null)
    const router = useRouter()

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://localhost:7000/team")
            console.log(data)
            setTeamData(data)
        })()
        return () => {

        }
    }, [])

    if (teamData === null || teamData === undefined) return (<main>Loading</main>);

    return (
        <div className='w-full px-24'>
            <h2 className='h2-heading mt-5'>Students</h2>
            <Table className='px-3'>
                
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[35%]">Name</TableHead>
                        <TableHead>College</TableHead>
                        <TableHead>Graduation year</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        teamData.filter((member) => member.category === 'student').map((member: teamMemberType, index: number) => (
                            <TableRow onClick={()=> router.push(`/admin/team/${member._id}`)} key={index} className='xl:text-lg cursor-pointer'>
                                <TableCell className='font-semibold'>{member.name}</TableCell>
                                <TableCell>{member.college}</TableCell>
                                <TableCell>{member.graduationYear}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default Page