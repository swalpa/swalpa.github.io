"use client";
import { LucideAward } from "lucide-react";
import DOMPurify from "isomorphic-dompurify";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Achievement = ({ achievement }: { achievement: TAchievements }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div
          className={`flex gap-x-2 font-normal text-base text-black text-opacity-80 my-1.5 p-1`}
        >
          <div className="w-[3%] max-w-[20px] pt-[3px]">
            <LucideAward size={25} className="invisible lg:visible" />
          </div>
          <div
            className={`sw-[97%]"} text-base lg:text-lg text-justify`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(achievement.description),
            }}
          />
        </div>
      </DialogTrigger>
      {achievement.image && (
        <DialogContent className="w-full">
          <div className="">
            <img
              src={achievement.image}
              alt={achievement.description}
              className="rounded-md"
            />
          </div>
          <div
            className="w-full px-3 md:px-4 lg:px-6 text-sm md:text-base text-justify"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(achievement.description),
            }}
          />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Achievement;
