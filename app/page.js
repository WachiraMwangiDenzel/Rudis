import Navbar from '@/components/Navbar'
import TaskCards from '@/components/TaskCards'
import TodaysTask from '@/components/TodaysTask'
import GraphMessages from '@/components/GraphMessages'
import React from 'react'
import Footer from '@/components/footer'
import Asidebar from '@/components/asidebar'
export default function page() {
  return (
    <div className='bg-gray-200 flex flex-cols-3 min-h-screen text-2xl font-bold  '>
      <aside className=' fixed w-70 h-screen'>
        <Asidebar/>
      </aside>
      <main className=' mb-10 ml-70'>
        <Navbar />
        <TodaysTask />
        <TaskCards />
        <GraphMessages/>
        {/* <Footer/> */}
      </main>
      <aside className='w-80'>
      </aside>
    </div>
  )
}
