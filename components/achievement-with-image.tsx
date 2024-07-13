import { AchievementCategory } from "@/types/enums.";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import React from "react";

const AchievementWithImage = ({ data }: { data: TAchievements }) => {
  return (
    <div className="w-full max-w-sm min-w-[384px] lg:max-w-none rounded-sm overflow-hidden shadow-sm shadow-black/10">
      <Image
        src={data.image as string}
        alt={"Achievement Image"}
        width={400}
        height={400}
        className="w-full h-56 object-contain bg-zinc-200"
      />
      <div className="bg-white">
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(data.description),
          }}
          className="py-2.5 mx-5 text-justify text-[15px] border-b border-black/10"
        />
        <p className="mx-5 py-2 text-xl font-semibold">
          {data.category === "international"
            ? "International Achievement"
            : "National Achievement"}
        </p>
      </div>
    </div>
  );
};

export default AchievementWithImage;
