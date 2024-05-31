import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates | Swalpa Kumar Roy",
  description: "Updates about Dr. Swalpa Kumar Roy",
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
    "Updates",
    "News",
    "Events",
  ],
};

const Page = async () => {
  const data = await getUpdates();
  return (
    <div className="w-full flex justify-center p-5 min-h-[85vh]">
      <div className="w-full lg:w-2/3 xl:w-3/5">
        <h2 className="h2-heading">News</h2>
        <div className="w-full">
          {data &&
            data.map((update, index) => (
              <div
                key={index}
                className="flex gap-x-5 mx-4 border-b border-black/5 py-1"
              >
                <p className="text-blue-300 w-1/5 max-w-[125px]">
                  {update.date.toString().split("T")[0]}
                </p>
                <div
                  className="w-4/5"
                  dangerouslySetInnerHTML={{ __html: update.title }}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

const getUpdates = async () => {
  try {
    const { data } = await axios.get<TNews[]>(`${process.env.NEXT_PUBLIC_NEW_API_URL}/news`);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};