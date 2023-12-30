import Loading from '@/components/common/Loading';
import { getUpdates } from '@/services/serverActions';
import { Suspense } from 'react';

const Page = async () => {
  const data = await getUpdates();
  if (!data) return <Loading />
  return (
    <Suspense fallback={<Loading/>}>
      <div className='w-full flex justify-center p-5 min-h-[85vh]'>
        <div className="w-full lg:w-2/3 xl:w-1/2">
          <h2 className="h2-heading">Updates</h2>
          <div className="w-full">
            {data.map((update: updateType, index: number) => (
              <div key={index} className="flex gap-x-5 mx-4 border-b border-black/5 py-1">
                <p className="text-blue-300 w-1/5">{update.date.toString().split("T")[0]}</p>
                <div className="w-4/5" dangerouslySetInnerHTML={{ __html: update.title }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default Page