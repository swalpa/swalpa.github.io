//Uses new API
import axios from "axios";
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
    <div className="w-full flex justify-center p-4 lg:p-7 min-h-screen bg-[#feffff]">
      <div className=" w-full md:w-3/4 lg:w-3/4 xl:w-2/3">
        <h2 className="text-4xl font-semibold pb-2">Teachings</h2>
        {teachingsHighlights &&
          teachingsHighlights.map((teachingHighlight, index) => (
            <div
              key={index}
              className="w-full flex flex-col-reverse lg:flex-row border-t border-black/20 pl-6 md:pl-9 lg:pl-12"
            >
              <ol className="w-full lg:w-[90%] lg:py-5">
                {teachingHighlight.teachings.map((teaching, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl lg:text-2xl py-2 font-medium list-decimal"
                  >
                    <Link
                      key={index}
                      href={`teaching/${teaching.id}`}
                      className="text-gray-800 hover:text-blue-500 hover:underline hover:cursor-pointer lg:pl-1"
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

const getTeachings = async () => {
  try {
    const { data } = await axios.get<TTeachings[]>(
      `${process.env.NEXT_PUBLIC_NEW_API_URL}/teachings/highlights`
    );

    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default Page;
