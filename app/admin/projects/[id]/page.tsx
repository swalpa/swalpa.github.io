'use client'
import { CreateAndEditProject } from "@/components/CreateAndEditProject";
import Loading from "@/components/common/Loading";
import useFetchAllProjectDetails from "@/services/hooks/useFetchAllProjectDetails";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();
  const project = useFetchAllProjectDetails(id as string);
  if (!project) return <Loading />
  return (
    <main className="w-full flex justify-center p-5">
      <CreateAndEditProject project={project} newEntry={false} />
    </main>
  )
}

export default Page