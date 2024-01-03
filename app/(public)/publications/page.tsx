import Loading from "@/components/common/Loading";
import { refactorPublications } from "@/lib/refactor-publications";
import { cn } from "@/lib/utils";
import { getPublications } from "@/services/serverActions";
import { LucideCalculator, LucideCalendar } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Publications | Dr. Swalpa Kumar Roy',
  description: 'Publications of Dr. Swalpa Kumar Roy',
  keywords: ['Swalpa', 'Swalpa Roy', 'Swalpa Kumar Roy', 'Dr. Swalpa Kumar Roy', 'JGEC', 'AGEMC', 'Machine Learning', 'Swalpa Google Scholar', "Swalapa Github", "Gernal Publications", "Research Publications"]
}

const Page = async () => {
  const data = await getPublications();
  if (!data) return null;
  const publications = refactorPublications(data);
  console.log(publications);
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full flex flex-col items-center p-3 lg:p-5 min-h-screen">
        <div className="w-full md:w-4/5 lg:w-3/4 xl:w-3/5">
          <h2 className="h2-heading mb-1 lg:my-3">Publications</h2>
          {/* <div className="w-full">
            {data && data.map((publication, index) => (
              <div key={index} className="w-full flex flex-col lg:flex-row items-start gap-x-8 p-1 lg:p-2 border-b border-black/10 text-justify">
                <div className="w-[8%] pt-1 my-2 lg:my-0 flex gap-x-3 justify-between items-center">
                  <p className="font-semibold">{publication.serialNumber}</p>
                  <p className="text-black text-opacity-80">{publication.year}</p>
                </div>
                <div className="w-[92%] lg:text-xl flex flex-col gap-2 font-medium">
                  {publication.paperLink ? <Link target="_blank" className="text-blue-500 hover:underline cursor-pointer" href={publication.paperLink}>{publication.title}</Link> : <p className="font-medium">{publication.title}</p>}
                  <i className="text-sm lg:text-base text-black text-opacity-80 font-normal">{publication.authors}</i>
                  <p className="text-xs lg:text-sm text-black text-opacity-90 font-normal">{publication.publisher}</p>
                  <div className="flex flex-wrap gap-3 mt-1 lg:mt-2">
                    {
                      publication.links.map((item, index) => (
                        <Link target="_blank" href={item.link} key={index} className="px-2 p-1 text-sm border border-black/30 hover:text-white hover:bg-black/90 transition rounded-sm w-fit">{item.name}</Link>
                      ))
                    }
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="flex flex-col items-center mt-5">
            {
              publications && (
                publications.map((publicationWithYear, index) => (
                  <div key={index} className="w-full flex flex-col items-center">
                    <div  className="h2-heading border-black/10 w-[98%]">
                      <div className="w-3 h-3 flex gap-x-2 items-center mb-2">
                        <div><LucideCalendar /></div>
                        <p className="text-xl">{publicationWithYear.year}</p>
                      </div>
                    </div>
                    <div className="w-[95%] mb-5">
                      {publicationWithYear.publications.map((publication, index) => (
                        <div key={index} className={cn('w-full flex flex-col lg:flex-row items-start gap-x-8 p-1 lg:p-2 text-justify', publicationWithYear.publications.length !== index + 1 && 'border-b border-black/10')}>
                          <div className="w-[2%] pt-1 my-2 lg:my-0 flex gap-x-3 justify-between items-center">
                            <p className="font-semibold">{publication.serialNumber}</p>
                          </div>
                          <div className="w-[92%] lg:text-xl flex flex-col gap-2 font-medium">
                            {publication.paperLink ? <Link target="_blank" className="text-blue-500 hover:underline cursor-pointer" href={publication.paperLink}>{publication.title}</Link> : <p className="font-medium">{publication.title}</p>}
                            <i className="text-sm lg:text-base text-black text-opacity-80 font-normal">{publication.authors}</i>
                            <p className="text-xs lg:text-sm text-black text-opacity-90 font-normal">{publication.publisher}</p>
                            <div className="flex flex-wrap gap-3 mt-1 lg:mt-2">
                              {
                                publication.links.map((item, index) => (
                                  <Link target="_blank" href={item.link} key={index} className="px-2 p-1 text-sm border border-black/30 hover:text-white hover:bg-black/90 transition rounded-sm w-fit">{item.name}</Link>
                                ))
                              }
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )
            }
          </div>
        </div>
      </main>
    </Suspense>
  )
}

export default Page