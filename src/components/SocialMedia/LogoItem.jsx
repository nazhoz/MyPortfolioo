import React from 'react'
import { twMerge } from "tailwind-merge";

const LogoItem = ({ children, className }) => {
  return (
    <div
    className={twMerge(
      "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
      className
    )}
  >
    {children}
  </div>
  )
}

export default LogoItem