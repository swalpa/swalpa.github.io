// Uses new API
import Loading from "@/components/common/loading";
import SheetWrapper from "@/components/wrappers/sheet-wrapper";
import { getSpecificTeaching } from "@/services/serverActions";
import axios from "axios";
import DOMPurify from "isomorphic-dompurify";
import { Metadata, ResolvingMetadata } from "next";

const server: string = process.env.NEXT_PUBLIC_API_URL!;

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const { data } = await axios.get<TFullTeachingDetails>(
    `${process.env.NEXT_PUBLIC_NEW_API_URL}/teachings/${id}`
  );

  return {
    title: data.title,
    keywords: [
      data.title,
      "Swalpa Kumar Roy",
      "Swalpa Roy",
      "Research",
      "ISRO",
      "WBDST",
      "SERB",
      "West Bengal",
      "India",
      "Jalpaiguri Government Engineering College",
      "JGEC",
      "Alipurduar Government Engineering and Management College",
      "AGEMC",
    ],
  };
}

export async function generateStaticParams() {
  const { data } = await axios.get<{ id: string }[]>(
    `${process.env.NEXT_PUBLIC_NEW_API_URL}/teachings`
  );
  if (!data) return [];
  return data.map((project) => ({
    id: project.id,
  }));
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await getSpecificTeaching(params.id);

  if (!data) return <Loading />;

  return (
    <SheetWrapper>
      <h2 className="w-full h2-heading text-2xl lg:text-4xl font-semibold md:p-2">
        {data.title}
      </h2>
      <ul className="w-full pl-4 md:pl-4 lg:p-4 xl:pl-5 mt-6 space-y-1 list-disc text-sm md:text-lg">
        <li className="">
          <strong>Credit points:</strong> {data.creditPoints}
        </li>
        <li className="">
          <strong>Session:</strong> {data.session}
        </li>
        <li className="">
          <strong>Routine:</strong>
          <ol className="list-decimal pl-7 md:pl-9 lg:pl-16 mt-2 grid lg:grid-cols-2">
            {data.routine.map((date, i) => (
              <li key={i}>{date.data}</li>
            ))}
          </ol>
        </li>
        <p className="text-sm lg:text-base w-full text-center py-2 text-rose-600/80">
          <strong>Attention: </strong> Students having attendance below{" "}
          {data.minAttendance.split("%")[0]}% will not be allowed to appear in
          Semester Exam.
        </p>
        <li className="my-1">
          <strong>Course description:</strong>
          <div
            className="text-justify pl-2 lg:mt-1"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data.description),
            }}
          />
        </li>
        <DisplayArrayContent
          data={data.learningProcess.map((process) => process.data)}
          name="Teaching Learning Process"
        />
        <DisplayArrayContent
          data={data.courseObjectives.map((objective) => objective.data)}
          name="Course objectives"
        />
        <DisplayArrayContent
          data={data.programmeObjectives.map((objective) => objective.data)}
          name="Programme objectives"
        />
        <DisplayArrayContent
          data={data.prerequisites.map((obj) => obj.data)}
          name="Prerequisites"
        />
        <DisplayArrayContent
          data={data.syllabus.map((obj) => obj.data)}
          name="Syllabus"
        />
        <DisplayArrayContent
          data={data.references.map((reference) => reference.data)}
          name="Recommended books"
        />
        <DisplayArrayContent
          data={data.resouces.map((resource) => resource.data)}
          name="Other resources"
        />
        <DisplayArrayContent
          data={data.miscellaneous.map((obj) => obj.data)}
          name="Miscellaneous"
        />
      </ul>
    </SheetWrapper>
  );
};

export default Page;

const DisplayArrayContent = ({
  data,
  name,
}: {
  data: string[] | null | undefined;
  name: string;
}) => {
  return (
    <>
      {data && data.length > 0 && (
        <li className="my-1.5 md:my-2">
          <strong className="my-0.5">{name}:</strong>
          <ol className="pl-5 md:pl-8 list-decimal space-y-0.5">
            {data.map((objective, i) => (
              <li key={i}>
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(objective),
                  }}
                />
              </li>
            ))}
          </ol>
        </li>
      )}
    </>
  );
};
