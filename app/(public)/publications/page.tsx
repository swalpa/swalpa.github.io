// Uses new API
import Loading from "@/components/common/loading";
import { refactorPublications } from "@/lib/refactor-publications";
import { cn } from "@/lib/utils";
import { TPublication } from "@/lib/validations/publications";
import axios from "axios";
import { sanitize } from "isomorphic-dompurify";
import { LucideCalendar } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Publications | Swalpa Kumar Roy",
  description: "Publications of Dr. Swalpa Kumar Roy",
  keywords: [
    "Swalpa",
    "Swalpa Roy",
    "Swalpa Kumar Roy",
    "Dr. Swalpa Kumar Roy",
    "JGEC",
    "AGEMC",
    "Machine Learning",
    "Swalpa Google Scholar",
    "Swalapa Github",
    "Gernal Publications",
    "Research Publications",
  ],
};

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
            {publications &&
              publications.map((publicationWithYear, index) => (
                <div key={index} className="w-full flex flex-col items-center">
                  <div className="h2-heading border-black/15 w-[98%]">
                    <div className="w-3 h-3 flex gap-x-2 items-center mb-2">
                      <div>
                        <LucideCalendar />
                      </div>
                      <p className="text-xl">{publicationWithYear.year}</p>
                    </div>
                  </div>
                  <div className="w-[95%] mb-5">
                    {publicationWithYear.publications
                      .filter((obj) => obj.category === "journal")
                      .map((publication, index) => (
                        <PublicationComp
                          key={index}
                          publication={publication}
                        />
                      ))}
                    {publicationWithYear.publications
                      .filter((obj) => obj.category === "conference")
                      .map((publication, index) => (
                        <PublicationComp
                          key={index}
                          publication={publication}
                        />
                      ))}
                    {publicationWithYear.publications
                      .filter((obj) => obj.category === "book")
                      .map((publication, index) => (
                        <PublicationComp
                          key={index}
                          publication={publication}
                        />
                      ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </Suspense>
  );
};

export default Page;

const getPublications = async () => {
  try {
    const { data } = await axios.get<TPublication[]>(
      `${process.env.NEXT_PUBLIC_NEW_API_URL}/publications`
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

function PublicationComp({ publication }: { publication: TPublication }) {
  return (
    <div className="flex gap-x-4 my-1.5">
      <p className="text-base font-semibold mt-0.5">{publication.index}</p>
      <div className="my-1.5">
        <i
          dangerouslySetInnerHTML={{ __html: sanitize(publication.authors) }}
        />
        &nbsp; &quot;
        {publication.paperLink ? (
          <span>
            <Link
              href={publication.paperLink}
              className="hover:underline hover:text-blue-500"
            >
              {publication.title}
            </Link>
          </span>
        ) : (
          <span>{publication.title}</span>
        )}
        &quot;&nbsp;
        <span>{publication.publisher}</span>
        {publication.links &&
          publication.links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={cn(
                "border border-black/25 rounded-sm px-1 py-0.5 ",
                index === 0 ? "ml-1" : "ml-2"
              )}
            >
              {link.name}
            </Link>
          ))}
        &nbsp;
        {publication.highlighted && (
          <span className="text-rose-400 text-xs animate-pulse">
            ESI Highly Cited Paper
          </span>
        )}
      </div>
    </div>
  );
}
