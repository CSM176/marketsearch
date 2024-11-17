import React from 'react'
import { Input } from "@/components/ui/input"

export default function PageHeader() {
  return (
    <div className='flex w-full bg-secondarygreen h-44 items-center p-5 px-[3vw] gap-8 shadow-lg'>
        <h1 className="font-gabarito text-6xl text-white whitespace-nowrap">Results for</h1>
        <Input className="h-2/3 bg-transparent border-tertiarygreen border-4 border-r-6 placeholder:text-4xl placeholder:font-gabarito placeholder:text-tertiarygreen" placeholder="cheap laptops..." />
    </div>
  )
}
