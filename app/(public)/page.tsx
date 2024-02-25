import Hero from "@/components/home/hero";
import ProfessionalServices from "@/components/home/professional-services";
import UpdatesAndStats from "@/components/home/news-section";
import Loading from "@/components/common/loading";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full flex flex-col justify-center items-center bg-white text-black">
        <Hero />
        <ProfessionalServices />
        <UpdatesAndStats />
      </main>
    </Suspense>
  )
}
