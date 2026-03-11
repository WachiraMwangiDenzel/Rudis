import Navbar from '@/components/Navbar'
import TaskCards from '@/components/TaskCards'
import TodaysTask from '@/components/TodaysTask'
import React from 'react'

export default function page() {
  return (
    <div className='bg-white flex flex-col h-screen text-2xl font-bold'>
        <Navbar />
        <TodaysTask />
        <TaskCards />
    </div>
  )
}
