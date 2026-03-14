import Navbar from '@/components/Navbar'
import TaskCards from '@/components/TaskCards'
import TodaysTask from '@/components/TodaysTask'
import GraphMessages from '@/components/GraphMessages'
import React from 'react'
import Footer from '@/components/footer'

export default function page() {
  return (
    <div className='bg-white flex flex-col min-h-screen text-2xl font-bold  '>
        <Navbar />
        <TodaysTask />
        <TaskCards />
        <GraphMessages/>
        <Footer/>
    </div>
  )
}
