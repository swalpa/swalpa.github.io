"use client"
import axios from 'axios';
import { LucideStar, LucideStarOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const Page = () => {
  const [updates, setUpdates] = useState<updateType[] | null>(null);
  const route = useRouter();
  const getUpdates = async ()=> {
    try{
      const data = await axios.get("http://localhost:7000/updates?featured=false");
      console.log(data.data);
      setUpdates(data.data);
    }
    catch(error){
      console.log(error);
      setUpdates([])
    }
  }

  const handleFeaturedPost = (update: updateType) => async ()=> {
    try{
      const data = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/updates/${update._id}`, {featured: !update.featured});
      console.log(data.data);
      getUpdates();
    }
    catch(error){
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  useEffect(()=> {
    getUpdates();
  }, [])

  return (
    <div className='w-full p-5 flex justify-center'>
      <div className='w-full xl:w-2/3'>
        <h2 className='h2-heading'>Updates</h2>
        <div>
          {updates && updates.map((update: updateType, index: number)=> (
            <div key={index} onDoubleClick={()=>route.push(`/admin/updates/${update._id}`)} className='flex gap-x-5 mx-4 border-b border-black/5 py-1 hover:bg-slate-100 transition cursor-pointer'>
              <p className='w-[4%] pl-1 rounded-sm'>{index+1}</p>
              <p className='text-blue-300 w-[11%]'>{update.date.toString().split('T')[0]}</p>
              <div className='w-4/5' dangerouslySetInnerHTML={{__html: update.title}} />
              {
                update.featured ? (
                  <div onClick={handleFeaturedPost(update)} className='cursor-pointer p-2 rounded-full hover:bg-slate-300/50 transition'>
                    <LucideStar className='text-yellow-300' />
                  </div>
                ) : (
                  <div onClick={handleFeaturedPost(update)} className='cursor-pointer p-2 rounded-full hover:bg-slate-300/50 transition'>
                    <LucideStarOff/>
                  </div>
                )
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page