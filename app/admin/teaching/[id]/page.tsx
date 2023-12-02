"use client";
import CreateOrEditTeachingDetails from '@/components/admin-panel/CreateOrEditTeachingDetails'
import Loading from '@/components/common/Loading';
import useFetchTeachingAllDetails from '@/services/hooks/useFetchTeachingAllDetails';
import { useParams } from 'next/navigation';

const Page = () => {
  const { id } = useParams()

  const data = useFetchTeachingAllDetails(typeof id === 'string' ? id : id[0]);

  if(!data ) return <Loading/>
  return (
    <div className='w-full min-h-screen flex justify-center'>
      <CreateOrEditTeachingDetails teachingDetails={data}  newEntry={false}/>
    </div>
  )
}

export default Page