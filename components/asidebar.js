import { ChartPie, ClipboardList, LayoutDashboard, LayoutList, ListTodo, Settings } from 'lucide-react'
import React from 'react'

export default function asidebar() {
  return (
    <div className=' w- auto bg-linear-to-r from-gray-400 to-gray-300 h-40 w-full" text-black flex flex-col min-h-screen relative'>
        <h1 className='flex items-center gap-3 mb-4 font-semibold text-3xl ml-8 mt-10 '>
        <LayoutList className='h-11 w-11 strokeWidth{3}'/>
            TaskFlow</h1>
        <div className='flex flex-col gap-8 text-base mt-25  '>
            <div className='flex '>
                 <a href="#" className='flex  gap-4 ml-22 hover:text-[#076b50] hover:text-lg'>
                <LayoutDashboard />
                Dashboard
                 </a>
            </div>

            <div className='flex '>
                 <a href="#" className='flex  gap-4 ml-22 hover:text-[#076b50] hover:text-lg'>
                    <ClipboardList />
                    Projects
                </a>
            </div>

            <div className='flex '>
                <a href="#" className=' flex gap-4 ml-22 hover:text-[#076b50] hover:text-lg'>
                    <ListTodo />
                    My Tasks
                </a>
            </div>

            <div className='flex '>
                <a href="#" className=' flex gap-4 ml-22 hover:text-[#076b50] hover:text-lg'>
                    <ChartPie />
                    Reports
                </a>
            </div>
        </div>
        <div className='flex absolute bottom-10 text-base '>
                <a href="#" className=' flex gap-4 ml-22 hover:text-[#076b50] hover:text-lg'>
                    <Settings />
                    Settings
                </a>
        </div>
    </div>
  )
}
