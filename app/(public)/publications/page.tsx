import Loading from "@/components/common/Loading";
import { refactorPublications } from "@/lib/refactor-publications";
import { cn } from "@/lib/utils";
import { getPublications } from "@/services/serverActions";
import { PublicationCategory } from "@/types/enums.";
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
  
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full flex flex-col items-center p-3 lg:p-5 min-h-screen">
        <div className="w-full md:w-4/5 lg:w-4/5 xl:w-3/4">
          <h2 className="h2-heading mb-1 lg:my-3">Publications</h2>

          <div className="flex flex-col items-center mt-5">
            {
              publications && (
                publications.map((publicationWithYear, index) => (
                  <div key={index} className="w-full flex flex-col items-center">
                    <div className="h2-heading border-black/10 w-[98%]">
                      <div className="w-3 h-3 flex gap-x-2 items-center mb-2">
                        <div><LucideCalendar /></div>
                        <p className="text-xl">{publicationWithYear.year}</p>
                      </div>
                    </div>
                    <div className="w-[95%] mb-5">
                      {publicationWithYear.publications.filter(obj => obj.category === PublicationCategory.Journal).map((publication, index) => (
                        <div key={index} className={cn('w-full flex flex-col lg:flex-row items-start gap-x-8 p-1 lg:p-2 text-justify', publicationWithYear.publications.length !== index + 1 && 'border-b border-black/10')}>
                          <div className="w-[160px] lg:w-[2%] pt-1 my-2 lg:my-0 flex gap-x-2 justify-between items-center">
                            <p className="font-semibold">{publication.serialNumber}</p>
                            {publication.highlighted && <section className="animate-pulse text-red-600 text-xs block lg:hidden min-w-[170px]">ESI Highly Cited Paper</section>}
                          </div>

                          <div className="w-[83%] lg:text-xl flex flex-col gap-2 font-medium">
                            {publication.paperLink ? <Link target="_blank" className="text-blue-500 hover:underline cursor-pointer" href={publication.paperLink}>{publication.title}</Link>
                              : <p className="font-medium">{publication.title}</p>}
                            <i className="text-sm lg:text-base text-black text-opacity-80 font-normal" dangerouslySetInnerHTML={{ __html: publication.authors }} />
                            <p className="text-xs lg:text-sm text-black text-opacity-90 font-normal">{publication.publisher}</p>
                            <div className="flex flex-wrap gap-3 mt-1 lg:mt-2">
                              {
                                publication.links.map((item, index) => (
                                  <Link target="_blank" href={item.link} key={index} className="px-2 p-1 text-sm border border-black/30 hover:text-white hover:bg-black/90 transition rounded-sm w-fit">{item.name}</Link>
                                ))
                              }
                            </div>
                          </div>
                          {publication.highlighted && <section className="hidden lg:block animate-pulse text-red-600 text-xs min-w-[170px]">ESI Highly Cited Paper</section>}
                        </div>
                      ))}
                      {publicationWithYear.publications.filter(obj => obj.category === PublicationCategory.Conference).map((publication, index) => (
                        <div key={index} className={cn('w-full flex flex-col lg:flex-row items-start gap-x-8 p-1 lg:p-2 text-justify', publicationWithYear.publications.length !== index + 1 && 'border-b border-black/10')}>
                          <div className="w-[160px] lg:w-[2%] pt-1 my-2 lg:my-0 flex gap-x-2 justify-between items-center">
                            <p className="font-semibold">{publication.serialNumber}</p>
                            {publication.highlighted && <section className="animate-pulse text-red-600 text-xs block lg:hidden min-w-[170px]">ESI Highly Cited Paper</section>}
                          </div>
                          <div className="w-[90%] lg:text-xl flex flex-col gap-2 font-medium">
                            {publication.paperLink ? <Link target="_blank" className="text-blue-500 hover:underline cursor-pointer" href={publication.paperLink}>{publication.title}</Link> : <p className="font-medium">{publication.title}</p>}
                            <i className="text-sm lg:text-base text-black text-opacity-80 font-normal" dangerouslySetInnerHTML={{ __html: publication.authors }} />
                            <p className="text-xs lg:text-sm text-black text-opacity-90 font-normal">{publication.publisher}</p>
                            <div className="flex flex-wrap gap-3 mt-1 lg:mt-2">
                              {
                                publication.links.map((item, index) => (
                                  <Link target="_blank" href={item.link} key={index} className="px-2 p-1 text-sm border border-black/30 hover:text-white hover:bg-black/90 transition rounded-sm w-fit">{item.name}</Link>
                                ))
                              }
                            </div>
                            {publication.highlighted && <section className="hidden lg:block animate-pulse text-red-800 text-sm font-semibold min-w-[170px]">ESI Highly Cited Paper</section>}
                          </div>
                        </div>
                      ))}
                      {publicationWithYear.publications.filter(obj => obj.category === PublicationCategory.Book).map((publication, index) => (
                        <div key={index} className={cn('w-full flex flex-col lg:flex-row items-start gap-x-8 p-1 lg:p-2 text-justify', publicationWithYear.publications.filter(obj => obj.category === PublicationCategory.Book).length !== index + 1 && 'border-b border-black/10')}>
                          <div className="w-[2%] pt-1 my-2 lg:my-0 flex gap-x-3 justify-between items-center">
                            <p className="font-semibold">{publication.serialNumber}</p>
                            {publication.highlighted && <section className="animate-pulse text-red-600 text-xs block lg:hidden min-w-[170px]">ESI Highly Cited Paper</section>}
                          </div>
                          <div className="w-[90%] lg:text-xl flex flex-col gap-2 font-medium">
                            {publication.paperLink ? <Link target="_blank" className="text-blue-500 hover:underline cursor-pointer" href={publication.paperLink}>{publication.title}</Link> : <p className="font-medium">{publication.title}</p>}
                            <i className="text-sm lg:text-base text-black text-opacity-80 font-normal" dangerouslySetInnerHTML={{ __html: publication.authors }} />
                            <p className="text-xs lg:text-sm text-black text-opacity-90 font-normal">{publication.publisher}</p>
                            <div className="flex flex-wrap gap-3 mt-1 lg:mt-2">
                              {
                                publication.links.map((item, index) => (
                                  <Link target="_blank" href={item.link} key={index} className="px-2 p-1 text-sm border border-black/30 hover:text-white hover:bg-black/90 transition rounded-sm w-fit">{item.name}</Link>
                                ))
                              }
                            </div>
                            {publication.highlighted && <section className="hidden lg:block animate-pulse text-red-600 text-xs min-w-[170px]">ESI Highly Cited Paper</section>}
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