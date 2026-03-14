import React from 'react'
import { LoaderCircle, CircleX, CircleCheck, MoveRight } from 'lucide-react'

export default function TaskCards() {
  return (
    <div className='text-black mt-2 ml-5 mr-5 grid grid-cols-3 gap-4 rounded-lg '>
      <div className='bg-[#87848447] px-8 py-5  box-content rounded-4xl  shadow relative'>
        <h1 className='mb-2 text-[#076b50] text-center'>Design New Logo</h1>
        <p className="text-base font-normal  "><span>Deadline: </span>April 31, 2023</p>
        <p className="text-base font-light  flex flex-row items-center">Status:<LoaderCircle className='w-6 h-6 text-orange-500 ml-1' /> In Progress</p>
        <MoveRight className='cursor-pointer absolute w-7 h-10 text-md  -bottom-1 right-5 hover:text-[#076b50] hover:w-8 hover:11'/>
        <hr className='my-3 border-t border-gray-400' />

          {/* Progress Bar */}
        <div className="flex justify-between text-sm mb-2">
          <span>Tasks Progress</span>
          <span>70%</span>
        </div>

        <div className="w-auto bg-gray-200 h-2 rounded-full">
          <div
            className="bg-orange-500 h-2 rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
      <div className='bg-[#87848447] px-8 py-5  box-content rounded-4xl shadow relative'>
        <h1 className='mb-2 text-[#076b50] text-center'>App Development</h1>
        <p className="text-base font-normal  ">Deadline: August 31, 2023</p>
        <p className="text-base font-light  flex flex-row items-center">Status: <CircleX className='w-6 h-6 text-red-500 ml-1'/>Not Started</p>
        <MoveRight className='cursor-pointer absolute w-7 h-10 text-md  -bottom-1 right-5 hover:text-[#076b50] hover:w-8 hover:11'/>
        <hr className='my-3 w-full border-t border-gray-400' />
            <div className="w-full max-w-md">

            {/* Progress Bar */}
        <div className="flex justify-between text-sm mb-2">
          <span>Tasks Progress</span>
          <span>0%</span>
        </div>

        <div className="w-auto bg-gray-200 h-2 rounded-full">
          <div
            className="bg-red-500 h-2 rounded-full"
            style={{ width: "2%" }}
          ></div>
        </div>

    </div>
        
      </div>
      <div className='bg-[#87848447] px-8 py-5  box-content rounded-4xl shadow relative '>
        <h1 className='mb-2 text-[#076b50] text-center'>Update Website</h1>
        <p className="text-base font-normal   ">Deadline: Feb 31, 2023</p>
        <p className="text-base font-light  flex flex-row items-center">Status:<CircleCheck className='w-6 h-6 text-green-500 ml-1' /> Completed</p>
        <MoveRight className='cursor-pointer absolute w-7 h-10 text-md  -bottom-1 right-5 hover:text-[#076b50] hover:w-8 hover:11' />
        <hr className='my-3 border-t border-gray-400' />

              {/* Progress Bar */}
        <div className="flex justify-between text-sm mb-2">
          <span>Tasks Progress</span>
          <span>100%</span>
        </div>

        <div className="w-auto bg-gray-200 h-2 rounded-full">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: "100%" }}
          ></div>
        </div>

      </div>

    </div>
  )
}