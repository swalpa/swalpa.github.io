//Uses new API
import Loading from "@/components/common/loading";
import { TProject } from "@/lib/validations/project";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Swalpa Kumar Roy",
  description: "Projects of Dr. Swalpa Kumar Roy",
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
  ],
};

const Page = async () => {
  const { data, status } = await getProjects();
  if (status !== 200 || !data) return <Loading />;

  return (
    <div className="min-h-[85vh] w-full flex flex-col items-center p-3 pb-2 lg:p-5 bg-[#feffff] ">
      <p className="h2-heading w-full lg:w-4/5 h-fit md:mt-5">Grants and Funding</p>
      <div className="w-full md:w-4/5 lg:w-3/4 p-1 space-y-2 lg:p-2">
        {data.map((project, index) => (
          <div
            key={index}
            className="w-full min-w-2 p-1 flex gap-2 px-2 text-base lg:text-xl font-medium text-black text-opacity-75"
          >
            <p>{index + 1}.</p>
            <Link
              href={`/projects/${project.id}`}
              className="hover:underline hover:text-blue-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(project.title),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

async function getProjects() {
  const { data, status } = await axios.get<TProject[]>(
    `${process.env.NEXT_PUBLIC_NEW_API_URL}/projects`
  );

  return { data, status };
}

