import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchInternshipDetails = (): InternshipDetailsWithProfiles | null | false => {
  const [internshipDetails, setInternshipDetails] = useState<InternshipDetailsWithProfiles | null>(null)

  useEffect(() => {
    (async ()=> {
      setInternshipDetails(null)
      try {
        const { data } = await axios.get<InternshipDetailsWithProfiles>(`${process.env.NEXT_PUBLIC_API_URL}/internship/6554367889b517b7ec08e404`)
        //console.log(data)
        setInternshipDetails(data)
      } catch (error) {
        console.log(error)
        return false
      }
    })()
  }, [])

  return internshipDetails
}

export default useFetchInternshipDetails