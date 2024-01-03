import Hero from "@/components/Home/Hero";
import ProfessionalServices from "@/components/Home/ProfessionalServices";
import UpdatesAndStats from "@/components/Home/UpdatesAndStats";
import Loading from "@/components/common/Loading";
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
