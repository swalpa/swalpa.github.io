"use client"
import useFetchUpdatesAndStats from "@/services/hooks/useFetchUpdatesAndStats";
import Loading from "../common/Loading";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const UpdatesAndStats = () => {
  const data = useFetchUpdatesAndStats();

  if (!data) return <Loading />
  return (
    <div className="w-[90%] lg:w-3/4 flex flex-col-reverse lg:flex-row gap-x-10 pb-5">
      <div className="w-full lg:w-3/5 h-96 overflow-hidden">
        <h2 className="h2-heading">Updates</h2>
        <div className=" overflow-hidden">
          <div className="w-full animate-marquee overflow-hidden">
            {data && data.updates.map((update: updateType, index: number) => (
              <div key={index} className="flex gap-x-5 mx-4 border-b border-black/5 py-1">
                <p className="text-blue-300 w-1/5">{update.date.toString().split("T")[0]}</p>
                <div className="w-4/5" dangerouslySetInnerHTML={{ __html: update.title }} />
              </div>
            ))}
          </div>
          <div className="w-full animate-marquee overflow-hidden">
            {data && data.updates.map((update: updateType, index: number) => (
              <div key={index} className="flex gap-x-5 mx-4 border-b border-black/5 py-1">
                <p className="text-blue-300 w-1/5">{update.date.toString().split("T")[0]}</p>
                <div className="w-4/5" dangerouslySetInnerHTML={{ __html: update.title }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/5 h-96 overflow-auto">
        <h2 className="h2-heading">Google Scholar stats</h2>
        <div className="flex flex-col items-center">
          <div className="flex gap-x-3 lg:gap-x-7 lg:text-lg font-medium mb-2 text-black/80 px-1 text-sm">
            <p className="">Total citations: {data.stats.citations.all}</p>
            <p className="">h-index: {data.stats.h_index.all}</p>
            <p className="">i10-index: {data.stats.i10_index.all}</p>
          </div>
          <div className="w-full lg:w-2/3 flex justify-center pr-6 lg:pr-0">
            <ResponsiveContainer width='100%' height={250}>
              <BarChart data={data.stats.citationsGraph}>
                <XAxis dataKey="year" />
                <YAxis />
                <Bar dataKey="citations" fill="#5A5E5A" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <i className="text-black text-opacity-60 pl-5">Last updated on: {data.stats.updatedAt.toString().split('T')[0]}</i>
        </div>
      </div>
    </div>
  )
}

export default UpdatesAndStats