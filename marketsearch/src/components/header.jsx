import React from 'react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import logo from "../assets/marketsearch.png"
import star from "../assets/star.png"
import { Input } from "@/components/ui/input"

export default function MainHeader() {
  return (
    <div className="flex h-[4.5rem] p-3 px-5 justify-between border-s border-b-[3px] border-b-primarygreen font-gabarito shadow-md">
    <img src={logo} className="h-full"></img>
    <Input className="max-w-[50vw] h-full text-center border-2 placeholder:text-lg" placeholder="Let's go shopping..."></Input>
    <div className="flex h-full gap-2">
      <Button variant="ghost" className="aspect-square p-1 h-full"><img src={star} className="h-full w-auto"></img></Button>
      <Avatar className="h-full w-auto">
        <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  </div>
  )
}
