import Navbar from '@/components/Navbar'
import TaskCards from '@/components/TaskCards'
import TodaysTask from '@/components/TodaysTask'
import GraphMessages from '@/components/GraphMessages'
import React from 'react'

export default function page() {
  return (
    <div className='bg-white flex flex-col min-h-screen text-2xl font-bold mb-10 '>
        <Navbar />
        <TodaysTask />
        <TaskCards />
        <GraphMessages/>

    </div>
  )
}
