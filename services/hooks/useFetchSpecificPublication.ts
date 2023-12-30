import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchSpecificPublication = (id: string) => {
  const [publication, setPublication] = useState<Publication | null | false >(null)
  useEffect(()=> {
    (async () => {
      try {
        const { data } = await axios.get<Publication>(`https://swalpa-backend.onrender.com/publications/${id}`)
        setPublication(data)
      } catch (error) {
        console.log(error)
        setPublication(false)
      }
    })();
  }, [])

  return publication;
}

export default useFetchSpecificPublication