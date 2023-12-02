import { MoonLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='w-full h-[95vh] flex justify-center items-center bg-white'>
      <MoonLoader color='#000000' />
    </div>
  )
}

export default Loading