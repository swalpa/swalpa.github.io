import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaGraduationCap } from "react-icons/fa";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export default function Hero() {
  return (
    <div className="mb-12 flex flex-col lg:flex-row text-black">
      <div className="w-full lg:w-1/3 flex flex-col items-center mt-16">
        <Image
          src={"https://swalpa.github.io/old-portfolio/img/SKR.jpeg"}
          width={150}
          height={150}
          alt="Picture of the author"
          className="w-72 h-72 object-cover rounded-full mb-6"
        />
        <h2 className="text-2xl lg:text-3xl font-semibold">
          Dr. Swalpa Kumar Roy
        </h2>
        <i className="opacity-80">Associate Professor</i>
        <a
          href="https://www.tezu.ernet.in/"
          target="_blank"
          className="text-blue-400 underline lg:text-black lg:no-underline hover:text-blue-400 hover:underline text-center"
        >
          Tezpur University (A Central University)
        </a>
        <div className="flex gap-x-4 items-center justify-center mt-4">
          {profileLinks.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger>
                <Link href={link.link} key={index} target="_blank">
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={75}
                    height={75}
                    className={cn("w-8 h-8", link.className)}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent>{link.title}</TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-2/3 h-full">
        <div className="mt-20 w-full">
          <h2 className="h2-heading ml-2 w-full">Biography</h2>
          <section className="pl-3 lg:pl-7 text-justify">
            Swalpa Kumar Roy (Bengali: স্বল্প কুমার রায়) is currently Associate Professor working with the Department of Computer Science and Engineering in a Central University. 
            Prior to his joining, he also served in the Department of Computer Science and Engineering at Alipurduar Government Engineering and Management College, Alipurduar, from August 2023 
            to October 2025 and earlier at Jalpaiguri Government Engineering College, Jalpaiguri — the fifth oldest technical institution and one of the most prestigious engineering colleges in 
            West Bengal — where he held the position of Assistant Professor from March 2018 to July 2023. Swalpa Kumar Roy is also working with Prof. Bhabatosh Chanda, Fellow, IAPR and Prof. Bidyut Baran Chaudhuri, Fellow, IEEE, 
            Computer Vision and Pattern Recognition (CVPR) Unit at Indian Statistical Institute, Kolkata during his Ph.D. research. He is also working under Prof. Soumitro Banerjee,
            Fellow, IEEE, at Indian Institute of Science Education and Research, Kolkata. Before joining CVPR Unit, ISI Kolkata, he received his B.Tech (Computer Science & Engineering) degree from West Bengal University of Technology, Kolkata, and M. E (Computer Science &
            Engineering) degree from the Indian Institute of Engineering Science and Technology, Shibpur. He also worked as a Project-Linked-Person
            (PLP) at the OCR Lab, CVPR Unit, Indian Statistical Institute,Kolkata.
          </section>
        </div>
        <div className="w-full mt-7 flex flex-col lg:flex-row gap-y-8 lg:gap-x-10">
          <div className="w-full lg:w-fit">
            <h2 className="h2-heading ml-2 w-full">Interest</h2>
            <section>
              <ul className="list-disc pl-10 text-lg">
                <li>Computer Vision</li>
                <li>Deep Learning</li>
                <li>GeoAI</li>
                <li>ResponsibleAI</li>
                <li>Earth Observation</li>
                <li>Remote Sensing</li>
              </ul>
            </section>
          </div>
          <div className="w-full lg:w-fit">
            <h2 className="h2-heading ml-2">Education</h2>
            <div className="ml-5">
              <div className="mb-2">
                <div className="flex lg:items-center gap-x-2">
                  <FaGraduationCap className="text-2xl lg:text-3xl" />
                  <p className="lg:text-xl font-medium">
                    Ph.D in Computer Science and Engineering
                  </p>
                </div>
                <div className="pl-7 lg:pl-10 ">
                  <i className="opacity-60 text-sm text-center w-full">
                    University of Calcutta (Work done at ISI Kolkata)
                  </i>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex lg:items-center gap-x-2">
                  <FaGraduationCap className="text-2xl lg:text-3xl" />
                  <p className="lg:text-xl font-medium">
                    M.E in Computer Science and Engineering
                  </p>
                </div>
                <div className="pl-7 lg:pl-10 ">
                  <i className="opacity-60 text-sm text-center w-full">
                    Indian Institute of Engineering Science and Technology,
                    Shibpur
                  </i>
                </div>
              </div>
              <div>
                <div className="flex lg:items-center gap-x-2">
                  <FaGraduationCap className="text-2xl lg:text-3xl" />
                  <p className="lg:text-xl font-medium">
                    B.Tech in Computer Science and Engineering
                  </p>
                </div>
                <div className="pl-7 lg:pl-10 ">
                  <i className="opacity-60 text-sm text-center w-full">
                    West Bengal University of Technology, Kolkata
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const profileLinks: {
  link: string;
  icon: string;
  title: string;
  className?: string;
}[] = [
  {
    title: "Google Scholar",
    link: "https://scholar.google.com/citations?user=1WVrFGwAAAAJ&hl=en",
    icon: "https://i.ibb.co/FK8Xwbx/512px-Google-Scholar-logo-svg.png",
  },
  {
    title: "DBLP",
    link: "https://dblp.org/pid/166/4544.html",
    icon: "https://i.ibb.co/fnFcchK/dblp-icon-192x192.png",
  },
  {
    title: "Research Gate",
    link: "https://www.researchgate.net/profile/Swalpa-Roy",
    icon: "https://i.ibb.co/p4hbxD4/RG.png",
  },
  // {
  //   title: "Loop",
  //   link: "https://loop.frontiersin.org/people/2122815/overview",
  //   icon: "https://i.ibb.co/3SMKJFq/looplogo-thumb.png",
  // },
  {
    title: "Web of Science",
    link: "https://www.webofscience.com/wos/author/record/2068252",
    icon: "https://i.ibb.co/5vhpcNR/l-Oi-Mq-L4-UN4910-Sl-Rv1s-SYUKCAhc6j4j-JIhk-Vd-RX-k-Ceoi-OSYpi35m-Ya-Xch-XLNNGb-RBAq-Iah-D-s900-c-k.jpg",
  },
  {
    title: "Scopus",
    link: "https://www.scopus.com/authid/detail.uri?authorId=56784776500",
    icon: "https://i.ibb.co/zHwhLHm/elsevier-scopus.png",
  },
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/swalpa-kumar-roy-9b51234a/",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    title: "Indian Academy of Sciences",
    link: "https://fellows.ias.ac.in/profile/v/AS2024021",
    icon: "https://fellows.ias.ac.in/public/images/logo.png",
  },
];
