//New API in use
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

import { Metadata } from "next";
import { getAchievements } from "@/services/serverActions";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LucideAward } from "lucide-react";
import Loading from "@/components/common/loading";

export const metadata: Metadata = {
  title: "Achievements | Swalpa Kumar Roy",
  description: "Achievements of Dr. Swalpa Kumar Roy",
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
    "Achievements",
  ],
};

const mediaImages: string[] = [
  "https://i.postimg.cc/ZqXgSYmd/22-09-2025.png",
  "https://i.postimg.cc/xdMV3sDx/240717-23h16m42s-screenshot.png",
  "https://i.postimg.cc/MKJPmv4x/6305398456436506913.jpg",
  "https://i.ibb.co/7jJg8j5/Whats-App-Image-2024-02-10-at-3-24-29-PM-1.jpg",
  "https://i.ibb.co/N99ywxH/Whats-App-Image-2024-02-10-at-3-24-29-PM.jpg",
  "https://i.ibb.co/tZb3H0Q/Whats-App-Image-2024-02-10-at-3-24-29-PM-2.jpg",
  "https://i.postimg.cc/wBvsry6V/Whats-App-Image-2024-04-25-at-10-26-54-PM.jpg",
  "https://i.postimg.cc/YCZn784P/pdfresizer-com-pdf-crop-1.png",
  "https://i.postimg.cc/VLMj4gtH/6305398456436506914.jpg",
];

const academicImages = [
  "https://i.postimg.cc/V61f1t3p/6305399092091666670.jpg",
  "https://i.postimg.cc/d0Gsz6SG/6305399092091666671.jpg",
  "https://i.postimg.cc/yxwsrP0m/DSC-7696.webp",
  "https://i.postimg.cc/bN96Y3Dj/Associate-Batch-2024-2.jpg",
];

const Page = async () => {
  const achievements = await getAchievements();
  if (!achievements) return <Loading />;
  return (
    <main className="w-full flex justify-center p-3 lg:p-5 min-h-screen bg-[#feffff]">
      <div className="w-full md:w-4/5 md:min-w-[770px] lg:min-w-[900px] xl:w-4/5">
        <h2 className="h2-heading">Honors and Awards</h2>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center md:px-1.5 lg:px-3">
            {achievements
              .filter((obj) => obj.image)
              .map((achievement, index) => (
                <AchievementWithImage key={index} data={achievement} />
              ))}
          </div> */}
        <div className="my-5 mb-7 pr-1">
          <h3 className="text-2xl font-semibold my-2 md:px-2 flex gap-x-1 items-center">
            <LucideAward size={23} /> International recognitions
          </h3>
          <ul className="list-disc pl-10 md:pl-12">
            {achievements
              .filter((obj) => obj.category === "international")
              .map((achievement, index) => (
                <AchievementImageItem key={index} data={achievement} />
              ))}
          </ul>
        </div>
        <div className="my-3 mb-7 pr-1">
          <h3 className="text-2xl font-semibold my-2 md:px-2 flex gap-x-1 items-center">
            <LucideAward size={23} /> National recognitions
          </h3>
          <ul className="list-disc pl-10 md:pl-12">
            {achievements
              .filter((obj) => obj.category === "national")
              .map((achievement, index) => (
                <AchievementImageItem key={index} data={achievement} />
              ))}
          </ul>
        </div>
        <div className="my-3 mb-7 pr-1">
          <h3 className="text-2xl font-semibold my-2 md:px-2 flex gap-x-1 items-center">
            <LucideAward size={23} /> Academy recognitions
          </h3>
          <ul className="list-disc pl-10 md:pl-12">
            {achievements
              .filter((obj) => obj.category === "academy")
              .map((achievement, index) => (
                <AchievementImageItem key={index} data={achievement} />
              ))}
          </ul>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 px-2 md:px-6 lg:px-8 mt-4">
            {academicImages.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger
                  key={index}
                  className="p-4 bg-zinc-100 shadow-sm shadow-black/10 rounded-sm border border-black/5"
                >
                  <div className="h-56 overflow-hidden">
                    <Image
                      src={image}
                      alt="Media Coverage"
                      width={300}
                      height={300}
                    />
                  </div>
                </DialogTrigger>
                <DialogContent className="max-h-fit flex flex-col items-center">
                  <Image
                    src={image}
                    alt="Media Coverage"
                    width={300}
                    height={300}
                    className="max-h-[48rem] w-full object-contain mt-1.5"
                  />
                  <Link
                    href={image}
                    target="_blank"
                    className="w-fit flex items-center gap-x-2 bg-black rounded-md text-white p-2 px-4 font-medium hover:bg-black/80 transition"
                  >
                    Expand
                  </Link>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
        {/* <div className="my-3 mb-7 pr-1">
          <h3 className="text-2xl font-semibold my-2 md:px-2 flex gap-x-1 items-center">
            <LucideAward size={23} /> Talks
          </h3>
          <ul className="list-disc pl-10 md:pl-12">
            {achievements
              .filter((obj) => obj.category === "talk")
              .map((achievement, index) => (
                <AchievementImageItem key={index} data={achievement} />
              ))}
          </ul>
        </div> */}
        <h3 className="text-2xl font-semibold my-2 md:px-2 flex gap-x-1 mt-3 items-center">
          <LucideAward size={23} /> Media highlights
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-4 px-2 md:px-6 lg:px-8">
          {mediaImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger
                key={index}
                className="p-4 bg-zinc-100 shadow-sm shadow-black/10 rounded-sm border border-black/5"
              >
                <div className="h-56 overflow-hidden">
                  <Image
                    src={image}
                    alt="Media Coverage"
                    width={300}
                    height={300}
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="max-h-fit flex flex-col items-center">
                <Image
                  src={image}
                  alt="Media Coverage"
                  width={300}
                  height={300}
                  className="max-h-[48rem] w-full object-contain mt-1.5"
                />
                <Link
                  href={image}
                  target="_blank"
                  className="w-fit flex items-center gap-x-2 bg-black rounded-md text-white p-2 px-4 font-medium hover:bg-black/80 transition"
                >
                  Expand
                </Link>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;

const AchievementImageItem = ({ data }: { data: TAchievements }) => {
  const imageLink = data.image
    ? `<b class='text-blue-400 font-normal hover:underline'>Link</b>`
    : ``;
  return (
    <Dialog>
      <DialogTrigger>
        <li className="text-justify text-[15px] md:text-[16px] my-1 text-black/75">
          <section
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.description + " " + imageLink),
            }}
          />
        </li>
      </DialogTrigger>
      {data.image && (
        <DialogContent>
          <div className="flex flex-col items-center">
            <Image
              src={data.image}
              alt={data.description}
              width={300}
              height={300}
              className="w-full object-contain"
            />
            <Link
              href={data.image}
              target="_blank"
              className="flex items-center gap-x-2 bg-black rounded-md text-white p-2 px-4 font-medium hover:bg-black/80 transition"
            >
              Expand
            </Link>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
};
