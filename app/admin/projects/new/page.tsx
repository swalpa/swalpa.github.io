'use client'
import { CreateAndEditProject } from '@/components/CreateAndEditProject'

const Page = () => {
  
  return (
    <main className="w-full flex justify-center p-5">
      <CreateAndEditProject project={null} newEntry={true} />
    </main>
  )
}

export default Page