import Loading from "@/components/common/Loading";
import useFetchPublications from "@/services/hooks/useFetchPublications";
import { getPublications } from "@/services/serverActions";
import Link from "next/link";
import { Suspense } from "react";

const Page = async () => {
  const data = await getPublications();

  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full flex flex-col items-center p-3 lg:p-5 min-h-[85vh]">
        <div className="w-full md:w-3/4 lg:w-3/5">
          <h2 className="h2-heading mb-1 lg:my-3">Publications</h2>
          <div className="w-full">
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
          </div>
        </div>
      </main>
    </Suspense>
  )
}

export default Page