import React from 'react'
import { MessageCircle, Bell } from 'lucide-react'
import { House } from 'lucide-react'

export default function Navbar() {
  return (
    <div className='bg-[#87848447] ml-5 mr-5 mt-2 h-16  rounded-4xl flex items-center justify-between px-4 text-white font-bold transition-all duration-300 ease-in-out '>
      <div className=' px-8 text-black font-bold text-xl'>Dashboard</div>
      <div className="flex items-center space-x-4 ">
       <House className='text-black font-medium text-md  cursor-pointer hover:text-[#076b50]'/> 
       <input type="text" placeholder="Search, Tasks, Projects or Messages..." className="pl-4 pr-40 py-2 rounded-full bg-white hover:bg-[#f7f7f7] text-black font-medium text-sm placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:bg-[#f7f7f7] focus:ring-1 focus:ring-[rgb(0,0,0)]"/>
      </div>
      <div className="pr-8 flex space-x-5 items-center">
        <MessageCircle className="text-black w-6 h-6 cursor-pointer font-medium hover:text-[#076b50]" />
        <Bell className="text-black w-6 h-6 cursor-pointer
         font-medium hover:text-[#076b50]" />
      </div>
    </div>
  )
}
