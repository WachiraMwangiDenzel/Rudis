"use client"

import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function GraphMessages() {
  // Data for the graph based on task progress percentages
  const data = [
    { name: 'Mon', progress: 4 },
    { name: 'Tue', progress: 7 },
    { name: 'Wed', progress: 5 },
    { name: 'Thur', progress: 6 },
    { name: 'Fri', progress: 8 }
  ]

  return (
    <div className="max-w-full mx-auto mt-2 px-4 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {/* Graph Section */}
      <div className="w-full max-w-md bg-gray-300 border border-white/30 p-6 rounded-4xl shadow-xl">
        <h2 className="text-2xl font-semibold text-[#076b50] text-center mb-4">Task Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barCategoryGap="2%">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend />
            <Bar dataKey="progress" fill="#076b50" barSize={10} radius={[5, 5, 5, 5]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Message Section */}
      <div className="flex-1 bg-white/70 backdrop-blur-sm border border-white/30 p-6 rounded-4xl shadow-xl">
        <h2 className="text-2xl font-semibold text-[#076b50] text-center mb-4">Messages</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3 bg-white/90 p-4 rounded-xl shadow-md border border-white/40">
            <div className="flex-none rounded-full bg-green-100 text-green-700 w-9 h-9 grid place-items-center font-semibold">70%</div>
            <p className="text-gray-700">Keep up the good work on the Design New Logo task — you're at 70% progress.</p>
          </div>
          <div className="flex items-start gap-3 bg-white/90 p-4 rounded-xl shadow-md border border-white/40">
            <div className="flex-none rounded-full bg-orange-100 text-orange-700 w-9 h-9 grid place-items-center font-semibold">0%</div>
            <p className="text-gray-700">Don't forget to start the App Development task — it's currently at 0%.</p>
          </div>
          <div className="flex items-start gap-3 bg-white/90 p-4 rounded-xl shadow-md border border-white/40">
            <div className="flex-none rounded-full bg-blue-100 text-blue-700 w-9 h-9 grid place-items-center font-semibold">100%</div>
            <p className="text-gray-700">Great job completing the Update Website task at 100%!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
