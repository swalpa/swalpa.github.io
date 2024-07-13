import axios from "axios"
import { useEffect, useState } from "react"

const useFetchAchievements = () => {
  const [achievements, setAchievements] = useState<TAchievements[] | null | false>(null)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`https://swalpa-backend.onrender.com/achievements`)
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