import Achievement from "@/components/Achievement";
import Loading from "@/components/common/Loading";
import { getAchievements } from "@/services/serverActions";
import { AchievementCategory } from "@/types/enums.";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: 'Achievements | Dr. Swalpa Kumar Roy',
  description: 'Achievements of Dr. Swalpa Kumar Roy',
  keywords: ['Swalpa', 'Swalpa Roy', 'Swalpa Kumar Roy', 'Dr. Swalpa Kumar Roy', 'JGEC', 'AGEMC', 'Machine Learning', 'Swalpa Google Scholar', "Swalapa Github", "Achievements"]
}

const Page = async () => {
  const achievements = await getAchievements();

  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full flex justify-center p-3 lg:p-5 min-h-screen">
        <div className="w-full md:w-3/4 lg:w-3/5">
          <h2 className="h2-heading">Achievements</h2>
          {
            achievements && (
              <>
                <div>
                  <h3 className="text-2xl font-semibold my-2 mb-4 px-2">International recognitions</h3>
                  {
                    achievements.filter((obj) => obj.category === AchievementCategory.International).map((achievement, index) => (
                      <Achievement key={index} achievement={achievement} />
                    ))
                  }
                </div>
                <div>
                  <h3 className="text-2xl font-semibold my-2 px-2">National recognitions</h3>
                  {
                    achievements.filter((obj) => obj.category === AchievementCategory.National).map((achievement, index) => (
                      <Achievement key={index} achievement={achievement} />
                    ))
                  }
                </div>
              </>
            )
          }
        </div>
      </main>
    </Suspense>
  )
}

export default Page