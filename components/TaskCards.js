import React from 'react'

export default function TaskCards() {
  return (
    <div className='text-black mt-5 grid grid-cols-3 gap-4 rounded-lg'>
      <div className='bg-[#87848447] m-3 p-4 rounded-lg  shadow'>
        <h1 className='text-[#076b50]'>Design New Logo</h1>
        <p className="text-sm font-normal  "><span>Deadline: </span>April 31, 2023</p>
        <p className="text-sm font-normal  "><span>Status: </span>In Progress</p>
      </div>
        <div className='bg-[#87848447] m-3 p-4 rounded-lg shadow'>
        <h1 className='text-[#076b50]'>Mobile App Development</h1>
        <p className="text-sm font-normal  "><span>Deadline: </span>August 31, 2023</p>
        <p className="text-sm font-normal  "><span>Status: </span>Not Started</p>
      </div>
      <div className='bg-[#87848447] m-3 p-4 rounded-lg shadow'>
        <h1 className='text-[#076b50]'>Update Website</h1>
        <p className="text-sm font-normal   "><span>Deadline: </span>Feb 31, 2023</p>
        <p className="text-sm font-normal   "><span>Status: </span>Completed</p>
      </div>
    </div>
  )
}
