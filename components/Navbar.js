import React from 'react'
import { MessageCircle, Bell } from 'lucide-react'

export default function Navbar() {
  return (
    <div className='bg-[#87848447] top-0 h-16 w-full rounded-bl-sm flex items-center justify-between px-4 text-white font-bold'>
      <div>Dashboard</div>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-4">
        <MessageCircle className="w-6 h-6 cursor-pointer" />
        <Bell className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  )
}
