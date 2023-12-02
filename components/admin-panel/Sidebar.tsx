"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { AiOutlineTeam } from "react-icons/ai"; 
import { FaChalkboardTeacher, FaAward } from "react-icons/fa";
import { GrDocumentUpdate } from "react-icons/gr";


type optionsType = {
    name: string,
    route: string,
    icon: IconType

}
const routes: optionsType[] = [
    {
        name: "Updates",
        route: "/admin/updates",
        icon: GrDocumentUpdate
    },
    {
        name: "Teaching",
        route: "/admin/teaching",
        icon: FaChalkboardTeacher
    }, 
    {
        name: "Achievements",
        route: "/admin/achievements",
        icon: FaAward
    },
    {
        name: "Team",
        route: "/admin/team",
        icon: AiOutlineTeam
    }
]

const Sidebar = () => {
  const routename = usePathname()
  return (
    <div className="w-full lg:h-[94.8vh] sticky bottom-0 lg:top-12 flex md:flex-col justify-center md:justify-start gap-3 md:w-16 xl:w-[10%] 
    bg-slate-100 border-r border-black/white">
        {
          routes.map((op, index) => {
            const IconComponent: IconType = op.icon
            return (
              <Link href={op.route} key={index}>
                <div className={`w-fit flex gap-3 p-3 px-5 rounded-full backdrop-blur-sm  hover:bg-slate-300/20
                border border-transparent hover:border-white/20 transition-all duration-75
                  ${routename == op.route ? "bg-slate-300/25" : ""}`}>
                    <IconComponent className='relative top-1'/>
                    <div className='hidden xl:block'>{op.name}</div>
                </div>
              </Link>
            )
        })
        }
    </div>
  )
}

export default Sidebar