import React from 'react'

export default function TodaysTask() {
  return (
    <div className='bg-[#87848447] flex flex-row items-center p-4 ml-5 mt-2 mr-5 rounded-4xl drop-shadow[(0 20px 13px rgba(0, 0, 0, 0.03))]'>
            <div className='ml-5 text-black font-normal text-md'>
               <h1 className='font-bold '>Todays Task</h1>
                <p className=" text-sm mb-4 -mt-1 "> Check Your Daily Tasks and Schedule</p>
                <button className="bg-[#008080] ml-7 px-4 py-2 rounded-2xl font-medium text-lg hover:bg-[##034545]  hover:text-orange-300  transition-colors duration-300 ease-in-out">
                    Schedule
                </button>
            </div>
            <div className='items-end ml-auto'>
                <img src="/tasks1.png" alt="Task Image" className='w-40 h-40  object-cover rounded-lg' />
            </div>
    </div>
  )
}