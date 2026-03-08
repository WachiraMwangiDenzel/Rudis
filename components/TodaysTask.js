import React from 'react'

export default function TodaysTask() {
  return (
    <div className='bg-[#87848447] mt-10 rounded-lg items-center justify-end p-6 w-full flex flex-col md:flex-row gap-4'>
            <div className='flex flex-col items-start gap-4 text-black text-xl font-bold'>
                Todays Task
                <p className="text-base font-normal -mt-4 mb-5 "> Check Your Daily Tasks and Schedule</p>
                <button className="bg-[#00ffbb] px-4 py-2 rounded-md text-sm font-bold hover:bg-[#00cc99]">
                    Schedule
                </button>
            </div>
            <div className='items-end ml-auto'>
                <img src="/tasks1.png" alt="Task Image" className='w-40 h-40  object-cover rounded-lg' />
            </div>
    </div>
  )
}
