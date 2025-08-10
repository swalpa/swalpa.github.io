import Loading from "@/components/common/loading";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import axios from "axios";
import { LucideGlobe, LucideLinkedin } from "lucide-react";
import Link from "next/link";

const Page = async () => {
  const teamData = await getTeamMembers();

  if (!teamData) return <Loading />;

  return (
    <main className="flex flex-col items-center w-full xl:w-4/5 py-5 p-2.5 lg:p-3 xl:p-5 min-h-screen">
      <TeamCategory
        data={teamData.filter(
          (member) =>
            member.category === "mentor" &&
            member.name !== "Prof. (Dr.) Sushmita Mitra"
        )}
        categoryName="Mentors"
      />
      <TeamCategory
        data={teamData.filter((member) => member.category === "collaborator")}
        categoryName="Collaborators"
      />
      <TeamCategory
        data={teamData.filter(
          (member) => member.category === "international-student"
        )}
        categoryName="International Students"
      />
      <TeamCategory
        data={teamData.filter(
          (member) => member.category === "domestic-student"
        )}
        categoryName="National Students"
      />
    </main>
  );
};

const getTeamMembers = async () => {
  try {
    const { data } = await axios.get<TTeamMember[]>(
      `${process.env.NEXT_PUBLIC_NEW_API_URL}/team`
    );
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const TeamCategory = ({
  data,
  categoryName,
}: {
  data: TTeamMember[];
  categoryName: string;
}) => {
  return (
    <div className="w-[350px] md:w-[570px] lg:w-4/5 xl:w-3/4 lg:min-w-[980px] xl:min-w-[1250px] mt-4">
      <h3 className="h2-heading">{categoryName}</h3>
      <div className="grid grid-cols-2 md:md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-1.5 lg:gap-3 xl:gap-5 p-2 mb-4">
        {data.map((member, index: number) => (
          <MemberDetailsBox key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

const MemberDetailsBox = ({ member }: { member: TTeamMember }) => {
  return (
    <Dialog>
      <DialogTrigger className="h-full">
        <div className="bg-white h-full p-1.5 lg:p-2.5 border border-black/10 rounded-sm">
          <img
            loading="lazy"
            src={
              member.image
                ? member.image
                : "https://i.ibb.co/fYCYQQV/blank-profile-picture-973460-1280.png"
            }
            alt={member.name}
            draggable={false}
            width={300}
            height={300}
            className="rounded-[3px] object-cover w-40 h-48 md:w-48 md:h-56"
          />
          <p className="text-base md:text-lg mt-1.5 font-semibold">
            {member.name}
          </p>
          {/* <p className="text-xs text-black text-opacity-30 font-medium pr-1">{member.college}</p> */}
        </div>
      </DialogTrigger>
      <DialogContent className="flex gap-x-3">
        <img
          loading="lazy"
          src={
            member.image
              ? member.image
              : "https://i.ibb.co/fYCYQQV/blank-profile-picture-973460-1280.png"
          }
          alt={member.name}
          draggable={false}
          width={300}
          height={300}
          className="rounded-[3px] object-cover w-40 h-48 md:w-48 md:h-56"
        />
        <div>
          <p className="text-xl lg:text-2xl font-semibold">{member.name}</p>
          <p className="text-sm text-black text-opacity-30 font-medium mt-1 mb-2 pr-1">
            {member.college}
          </p>
          <div className="flex gap-x-3">
            {member.linkedIn && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={member.linkedIn} target="_blank">
                    <LucideLinkedin className="text-gray-700 mt-1" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            )}
            {member.website && (
              <Link href={member.website} target="_blank">
                <LucideGlobe className="text-gray-700 mt-1" />
              </Link>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Page;
