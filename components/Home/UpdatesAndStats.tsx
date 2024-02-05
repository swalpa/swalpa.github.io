"use client";
import useFetchUpdatesAndStats from "@/services/hooks/useFetchUpdatesAndStats";
import Loading from "../common/Loading";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const UpdatesAndStats = () => {
  const data = useFetchUpdatesAndStats();

  if (!data) return <Loading />;
  return (
    <div className="w-[90%] xl:w-3/4 flex flex-col-reverse lg:flex-row gap-x-6 pb-5">
      <div className="w-full h-[30rem] overflow-hidden">
        <h2 className="h2-heading">News</h2>
        <div className=" overflow-hidden">
          <div className="w-full animate-marquee overflow-hidden">
            {data &&
              data.updates.map((update: updateType, index: number) => (
                <div
                  key={index}
                  className="flex gap-x-5 mx-4 border-b border-black/5 py-1"
                >
                  <p className="text-blue-300 text-xs md:text-base w-[14%]">
                    {update.date.toString().split("T")[0]}
                  </p>
                  <div
                    className="w-[86%]"
                    dangerouslySetInnerHTML={{ __html: update.title }}
                  />
                </div>
              ))}
          </div>
          <div className="w-full animate-marquee overflow-hidden">
            {data &&
              data.updates.map((update: updateType, index: number) => (
                <div
                  key={index}
                  className="flex gap-x-5 mx-4 border-b border-black/5 py-1"
                >
                  <p className="text-blue-300 text-xs md:text-base w-[14%]">
                    {update.date.toString().split("T")[0]}
                  </p>
                  <div
                    className="w-[86%]"
                    dangerouslySetInnerHTML={{ __html: update.title }}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Google Scholar Stats */}

      {/* <div className="w-full lg:w-2/5 h-96 overflow-auto">
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
      </div> */}

      {/* //!Carousel  */}

      {/* <div className="w-2/5 h-[30rem] overflow-hidden">
        <h2 className="h2-heading">Memories</h2>
        <div className="w-full flex justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div> */}
    </div>
  );
};

export default UpdatesAndStats;
