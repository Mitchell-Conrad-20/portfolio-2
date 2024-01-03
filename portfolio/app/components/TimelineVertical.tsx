import React from 'react'

const TimelineVertical = () => {
  return (
    <>
        
        <div className='flex'>
            <div className='px-1 h-full mt-24'>
                <div className='flex'>
                    <div className='px-2 pb-2'>
                        <p className='font-bold'>Becton Dickinson</p>
                        <p className='text-sm font-semibold'>May-Aug 2022</p>
                        <p className='text-sm'>Software Engineering Intern</p>
                    </div>
                    <div className='w-20 h-0.5 mt-3 rounded-md bg-gray dark:bg-white' />
                    <div className='w-2 h-20 rounded-md bg-triadic2 ml-auto' />
                </div>
                <div className='w-2 h-20 rounded-md' />
                <div className='flex'>
                    <div className='px-2 pb-2'>
                        <p className='font-bold'>MDI</p>
                        <p className='text-sm font-semibold'>Jan-May 2023</p>
                        <p className='text-sm'>Controls Engineering Intern</p>
                    </div>
                    <div className='w-20 h-0.5 mt-3 rounded-md bg-gray dark:bg-white' />
                    <div className='w-2 h-20 rounded-md bg-triadic2 ml-auto' />
                </div>
                <div className='w-2 h-20 rounded-md' />
                <div className='flex'>
                    <div className='px-2 pb-2'>
                        <p className='font-bold'>MDI</p>
                        <p className='text-sm font-semibold'>Aug-Dec 2023</p>
                        <p className='text-sm'>Controls Engineering Intern</p>
                    </div>
                    <div className='w-20 h-0.5 mt-3 rounded-md bg-gray dark:bg-white' />
                    <div className='w-2 h-20 rounded-md bg-triadic2 ml-auto' />
                </div>
            </div>
            <div className='px-1'>
                <div className='flex'>
                    <div className='w-2 h-144 rounded-md bg-gray dark:bg-white' />
                    <div className='flex flex-col'>
                        <div className='flex'>
                            <div className='w-20 h-0.5 mt-3 rounded-md bg-gray dark:bg-white' />
                        </div>
                        <div className='px-2 mt-12 flex'>
                            <div className='w-2 h-128 rounded-md bg-analagous1 dark:bg-white' />
                            <div>
                                <div className='w-20 h-0.5 mt-60 rounded-md bg-gray dark:bg-white' />
                                <div className='px-2 pb-2 ml-20'>
                                    <p className='font-bold'>CS Tutor</p>
                                    <p className='text-sm font-semibold'>2021-2024</p>
                                    <p className='text-sm'>Java and C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-2 pb-2'>
                        <p className='font-bold'>York College of Pennsylvania</p>
                        <p className='text-sm font-semibold'>2020-2024</p>
                        <p className='text-sm'>B.S. Computer Engineering</p>
                        <p className='text-sm'>Minor in Mathematics</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TimelineVertical