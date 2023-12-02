import Achievement from "@/components/Achievement";
import Loading from "@/components/common/Loading";
import { getAchievements } from "@/services/serverActions";
import { AchievementCategory } from "@/types/enums.";
import { Suspense } from "react";
const Page = async () => {
  const achievements = await getAchievements();

  if (!achievements) return <Loading />

  return (
    <Suspense fallback={<Loading />}>
      <main className="w-full flex justify-center p-3 lg:p-5 min-h-[85vh]">
        <div className="w-full md:w-3/4 lg:w-3/5">
          <h2 className="h2-heading">Achievements</h2>
          <div>
            <h3 className="text-2xl font-semibold my-2 mb-4 px-2">International recognitions</h3>
            {
              achievements.filter((obj) => obj.category === AchievementCategory.International).map((achievement, index) => (
                <Achievement key={index} admin={false} achievement={achievement} />
              ))
            }
          </div>
          <div>
            <h3 className="text-2xl font-semibold my-2 px-2">National recognitions</h3>
            {
              achievements.filter((obj) => obj.category === AchievementCategory.National).map((achievement, index) => (
                <Achievement key={index} admin={false} achievement={achievement} />
              ))
            }
          </div>
        </div>
      </main>
    </Suspense>
  )
}

export default Page