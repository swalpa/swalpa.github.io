import Loading from "@/components/common/Loading";
import { getProjects } from "@/services/serverActions";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const Page = async () => {
  const projects = await getProjects();
  if (!projects) return <Loading />
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full flex flex-col items-center p-5 min-h-[85vh]">
        <h2 className="h2-heading w-full md:w-3/4 xl:w-3/5">Projects</h2>
        <div className="w-full md:w-4/5 xl:w-3/5 px-2">
          {
            projects.map((project, index) => (
              <div key={index} className="border-b border-black/10 p-1 pb-3">
                <div className="flex flex-col-reverse items-center md:flex-row gap-2 md:gap-x-5 lg:gap-x-8">
                  <div className="w-full md:w-4/5">
                    <Link href={`/projects/${project._id}`} className="text-lg lg:text-2xl font-medium hover:text-blue-500 hover:underline">{project.title}</Link>
                    <p className="text-xs md:text-sm lg:text-base text-black text-opacity-70 my-1 mb-2 text-justify">{project.description.length > 220 ? project.description.slice(0, 219) + "..." : project.description}</p>
                  </div>
                  {
                    project.image && <Image src={project.image} width={100} height={100} alt="image" className="w-full md:w-1/5 h-32 lg:h-32 object-cover rounded-sm" />
                  }
                </div>
                <div className="flex flex-wrap gap-x-3">
                  {
                    project.links.map((link, index) => (
                      <Link className="p-1 px-1 border border-black/50 rounded-sm hover:bg-black/80 hover:text-white transition" key={index} href={link.value}>
                        {link.name}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </Suspense>
  )
}

export default Page