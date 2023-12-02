"use client";
import Achievement from "@/components/Achievement";
import CreateAchievement from "@/components/CreateAchievement";
import Loading from "@/components/common/Loading";
import useFetchAchievements from "@/services/hooks/useFetchAchievement"
import { AchievementCategory } from "@/types/enums.";

const Page = () => {
  const achievements = useFetchAchievements();

  if(!achievements) return <Loading />

  return (
    <main className="w-full flex justify-center p-3 lg:p-5">
      <div className="w-full md:w-3/4 lg:w-3/5">
        <h2 className="h2-heading">Achievements</h2>
        <div className="w-full flex justify-end">
          <CreateAchievement />
        </div>
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold my-2 mb-4 px-2">International recognitions</h3>
          {
            achievements.filter((obj) => obj.category === AchievementCategory.International).map((achievement, index) => (
              <Achievement achievement={achievement} admin={true} key={index} />
            ))
          }
        </div>
        <div>
          <h3 className="text-2xl font-semibold my-2 px-2">National recognitions</h3>
          {
            achievements.filter((obj) => obj.category === AchievementCategory.National).map((achievement, index) => (
              <Achievement achievement={achievement} admin={true} key={index} />
            ))
          }
        </div>
      </div>
    </main>
  )
}

export default Page