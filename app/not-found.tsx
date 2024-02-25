import {redirect} from 'next/navigation'
 
export default function NotFound() {
  redirect('/')
  return (
    <div className='w-full min-h-[87.5rem] flex justify-center items-center text-3xl font-medium'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
    </div>
  )
}