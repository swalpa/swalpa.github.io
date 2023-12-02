import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchTeachingAllDetails = (id: string): TeachingAllDetails | null | false => {
  const [teachingAllDetails, setTeachingAllDetails] = useState<TeachingAllDetails | null>(null)

  useEffect(()=> {
    (async ()=> {
      setTeachingAllDetails(null)
      if (!id ||  id === "") return false;
      try {
        const { data } = await axios.get<TeachingAllDetails>(`${process.env.NEXT_PUBLIC_API_URL}/teaching/${id}`)
        setTeachingAllDetails(data)
      } catch (error) {
        console.log(error)
        return false
      }
    })()
  }, [id])

  return teachingAllDetails
}

export default useFetchTeachingAllDetails