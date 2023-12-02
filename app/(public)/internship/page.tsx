import InternshipProfilesSection from '@/components/InternshipProfilesSection'
import Loading from '@/components/common/Loading'
import { getInternshipData } from '@/services/serverActions'
import { ProfileCategory } from '@/types/enums.'
import DOMPurify from 'isomorphic-dompurify'
import { Suspense } from 'react'

const Page = async () => {
  const data = await getInternshipData();

  return (
    <Suspense fallback={<Loading />}>
      <div className='w-full bg-[#f5f5f5] flex flex-col items-center min-h-[85vh]'>
        <div className='w-full border border-black h-44 lg:h-56 bg-[url("https://mveo.github.io/assets/imgs/header.jpg")] bg-no-repeat bg-cover bg-center'>
          <div className='w-full h-full bg-black/50 flex justify-center items-center text-white text-xl lg:text-4xl font-semibold'>
            <h2 className='py-1 border-b border-white max-w-xs text-3xl lg:max-w-4xl text-center'>Internship offer</h2>
          </div>
        </div>
        <div className='w-full md:w-3/4 lg:w-4/5 xl:w-3/5 p-5 px-5 md:px-6 lg:px-8'>
          <h3 className='text-2xl font-medium'>About the programme</h3>
          <p className='py-2 text-sm lg:text-base lg:px-3 text-justify text-black text-opacity-80'>{data && data.description}</p>
          <h3 className='text-2xl font-medium mt-3'>Available topics</h3>
          <ul className='list-disc px-5 lg:px-8 p-2 text-black text-opacity-80'>
            {
              data && data.topics.map((topic, index) => (
                <li key={index} className='py-1'>{topic}</li>
              ))
            }
          </ul>
          {
            data && data.timeline && data.timeline.length > 0 && (
              <>
                <h3 className='text-2xl font-medium mt-3'>Timeline</h3>
                <table className='w-full text-sm lg:text-base lg:w-4/5 lg:ml-3'>
                  <tbody>
                    <tr className='border-b border-black'>
                      <th className='p-2'>Task</th>
                      <th className='p-2 border-l border-black'>Tentative Timeline</th>
                    </tr>
                    {
                      data.timeline.map((timeline, index) => (
                        <tr key={index} className={`${index % 2 == 0 ? "" : "bg-[#e4e4e4]"}`}>
                          <td className='p-2'>{timeline.task}</td>
                          <td className='p-2 border-l border-black'>{timeline.tentativeTimeline}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </>
            )
          }
          {
            data && data.eligibility && data.eligibility.length > 0 && (
              <>
                <h3 className='text-2xl font-medium mt-7'>Eligibility</h3>
                <ul className='list-disc text-sm lg:text-base text-justify px-5 lg:px-8 p-2'>
                  {
                    data.eligibility.map((eligibility, index) => (
                      <li key={index} className='py-1 text-black text-opacity-80'>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(eligibility) }} />
                      </li>
                    ))
                  }
                </ul>
              </>
            )
          }
          {
            data && data.selectionProcedure && data.selectionProcedure.length > 0 && (
              <>
                <h3 className='text-2xl font-medium mt-7'>Selection procedure</h3>
                <ul className='list-disc text-sm lg:text-base text-justify px-5 lg:px-8 p-2'>
                  {
                    data.selectionProcedure.map((procedure, index) => (
                      <li key={index} className='py-1 text-black text-opacity-80'>
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(procedure) }} />
                      </li>
                    ))
                  }
                </ul>
              </>
            )
          }
          {
            data && (
              <>
                <h3 className='text-2xl font-medium mt-7'>How to Apply</h3>
                <div className='mt-3 px-3 p-1 text-black text-sm lg:text-base text-opacity-80'>
                  {data.applicationProcess}
                  <br />
                  <b className='py-1'>To apply, click on the link: </b> &nbsp;
                  {
                    !data.open ? (<i className='text-black text-opacity-60'>Currenty not accepting applications</i>) :
                      (<a className='text-blue-600 text-opacity-80 hover:underline hover:cursor-pointer' target='_blank' href={data.applicationLink}>Link</a>)
                  }
                </div>
                <h3 className='text-xl lg:text-2xl font-medium mt-5'>Mentors</h3>
                <InternshipProfilesSection title='' profiles={data.profiles.filter((i) => i.category === ProfileCategory.InternshipMentor)} />
                <h3 className='text-xl lg:text-2xl font-medium mt-5'>Current student</h3>
                <InternshipProfilesSection title='Tier 1 colleges' profiles={data.profiles.filter((i) => i.category === ProfileCategory.CurrentStudent && i.collegeTier)} />
                <InternshipProfilesSection title='Other colleges' profiles={data.profiles.filter((i) => i.category === ProfileCategory.CurrentStudent && !i.collegeTier)} />
                <h3 className='text-xl lg:text-2xl font-medium mt-5'>Previous student</h3>
                <InternshipProfilesSection title='Tier 1 colleges' profiles={data.profiles.filter((i) => i.category === ProfileCategory.PreviousStudent && i.collegeTier)} />
                <InternshipProfilesSection title='Other colleges' profiles={data.profiles.filter((i) => i.category === ProfileCategory.PreviousStudent && !i.collegeTier)} />
              </>
            )
          }
        </div>
      </div>
    </Suspense>
  )
}

export default Page