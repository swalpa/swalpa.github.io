"use client";
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { LucidePencil, LucideTrash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import useFetchProjects from '@/services/hooks/useFetchProjects';
import Loading from '@/components/common/Loading';
import Link from 'next/link';
import axios from 'axios';

const Page = () => {
  const projects = useFetchProjects();
  const router = useRouter();
  const deleteProject = async (id: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`);
      toast.success('Project deleted');
      router.push('/admin/projects');
    } catch (error) {
      console.log(error);
    }
  }

  if (!projects) return <Loading />
  return (
    <main className='w-full flex justify-center p-4 px-3'>
      <div className='w-full md:w-4/5 lg:w-3/5'>
        <h2 className='h2-heading'>Projects</h2>
        <div className='px-2'>
          <div>
            {
              projects.map((project, index) => (
                <div key={index} className='flex justify-center gap-x-2 border-b border-black/10 py-1'>
                  <p>{index + 1}.</p>
                  <p className='w-4/5'>{project.title}</p>
                  <Link href={`/admin/projects/${project._id}`} className='p-2 hover:bg-slate-300/30 rounded-full transition'>
                    <LucidePencil />
                  </Link>
                  <Dialog>
                    <DialogTrigger className='p-2 rounded-full hover:bg-rose-300/30'><LucideTrash2 className='text-rose-500'/></DialogTrigger>
                    <DialogContent>
                      <DialogHeader>Are you sure want to delete <b>{project.title}</b></DialogHeader>
                      <Button onClick={() => { deleteProject(project._id) }} className='bg-rose-600'>Delete</Button>
                    </DialogContent>
                  </Dialog>
                </div>
              ))
            }
          </div>
          <div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Page