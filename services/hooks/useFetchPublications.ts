import { PublicationCategory } from '@/types/enums.'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchPublications = () => {
  const [publications, setPublications] = useState<Publication[] | null | false >(null)

  useEffect(()=> {
    (async () => {
      try {
        const { data } = await axios.get<Publication[]>(`https://swalpa-backend.onrender.com/publications`)
        setPublications(data)
      } catch (error) {
        console.log(error)
        setPublications(false)
      }
    })()
  }, [])

  return publications;
}

export default useFetchPublications