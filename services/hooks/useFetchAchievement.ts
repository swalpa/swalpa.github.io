import axios from "axios"
import { useEffect, useState } from "react"

const useFetchAchievements = () => {
  const [achievements, setAchievements] = useState<AchievementType[] | null | false>(null)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/achievements`)
        setAchievements(data)
      } catch (error) {
        console.log(error)
        setAchievements(false)
      }
    })()
  }, [])
  return achievements;
}

export default useFetchAchievements