import React from 'react'
import { IoLogoApple } from 'react-icons/io'

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-black">
      {/* Example logo from logoispum */}
     <IoLogoApple size={50} className='text-white' />

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-black py-2 text-sm font-medium text-white backdrop-blur">
        Portfolio
      </button>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full " />
    </div>
  )
}

export default Screen