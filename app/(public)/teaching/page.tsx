import { getTeachings } from "@/services/serverActions";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Teachings | Swalpa Kumar Roy",
  description: "Teachings of Dr. Swalpa Kumar Roy",
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
  const teachingsHighlights = await getTeachings();
  return (
    <div className="w-full flex justify-center p-4 lg:p-7 min-h-screen bg-[#F4F2F4]">
      <div className=" w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-4xl font-semibold pb-2">Teachings</h2>
        {teachingsHighlights &&
          teachingsHighlights.map((teachingHighlight, index) => (
            <div
              key={index}
              className="w-full flex flex-col-reverse lg:flex-row border-t border-black/20 pl-6 md:pl-8 lg:pl-10"
            >
              <ol className="w-full lg:w-[90%] lg:py-5">
                {teachingHighlight.teachings.map((teaching, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl lg:text-2xl py-2 font-medium list-decimal"
                  >
                    <Link
                      key={index}
                      href={`teaching/${teaching._id}`}
                      className="text-gray-800 hover:text-blue-500 hover:underline hover:cursor-pointer"
                    >
                      {teaching.title}
                    </Link>
                  </li>
                ))}
              </ol>
              <i className="w-full lg:w-[10%] text-2xl md:3xl lg:text-4xl pt-2 text-right opacity-30">
                {teachingHighlight.year}
              </i>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Page;
