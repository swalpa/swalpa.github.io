import TeachingComponent from "@/components/TeachingComponent"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Teachings | Dr. Swalpa Kumar Roy',
  description: 'Teachings of Dr. Swalpa Kumar Roy',
  keywords: ['Swalpa', 'Swalpa Roy', 'Swalpa Kumar Roy', 'Dr. Swalpa Kumar Roy', 'JGEC', 'AGEMC', 'Machine Learning', 'Swalpa Google Scholar', "Swalapa Github"]
}

const Page = () => {

  return (
    <TeachingComponent editing={false} />
  )
}

export default Page