import React from 'react'
import { IoIosBatteryCharging, IoIosWifi } from "react-icons/io";

const HeaderBar = () => {
  return (
    <>
    <div className="absolute ml-3 mt-2 z-10 flex gap-2">
      <span className='text-white text-[8px]'>Airtel Wifi</span>
    </div>
    <div className="absolute left-[50%] top-2.5 z-10 h-3 w-16 -translate-x-[50%] rounded-xl bg-neutral-900"></div>
    <div className="absolute right-3 top-2 z-10 flex gap-2">
      <IoIosWifi className="text-white" />
      <IoIosBatteryCharging className="text-white" />
    </div>
  </>
  )
}

export default HeaderBar