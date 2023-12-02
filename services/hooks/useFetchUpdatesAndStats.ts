import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchUpdatesAndStats = () => {
  const [fetchedData, setFetchedData] = useState< UpdateAndGoogleScholarStats | false | null >()
  useEffect(()=> {
    (async()=> {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/updates/featured-updates-and-google-scholar-stats`)
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