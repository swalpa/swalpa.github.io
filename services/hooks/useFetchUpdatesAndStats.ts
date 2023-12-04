import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchUpdatesAndStats = () => {
  const [fetchedData, setFetchedData] = useState< UpdateAndGoogleScholarStats | false | null >()
  useEffect(()=> {
    (async()=> {
      try {
        const { data } = await axios.get(`https://swalpa-backend.onrender.com/updates/featured-updates-and-google-scholar-stats`)
        setFetchedData(data)
      } catch (error) {
        console.log(error)
        setFetchedData(false)
      }
    })();
  }, [])
  return fetchedData;
}

export default useFetchUpdatesAndStats