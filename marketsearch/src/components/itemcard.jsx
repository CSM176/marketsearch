import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button' 
import laptop from '@/assets/laptop.jpg'
import locationicon from '@/assets/location.png'
import pencil from '@/assets/pencil.png'
import pin from '@/assets/pin.png'
import goldstar from '@/assets/gold star.png'
import cross from '@/assets/cross.png'
import facebooklogo from '@/assets/facebook.png'

const Listing = ({ image, title, location, status, oldPrice, newPrice, unseen, emoji = "🕛" }) => {
  return (
    <Card className="relative w-64 bg-white border border-gray-300 rounded-lg p-0 shadow-md font-gabarito">
      {unseen ? <Badge className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1">
        New
      </Badge>: 
      <div className='absolute top-[-0.7rem] right-[-0.7rem]'>
        <h1 className='text-2xl'>
          {emoji}
        </h1>
      </div>}
      <img className='absolute top-2 left-2 w-7' src={facebooklogo}></img>
      <CardHeader className="p-0">
        <img className="rounded-t-md" src={laptop}></img>
      </CardHeader>
      <CardContent className="p-3 py-1">
        <CardTitle className="text-xl font-normal">
          Laptop HP Envy 13
        </CardTitle>
        <CardDescription className="flex align-middle items-center">
          <img src={locationicon} className='h-4 pr-1 inline-block'></img>
          Melbourne, VIC
        </CardDescription>
      </CardContent>
      <CardFooter className="p-0 flex-col">
        <div className='w-full bg-gray-100 h-7 px-3 py-1 flex items-center'>
          <img src={pencil} className='h-2/3 pr-1'></img>
          <p className='text-[0.8rem] text-gray-600 font-lexend font-light'>Waiting on response...</p>
        </div>
        <div className='h-9 w-full flex justify-between items-center px-3 py-1'>
          <div className='inline-flex justify-start content-start h-full gap-2 items-center'>
            <img className='h-2/3' src={pin}></img>
            <img className='h-2/3' src={goldstar}></img>
            <img className='h-2/3' src={cross}></img>
          </div>
          <div className='flex items-center gap-1'>
            <h3 className='text-gray-500 line-through'>$375</h3>
            <h2 className="text-xl text-pricegreen">$300</h2>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Listing;
