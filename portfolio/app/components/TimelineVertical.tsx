import React from 'react'

const TimelineVertical = () => {
  return (
    <div className='grid grid-cols-7 gap-x-2'>
        {/* Row 1 */}
        <div className='col-span-3'/>
        <div className='flex'>
            <div className='flex-grow h-0.5' />
            <div className='w-2 h-auto rounded-t-md bg-white' />
            <div className='flex-grow h-0.5 mt-6 rounded-r-md bg-white' />
        </div>
        <div className='col-span-3 pt-3'>
            <p className='font-bold'>York College of Pennsylvania</p>
            <p className='text-sm font-semibold'>2020-2024</p>
            <p className='text-sm'>B.S. Computer Engineering</p>
            <p className='text-sm'>Mathematics Minor</p>
        </div>

        {/* Row 2 */}
        <div className='col-span-3'/>
        <div className='flex justify-center'>
            <div className='flex-grow h-0.5 mt-6' />
            <div className='w-2 h-20' />
            <div className='w-2 h-full mx-2 bg-white' />
            <div className='w-2 h-full rounded-t-md bg-analagous1' />
            <div className='flex-grow h-0.5 mt-6 rounded-r-md bg-white' />
        </div>
        <div className='col-span-3 pt-3'>
            <p className='font-bold'>Computer Science Tutor</p>
            <p className='text-sm font-semibold'>2021-2024</p>
            <p className='text-sm'>Java and C</p>
        </div>

        {/* Row 3 */}
        <div className='col-span-3 pt-3 ml-auto'>
            <p className='font-bold'>Becton Dickinson</p>
            <p className='text-sm font-semibold'>May-Aug 2022</p>
            <p className='text-sm'>Software Engineering Intern</p>
        </div>
        <div className='flex justify-center'>
            <div className='flex-grow h-0.5 mt-6 rounded-r-md bg-white' />
            <div className='w-2 h-20 rounded-md bg-triadic2' />
            <div className='w-2 h-full mx-2 bg-white' />
            <div className='w-2 h-full bg-analagous1' />
            <div className='flex-grow h-0.5 mt-6' />
        </div>
        <div className='col-span-3'/>

        {/* Row 4 */}
        <div className='col-span-3'/>
        <div className='flex justify-center'>
            <div className='flex-grow h-0.5 mt-6' />
            <div className='w-2 h-20' />
            <div className='w-2 h-20 mx-2 bg-white' />
            <div className='w-2 h-20 bg-analagous1' />
            <div className='flex-grow h-0.5 mt-6' />
        </div>
        <div className='col-span-3' />

        {/* Row 5 */}
        <div className='col-span-3 pt-3 ml-auto'>
            <p className='font-bold'>MDI</p>
            <p className='text-sm font-semibold'>Jan-May 2023</p>
            <p className='text-sm'>Controls Engineering Intern</p>
        </div>
        <div className='flex justify-center'>
            <div className='flex-grow h-0.5 mt-6 rounded-r-md bg-white' />
            <div className='w-2 h-20 rounded-md bg-triadic2' />
            <div className='w-2 h-full mx-2 bg-white' />
            <div className='w-2 h-full bg-analagous1' />
            <div className='flex-grow h-0.5 mt-6' />
        </div>
        <div className='col-span-3'/>

        {/* Row 6 */}
        <div className='col-span-3'/>
        <div className='flex justify-center'>
            <div className='flex-grow h-0.5 mt-6' />
            <div className='w-2 h-20' />
            <div className='w-2 h-20 mx-2 bg-white' />
            <div className='w-2 h-20 bg-analagous1' />
            <div className='flex-grow h-0.5 mt-6' />
        </div>
        <div className='col-span-3'/>

        {/* Row 7 */}
        <div className='col-span-3 pt-3 ml-auto'>
            <p className='font-bold'>MDI</p>
            <p className='text-sm font-semibold'>Aug-Dec 2023</p>
            <p className='text-sm'>Controls Engineering Intern</p>
        </div>
        <div className='flex justify-center'>
            <div className='flex-grow h-0.5 mt-6 rounded-r-md bg-white' />
            <div className='w-2 h-20 rounded-md bg-triadic2' />
            <div className='w-2 h-full mx-2 bg-white' />
            <div className='w-2 h-full bg-analagous1' />
            <div className='flex-grow h-0.5 mt-6' />
        </div>
        <div className='col-span-3'/>

        {/* Row 8 */}
        <div className='col-span-3 pt-3'/>
        <div className='flex justify-center'>
            <div className='flex-grow h-0.5 mt-6' />
            <div className='w-2 h-20' />
            <div className='w-2 h-20 mx-2 rounded-b-md bg-white' />
            <div className='w-2 h-20 rounded-b-md bg-analagous1' />
            <div className='flex-grow h-0.5 mt-6' />
        </div>
        <div className='col-span-3'/>

    </div>
  )
}

export default TimelineVertical