import Loading from '@/components/common/loading';
import { getUpdates } from '@/services/serverActions';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Updates | Swalpa Kumar Roy',
  description: 'Updates about Dr. Swalpa Kumar Roy',
  keywords: ['Swalpa', 'Swalpa Roy', 'Swalpa Kumar Roy', 'Dr. Swalpa Kumar Roy', 'JGEC', 'AGEMC', 'Machine Learning', 'Swalpa Google Scholar', "Swalapa Github", "Updates", "News", "Events"]
}

const Page = async () => {
  const data = await getUpdates();
  return (
    <Suspense fallback={<Loading/>}>
      <div className='w-full flex justify-center p-5 min-h-[85vh]'>
        <div className="w-full lg:w-2/3 xl:w-3/5">
          <h2 className="h2-heading">News</h2>
          <div className="w-full">
            { data && data.map((update: updateType, index: number) => (
              <div key={index} className="flex gap-x-5 mx-4 border-b border-black/5 py-1">
                <p className="text-blue-300 w-1/5 max-w-[125px]">{update.date.toString().split("T")[0]}</p>
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