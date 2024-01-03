import Loading from "@/components/common/Loading"
import { getProjects, getSpecificProject } from "@/services/serverActions"
import axios from "axios";
import Link from "next/link"
import { Suspense } from "react"

export async function generateStaticParams() {
  const { data } = await axios.get<ProjectType[]>(`https://swalpa-backend.onrender.com/projects`);
  if (!data) return [];
  return data.map((project) => ({
    id: project._id,
  }));
}
const Page = async ({ params }: { params: { id: string } }) => {

  const project = await getSpecificProject(params.id);
  if (!project) return <Loading />
  return (
    <Suspense fallback={<Loading />}>
      <main className='w-full flex justify-center p-3 bg-[#f8fafc] min-h-[85vh]'>
        <div className="w-full md:w-3/4 lg:w-3/4 xl:w-3/5 px-2 rounded-md flex flex-col gap-3 items-center">
          <h2 className="w-full text-2xl md:text-3xl xl:text-4xl font-medium p-3 border-b border-black/10">{project.title}</h2>
          <div className="flex flex-wrap gap-x-2 w-full px-5">
            {
              project.links.map((link, index) => (
                <Link target="_blank" href={link.value} key={index}
                  className="p-1 px-1 border border-black/50 rounded-sm hover:bg-black/80 hover:text-white transition">{link.name}</Link>
              ))
            }
          </div>
          {
            project.image && <img src={project.image} width={250} height={250} alt="image" className="w-full h-44 md:h-56 lg:h-72 xl:h-96 object-fit rounded-md px-5" />
          }
          <div className="px-3 w-full">
            <h3 className="text-3xl font-medium mt-6 my-2">Description</h3>
            <p className="lg:text-lg text-justify px-1 text-black/80 tracking-tighter space-y-0">{project.description}</p>
          </div>
          {
            project.collaborators && (
              <i className="px-2 md:px-3 py-1 w-full flex gap-x-2 items-center">
                <h3 className="text-base lg:text-xl font-medium">Principal investigators: </h3>
                <p className="ltext-base g:text-lg text-justify px-1 text-black/80">{project.collaborators}</p>
              </i>
            )
          }
          {
            project.informations.length > 0 && (
              <div className="mb-5 px-3 w-full">
                <h3 className="text-3xl mt-4 mb-3 font-medium">Details</h3>
                <table className="w-full mt-2 px text-base lg:text-lg">
                  <tbody>
                    <tr className="border-b border-black/50">
                      <th className="border-r border-black/50">Point</th>
                      <th>Description</th>
                    </tr>
                  </tbody>
                  <tbody>
                    {
                      project.informations.map((info, index) => (
                        <tr key={index} className={`p-1 ${index % 2 == 1 ? "bg-slate-200" : null}`}>
                          <td className="border-r border-black/50 p-1 text-black">{info.name}</td>
                          <td className="p-1 text-black/75">{info.value}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            )
          }
        </div>
      </main>
    </Suspense>
  )
}

export default Page