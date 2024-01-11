import Loading from "@/components/common/Loading";
import { getProjects } from "@/services/serverActions";
import DOMPurify from "isomorphic-dompurify";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: 'Projects | Dr. Swalpa Kumar Roy',
  description: 'Projects of Dr. Swalpa Kumar Roy',
  keywords: ['Swalpa', 'Swalpa Roy', 'Swalpa Kumar Roy', 'Dr. Swalpa Kumar Roy', 'JGEC', 'AGEMC', 'Machine Learning', 'Swalpa Google Scholar', "Swalapa Github"]
}


const Page = async () => {

  const projects = await getProjects();
  if (!projects) return <Loading />

  return (
    <div className="min-h-[85vh] w-full flex flex-col items-center p-3 pb-2 lg:p-5">
      <p className="h2-heading w-full md:w-4/5 lg:w-2/3 h-fit">Projects</p>
      <div className="w-full md:w-4/5 lg:w-2/3 p-1 space-y-2 lg:p-2">
        {
          projects.map((project, index) => (
            <div key={index} className="w-full min-w-2 p-1 flex gap-2 px-2 text-base lg:text-xl font-medium text-black text-opacity-75">
              <p>{index+1}.</p>
              <Link href={`/projects/${project._id}`} className="hover:underline hover:text-blue-500" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.title)}} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Page