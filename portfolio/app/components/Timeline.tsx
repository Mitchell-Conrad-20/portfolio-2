import React from 'react'

const Timeline = () => {
  return (
    <div>
        <div className='flex'>
            <div className='flex w-1/5'>
                <div className='w-0.5 ml-5 rounded-sm bg-white' />
                <div className='px-2 pb-2'>
                    <p className='font-bold'>York College of Pennsylvania</p>
                    <p className='text-sm font-semibold'>2020-2024</p>
                    <p className='text-sm'>B.S. Computer Engineering</p>
                    <p className='text-sm'>Mathematics Minor</p>
                </div>
            </div>
            <div className='w-4/5 flex flex-col justify-end'>
                <div className='flex'>
                    <div className='w-0.5 ml-5 rounded-sm bg-white' />
                    <div className='px-2 pb-2'>
                        <p className='font-bold'>CS Tutor</p>
                        <p className='text-sm font-semibold'>2021-2024</p>
                        <p className='text-sm'>Java and C</p>
                    </div>
                </div>
                <div className='w-full h-2 mb-3 rounded-md bg-analagous1' />
            </div>
        </div>

        {/* Main Line */}
        <div className='w-full h-2 rounded-md bg-white' />

        <div className='flex'>
            <div className='flex w-1/5'>
            </div>
            <div className='w-1/6 px-2'>
                <div className='w-full h-2 mt-3 rounded-md bg-triadic2' />
                <div className='flex group'>
                    <div className='w-0.5 ml-5 rounded-sm bg-white' />
                    <div className='px-2 pt-2'>
                        <p className='font-bold'>Becton Dickinson</p>
                        <p className='text-sm font-semibold'>May-Aug 2022</p>
                        <p className='text-sm'>Software Engineering Intern</p>
                        {/* <br className='hidden group-hover:block'/>
                        <p className='hidden group-hover:block'>Developed C#, TypeScript, and Angular code for the COR System.</p> */}
                    </div>
                </div>
            </div>
            <div className='flex w-1/12'>
            </div>
            <div className='w-1/6 px-2'>
                <div className='w-full h-2 mt-3 rounded-md bg-triadic2' />
                <div className='flex'>
                    <div className='w-0.5 ml-5 rounded-sm bg-white' />
                    <div className='px-2 pt-2'>
                        <p className='font-bold'>MDI</p>
                        <p className='text-sm font-semibold'>Jan-May 2023</p>
                        <p className='text-sm'>Controls Engineering Intern</p>
                    </div>
                </div>
            </div>
            <div className='flex w-1/12'>
            </div>
            <div className='w-1/6 px-2'>
                <div className='w-full h-2 mt-3 rounded-md bg-triadic2' />
                <div className='flex'>
                    <div className='w-0.5 ml-5 rounded-sm bg-white' />
                    <div className='px-2 pt-2'>
                        <p className='font-bold'>MDI</p>
                        <p className='text-sm font-semibold'>Aug-Dec 2023</p>
                        <p className='text-sm'>Controls Engineering Intern</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Timeline