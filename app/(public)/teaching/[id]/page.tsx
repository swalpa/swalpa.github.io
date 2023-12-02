import Loading from "@/components/common/Loading";
import { getSpecificTeaching } from "@/services/serverActions";
import DOMPurify from "isomorphic-dompurify";
import { Suspense } from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getSpecificTeaching(params.id)

  if (!data) return <Loading />

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full flex justify-center bg-slate-50 p-2 md:p-5 min-h-[85vh] text-black/80">
        <div className="w-full md:w-4/5 lg:w-3/4 xl:w-3/5 bg-white border border-black/10 min-h-screen 
       rounded-sm p-2 lg:p-6 px-10 lg:text-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
          <h2 className="w-full h2-heading text-2xl lg:text-4xl font-semibold md:p-2">{data.title}</h2>
          <ul className="w-full pl-1 md:pl-2 lg:p-4 xl:pl-5 mt-6 flex flex-col gap-3 list-disc">
            <li className="my-1"><b>Credit points:</b> {data.creditPoints}</li>
            <li className="my-1"><b>Session:</b> {data.session}</li>
            <li className="my-1"><b>Routine:</b>
              <ol className="list-decimal pl-7 md:pl-9 lg:pl-16 mt-2 grid lg:grid-cols-2">
                {data.routine.map((date, i) => <li key={i}>{date}</li>)}
              </ol>
            </li>
            <i className="text-sm lg:text-lg w-full lg:flex lg:justify-center opacity-90 py-2 lg:opacity-80 text-rose-700">
              <b>Attention: </b> &nbsp; Students having attendance below {data.attendancePercentage.split('%')[0]}% will not be allowed to appear in Semester Exam.
            </i>
            <li className="my-1 lg:my-2">
              <b>Course description:</b>
              <div className="text-justify pl-2 md:pl-5 lg:pl-8 xl:11 lg:mt-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.courseDescription) }} />
            </li>
            {
              data.teachingLearningProccess.length > 0 && (
                <li className="my-1 lg:my-2">
                  <b>Teaching Learning Process:</b>
                  <ol className="pl-6 md:pl-9 lg:12 lg:pl-16 list-decimal">
                    {data.teachingLearningProccess.map((process, i) => <li key={i}>{process}</li>)}
                  </ol>
                </li>
              )
            }
            <li className="my-1 lg:my-2">
              <b>Course objectives:</b>
              <ol className="pl-6 md:pl-9 lg:12 lg:pl-16 list-decimal">
                {data.courseObjectives.map((objective, i) => <li key={i}><div className="my-3" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(objective) }} /></li>)}
              </ol>
            </li>
            <li className="my-1 lg:my-2">
              <b>Programme objectives:</b>
              <ol className="pl-6 md:pl-9 lg:12 lg:pl-16 list-decimal">
                {data.programmeObjectives.map((objective, i) => <li key={i}><div className="my-1 lg:my-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(objective) }} /></li>)}
              </ol>
            </li>
            <li>
              <b>Prerequisites:</b>
              <ol className="pl-6 md:pl-9 lg:12 lg:pl-16 list-decimal">
                {data.prerequisites.map((objective, i) => <li key={i}><div className="my-1 lg:my-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(objective) }} /></li>)}
              </ol>
            </li>
            <li>
              <b>Syllabus:</b>
              <ol className="pl-6 md:pl-9 lg:12 lg:pl-16 list-decimal">
                {data.syllabus.map((objective, i) => <li key={i}><div className="my-1 lg:my-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(objective) }} /></li>)}
              </ol>
            </li>
            <li>
              <b>Recommended books:</b>
              <ol className="pl-6 md:pl-9 lg:12 lg:pl-16 list-decimal">
                {data.referenceBooks.map((objective, i) => <li key={i}><div className="my-1 lg:my-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(objective) }} /></li>)}
              </ol>
            </li>
            <li>
              <b>Other resources:</b>
              <ol className="pl-6 md:pl-9 lg:12 lg:pl-16 list-decimal">
                {data.otherResources.map((objective, i) => <li key={i}><div className="my-1 lg:my-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(objective) }} /></li>)}
              </ol>
            </li>
            {
              data.miscellaneous.length > 0 && (
                <li>
                  <b>Miscellaneous:</b>
                  <ol className="pl-6 md:pl-9 lg:12 lg:pl-16 list-decimal">
                    {data.miscellaneous.map((objective, i) => <li key={i}><div className="my-1 lg:my-2" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(objective) }} /></li>)}
                  </ol>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </Suspense>
  )
}

export default Page