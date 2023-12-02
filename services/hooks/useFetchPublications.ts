import { PublicationCategory } from '@/types/enums.'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetchPublications = () => {
  const [publications, setPublications] = useState<Publication[] | null | false >(null)

  useEffect(()=> {
    (async () => {
      try {
        const { data } = await axios.get<Publication[]>(`${process.env.NEXT_PUBLIC_API_URL}/publications`)
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