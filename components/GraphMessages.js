"use client"

import React from 'react'
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts'

export default function GraphMessages() {
  const data = [
    { name: 'Mon', progress: 40 },
    { name: 'Tue', progress: 70 },
    { name: 'Wed', progress: 50 },
    { name: 'Thu', progress: 60 },
    { name: 'Fri', progress: 80 }
  ]

  return (
    <div className="mt-5 px-4 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-auto bg-gray-300 border p-4 rounded-4xl shadow-xl">
        <h2 className="text-xl font-semibold text-[#076b50] mt-3 ml-5 mb-4">
          Task Progress
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barCategoryGap="2%">
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" fontSize={12} />

            <YAxis
              domain={[0, 100]}
              tickFormatter={(value) => `${value}%`}
              fontSize={12}
            />

            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />

            <Bar
              dataKey="progress"
              fill="#076b50"
              barSize={10}
              radius={[5, 5, 5, 5]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Assignment Section */}
      <div className="grid w-auto  text-black bg-gray-300 border-b border-white shadow-xl rounded-4xl p-5">
            <h1 className=''> Assignments</h1>
            <div className='flex justify-between -mt-4'>
              <label className='text-lg font-normal '>
                <input type="checkbox"className="mr-2 w-5 h-5  rounded-fullaccent-blue-500"/>
                Add Icons
                <span className='grid ml-6 -mt-2 text-gray-500 text-base font-normal '> 1 Feb 2025</span>
              </label>

              <div className='text-gray-500 font-normal text-sm leading-none'>
                0/100
                <span className='grid'>To Do</span>
              </div>

            </div>
            <div className='flex justify-between -mt-4'>
              <label className='text-lg font-normal '>
                <input type="checkbox"className="mr-2 w-5 h-5 rounded-full accent-blue-500"/>
                Video Editting
                <span className='grid ml-6 -mt-2 text-gray-500 text-base font-normal '>10 Feb 2025 </span>
              </label> 

              <div className='text-gray-500 font-normal text-sm leading-none'>
                0/100
                <span className='grid'>To Do</span>
              </div>

            </div>
             <div className='flex justify-between -mt-4'>
              <label className='text-lg font-normal '>
                <input type="checkbox"className="mr-2 w-5 h-5 rounded-full accent-blue-500"/>
                Study DSA
               <span className='grid ml-6 -mt-2 text-gray-500 text-base font-normal '>20 Feb 2025</span> 
              </label>

              <div className='text-gray-500 font-normal text-sm leading-none'>
                0/100
                <span className='grid'>To Do</span>
              </div>

            </div>
            <div className='flex justify-between -mt-4'>
              <label className='text-lg font-normal '>
                <input type="checkbox"className="mr-2 w-5 h-5 rounded-full accent-blue-500"/>
                Create Portfolio
                <span className='grid ml-6 -mt-2 text-gray-500 text-base font-normal '>10 March 2025</span>
              </label>

              <div className='text-gray-500 font-normal text-sm leading-none'>
                0/100
                <span className='grid'>To Do</span>
              </div>

            </div>
      </div>
    </div>
  )
}
