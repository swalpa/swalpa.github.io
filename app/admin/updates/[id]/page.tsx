"use client"
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useParams } from "next/navigation";
import { useEffect } from "react";
const Page = () => {
  const params = useParams();
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<updateType>();

  const onSubmit = async (data: updateType) => {
    data.date = new Date(data.date).getTime();
    console.log(data);
    try {
        toast.loading("Loading...");
        await axios.post(`http://localhost:7000/updates/${params.id}`, data)
        toast.success("Updated successfully");
    }
    catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
  }

  const titleWatch = watch("title");

  useEffect(()=> {
    (async ()=> {
        const data = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/updates/${params.id}`);
        reset({
            title: data.data.title,
            featured: data.data.featured,
            date: new Date(data.data.date).toISOString().split("T")[0]
        });
    })();
    return ()=> {
        
    }
  }, [])

  return (
    <div className="w-[90%] flex gap-x-16 justify-center">
        <Toaster richColors/>
        <div className="w-1/3 mt-10">
            <h1 className="text-3xl font-bold">New Update</h1>
            <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label className="input-label" htmlFor="title">Title*</label>
                <Textarea defaultValue={""} placeholder="Write your update" className="w-full" {...register("title", { required: true })} />
                {errors.title && <span className="text-red-500">This field is required</span>}
                <div className="flex justify-between my-4">
                    <div className="flex gap-x-2 items-center">
                        <label className="input-label" htmlFor="featured">Featured*</label>
                        <Input className="w-4 h-4" type="checkbox" {...register("featured")} />
                        {errors.featured && <span className="text-red-500">This field is required</span>}
                    </div>
                    <div className=" flex gap-x-2 items-center">
                        <label className="input-label" htmlFor="date">Date*</label>
                        <Input className="" type="date" {...register("date", { required: true })} />
                        {errors.date && <span className="text-red-500">This field is required</span>}
                    </div>
                </div>
                <Button>Submit</Button>
            </form>
        </div>
        <div className="w-1/3 mt-32">
            <div className="bg-slate-200 min-h-[36px] p-1 px-3 border border-black/50 rounded-lg mb-12 max-w-full" dangerouslySetInnerHTML={{__html: titleWatch}} />
            <div className="border border-black/40 select-none bg-slate-200 p-4 rounded-lg">
                <i className="text-xl font-medium mb-3">HTML Tags</i>
                <ul>
                    <li className="flex gap-x-2 items-center">Normal text: <pre><code>&lt;p&gt;&lt;/p&gt;</code></pre></li>
                    <li className="flex gap-x-2 items-center">Bold text: <pre><code>&lt;b&gt;&lt;/b&gt;</code></pre></li>
                    <li className="flex gap-x-2 items-center">Italic text: <pre><code>&lt;i&gt;&lt;/i&gt;</code></pre></li>
                    <li className="flex gap-x-2 items-center"> Link: <pre><code>&lt;a target=<q>_blank</q> href=<q></q>&gt;&lt;/p&gt;</code></pre></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Page