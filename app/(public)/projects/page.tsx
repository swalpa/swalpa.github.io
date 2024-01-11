import Loading from "@/components/common/Loading";
import { cn } from "@/lib/utils";
import { getProjects } from "@/services/serverActions";
import { ProjectCategory } from "@/types/enums.";
import DOMPurify from "isomorphic-dompurify";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


export const metadata: Metadata = {
  title: 'Projects | Dr. Swalpa Kumar Roy',
  description: 'Projects of Dr. Swalpa Kumar Roy',
  keywords: ['Swalpa', 'Swalpa Roy', 'Swalpa Kumar Roy', 'Dr. Swalpa Kumar Roy', 'JGEC', 'AGEMC', 'Machine Learning', 'Swalpa Google Scholar', "Swalapa Github"]
}


const Page = async () => {

  const projects = await getProjects();
  if (!projects) return <Loading />

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-3 pb-2 lg:p-5">
      <p className="h2-heading w-full md:w-4/5 lg:w-2/3 h-fit">Projects</p>
      <div className="w-full md:w-4/5 lg:w-2/3 p-1 lg:p-2">
        <p className="h2-heading text-base border-black/15 lg:text-lg mt-2 md:mt-2">Science and Engineering Research Board (SERB) Funded</p>
        {
          projects.filter(obj => obj.category === ProjectCategory.CG).map((project, index) => (
            <div key={index} className="w-full min-w-2 p-1 flex gap-2 px-2 text-base lg:text-lg font-medium text-black text-opacity-75">
              <p>{index+1}.</p>
              <Link href={`/projects/${project._id}`} className="hover:underline hover:text-blue-500" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.title)}} />
            </div>
          ))
        }
        <p className="h2-heading text-base border-black/15 lg:text-lg mt-2 md:mt-2">Indian Space Research Organisation (ISRO) Funded</p>
        {
          projects.filter(obj => obj.category === ProjectCategory.ISRO).map((project, index) => (
            <div key={index} className="w-full min-w-2 p-1 flex gap-2 px-2 text-base lg:text-lg font-medium text-black text-opacity-75">
              <p>{index+1}.</p>
              <Link href={`/projects/${project._id}`} className="hover:underline hover:text-blue-500" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.title)}} />
            </div>
          ))
        }
        <p className="h2-heading text-base border-black/15 lg:text-lg mt-2 md:mt-2">West Bengal  Department of Science & Technology (WB-DST) Funded</p>
        {
          projects.filter(obj => obj.category === ProjectCategory.WBDST).map((project, index) => (
            <div key={index} className="w-full min-w-2 p-1 flex gap-2 px-2 text-base lg:text-lg font-medium text-black text-opacity-75">
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

// const Page = async () => {
//   const projects = await getProjects();
//   if (!projects) return <Loading />
//   return (
//     <Suspense fallback={<Loading />}>
//       <main className="w-full flex flex-col items-center p-5 min-h-screen">
//         <h2 className="h2-heading w-full md:w-3/4 xl:w-3/4">Projects</h2>
//         <div className="w-full md:w-4/5 xl:w-3/4 px-2">
//           <p className="h2-heading text-lg mt-1 md:mt-2">Science and Engineering Research Board (SERB) Funded</p>
//           {
//             projects.filter(obj => obj.category === ProjectCategory.CG).map((project, index) => (
//               <div key={index} className={cn('p-1 pb-3', projects.length !== index+1 && 'border-b border-black/10 p-1 pb-3')}>
//                 <div className="flex flex-col-reverse items-center md:flex-row gap-2 md:gap-x-5 lg:gap-x-8">
//                   <div className="w-full md:w-3/4">
//                     <Link href={`/projects/${project._id}`} className="text-lg lg:text-2xl font-medium hover:text-blue-500 hover:underlin" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.title)}} />
//                     <p className="text-xs md:text-sm lg:text-base text-black text-opacity-70 my-1 mb-2 text-justify">{project.description.length > 220 ? project.description.slice(0, 219) + "..." : project.description}</p>
//                   </div>
//                   {
//                     project.image && <Image src={project.image} width={300} height={300} alt="image" className="w-full md:w-1/5 h-32 lg:h-32 object-cover rounded-sm" />
//                   }
//                 </div>
//                 <div className="flex flex-wrap gap-x-3">
//                   {
//                     project.links.map((link, index) => (
//                       <Link className="p-1 px-1 border border-black/50 rounded-sm hover:bg-black/80 hover:text-white transition" key={index} href={link.value}>
//                         {link.name}
//                       </Link>
//                     ))
//                   }
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//         <div className="w-full md:w-4/5 xl:w-3/4 px-2">
//           <p className="h2-heading text-lg mt-1 md:mt-2">Indian Space Research Organisation (ISRO) Funded</p>
//           {
//             projects.filter(obj => obj.category === ProjectCategory.ISRO).map((project, index) => (
//               <div key={index} className={cn('p-1 pb-3', projects.length !== index+1 && 'border-b border-black/10 p-1 pb-3')}>
//                 <div className="flex flex-col-reverse items-center md:flex-row gap-2 md:gap-x-5 lg:gap-x-8">
//                   <div className="w-full md:w-3/4">
//                     <Link href={`/projects/${project._id}`} className="text-lg lg:text-2xl font-medium hover:text-blue-500 hover:underline">{project.title}</Link>
//                     <p className="text-xs md:text-sm lg:text-base text-black text-opacity-70 my-1 mb-2 text-justify">{project.description.length > 220 ? project.description.slice(0, 219) + "..." : project.description}</p>
//                   </div>
//                   {
//                     project.image && <Image src={project.image} width={300} height={300} alt="image" className="w-full md:w-1/5 h-32 lg:h-32 object-cover rounded-sm" />
//                   }
//                 </div>
//                 <div className="flex flex-wrap gap-x-3">
//                   {
//                     project.links.map((link, index) => (
//                       <Link className="p-1 px-1 border border-black/50 rounded-sm hover:bg-black/80 hover:text-white transition" key={index} href={link.value}>
//                         {link.name}
//                       </Link>
//                     ))
//                   }
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//         <div className="w-full md:w-4/5 xl:w-3/4 px-2">
//           <p className="h2-heading text-lg mt-1 md:mt-2">West Bengal Department of Science and Technology (WB-DST) Funded</p>
//           {
//             projects.filter(obj => obj.category === ProjectCategory.WBDST).map((project, index) => (
//               <div key={index} className={cn('p-1 pb-3', projects.length !== index+1 && 'border-b border-black/10 p-1 pb-3')}>
//                 <div className="flex flex-col-reverse items-center md:flex-row gap-2 md:gap-x-5 lg:gap-x-8">
//                   <div className="w-full md:w-3/4">
//                     <Link href={`/projects/${project._id}`} className="text-lg lg:text-2xl font-medium hover:text-blue-500 hover:underline">{project.title}</Link>
//                     <p className="text-xs md:text-sm lg:text-base text-black text-opacity-70 my-1 mb-2 text-justify">{project.description.length > 220 ? project.description.slice(0, 219) + "..." : project.description}</p>
//                   </div>
//                   {
//                     project.image && <Image src={project.image} width={300} height={300} alt="image" className="w-full md:w-1/5 h-32 lg:h-32 object-cover rounded-sm" />
//                   }
//                 </div>
//                 <div className="flex flex-wrap gap-x-3">
//                   {
//                     project.links.map((link, index) => (
//                       <Link className="p-1 px-1 border border-black/50 rounded-sm hover:bg-black/80 hover:text-white transition" key={index} href={link.value}>
//                         {link.name}
//                       </Link>
//                     ))
//                   }
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </main>
//     </Suspense>
//   )
// }

// export default Page

