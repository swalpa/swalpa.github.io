import axios from "axios";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import { getSpecificProject } from "@/services/serverActions";
import { ProjectCategory } from "@/types/enums.";

import Loading from "@/components/common/loading";
import SheetWrapper from "@/components/wrappers/sheet-wrapper";
import { Metadata, ResolvingMetadata } from "next";

const server: string = process.env.NEXT_PUBLIC_API_URL!;

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const { data } = await axios.get<ProjectType>(`${server}/projects/${id}`);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title,
    keywords: [
      data.category,
      data.title,
      "Swalpa Kumar Roy",
      "Swalpa Roy",
      "Research",
      "Research Projects",
      "ISRO",
      "WBDST",
      "SERB",
      "West Bengal",
      "India",
      "Indian Space Research Organisation",
      "Science and Engineering Research Board",
      "West Bengal Department of Science and Technology",
      "Research Projects in India",
      "Research Projects in West Bengal",
      "Research Projects in Indian Space Research Organisation",
      "Research Projects in Science and Engineering Research Board",
      "Research Projects in West Bengal Department of Science and Technology",
      "Research Projects in West Bengal",
      "Research Projects in India",
    ],
    openGraph: {
      images: [data.image, ...previousImages],
    },
  };
}

export async function generateStaticParams() {
  const { data } = await axios.get<ProjectType[]>(`${server}/projects`);

  if (!data) return [];
  return data.map((project) => ({
    id: project._id,
  }));
}
const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getSpecificProject(params.id);

  if (!data) return <Loading />;

  return (
    <SheetWrapper>
      <h2
        className="w-full h2-heading text-xl md:text-2xl lg:text-4xl font-semibold md:p-2"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(data.project.title),
        }}
      />
      <Image
        src={data.project.image}
        width={500}
        height={500}
        alt="image"
        className="w-full h-56 md:h-72 lg:h-96 object-contain rounded-sm"
      />
      <div>
        <p className="text-2xl font-semibold mt-3 mb-1">Description</p>
        <div
          className="text-justify px-2 text-sm md:text-base text-black text-opacity-75"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.project.description),
          }}
        />
      </div>
      <div>
        {data.project.informations && data.project.informations.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold mt-3">Details</h3>
            <table className="w-full text-sm lg:text-base lg:w-full lg:ml-3 mt-3 md:mt-5">
              <tbody>
                {data.project.informations.map((inf, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 == 0 ? "bg-[#e4e4e4]" : ""}`}
                  >
                    <td className="p-2">{inf.name}</td>
                    <td className="p-2 border-l border-black">{inf.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <div className="w-full h-[1px] bg-black/15 mt-5 my-2" />
      <div>
        <h2 className="text-xl lg:text-2xl font-semibold my-2">Publications</h2>
        <ul className="list-disc pl-4 md:pl-5 lg:pl-6 text-sm md:text-base">
          {data.publications.length === 0 ? (
            <p>Will be updated soon</p>
          ) : (
            data.publications.map((pub, index) => (
              <li
                key={index}
                className="my-3 md:my-4 lg:my-5 text-black text-opacity-80"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      (pub.paperLink
                        ? `<a class='hover:text-blue-500 hover:underline' target='_blank' href=${pub.paperLink} >${pub.title}</a>`
                        : pub.title) +
                        ". " +
                        pub.authors +
                        ". " +
                        pub.publisher +
                        ". "
                    ),
                  }}
                />
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="w-full h-[1px] bg-black/15 mt-5" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 px-3 text-base">
        {data.project.PI && data.project.PI.name && (
          <div className="border border-black/40 rounded-lg p-4 flex flex-col items-center">
            <div className="font-medium">{data.project.PI.name}</div>
            <p
              className="my-1 text-center text-black text-opacity-60"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.project.PI.designation),
              }}
            />
            <p className="font-semibold">Principal Investigator</p>
          </div>
        )}
        {data.project.CoPI_1 && data.project.CoPI_1.name && (
          <div className="border border-black/40 rounded-lg p-4 flex flex-col items-center">
            <div className="font-medium">{data.project.CoPI_1.name}</div>
            <p
              className="my-1 text-center text-black text-opacity-60"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.project.CoPI_1.designation),
              }}
            />
            <p className="font-semibold">
              Co-Principal Investigator {data.project.CoPI_2 && "I"}
            </p>
          </div>
        )}
        {data.project.CoPI_2 && data.project.CoPI_2.name && (
          <div className="border border-black/40 rounded-lg p-4 flex flex-col items-center">
            <div className="font-medium">{data.project.CoPI_2.name}</div>
            <p
              className="my-1 text-center text-black text-opacity-60"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data.project.CoPI_2.designation),
              }}
            />
            <p className="font-semibold">Co-Principal Investigator II</p>
          </div>
        )}
      </div>
      <div className="w-full h-[1px] bg-black/20 mt-5" />
      <p className="uppercase text-center my-2 font-medium">Sponsored by</p>
      <div className="w-full p-2 flex justify-center pb-3">
        {data.project.category === ProjectCategory.CG && (
          <img
            src="https://i.ibb.co/7g48NnK/Science-and-Engineering-Research-Board.png"
            alt="SERB Image"
            className="h-56 object-contain"
          />
        )}
        {data.project.category === ProjectCategory.ISRO && (
          <img
            src="https://i.ibb.co/1Gp83zZ/1200px-Indian-Space-Research-Organisation-Logo-svg.png"
            alt="ISRO image"
            className="h-56 object-contain"
          />
        )}
        {data.project.category === ProjectCategory.WBDST && (
          <img
            src="https://i.ibb.co/BfVHpCc/Emblem-of-West-Bengal-01.png"
            alt="WB-DST image"
            className="h-56 object-contain"
          />
        )}
      </div>
    </SheetWrapper>
  );
};

export default Page;
