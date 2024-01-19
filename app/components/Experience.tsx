import React from 'react'
import Timeline from './Timeline'
import TimelineVertical from './TimelineVertical'
import Reveal from './Reveal'

const Experience = () => {
  return (
    <>
        {/* <div className='flex flex-wrap justify-center gap-x-20 lg:flex-nowrap'> */}
            {/* Left Side - Experience Overview */}
            {/* <div className='lg:w-2/5 md:w-2/3'>
                <h3 className='text-xl'>Experience</h3>
                <p className='leading-8 py-5'>
                During my time at York College of Pennsylvania, I completed three internships for two companies and gained over a year of work experience. During these internships, I contributed to a variety of projects and learned many valuable skills.
                </p>
            </div> */}
            
            {/* Right Side - Cool Looking Code Snippet */}
            {/* <div className='text-xs whitespace-pre text-white py-5 lg:block hidden'>
                <p><span className='text-triadic2'>{"template"}</span>{" <"}<span className='text-triadic2'>{"class T"}</span>{">"}</p>
                <p><span className='text-triadic2'>{"void"}</span>{" BinHeap<T>::"}<span className='text-analagous1'>{"percolateDown"}</span>{"("}<span className='text-triadic2'>{"int"}</span>{" idx) {"}</p>
                <p><span className='text-triadic2'>{"    int "}</span>{"cIndex = minChild(idx)"}<span className='text-triadic2'>{";"}</span></p>
                <p><span className='text-triadic2'>{"    while"}</span>{"("}<span className='text-triadic1'>{"heapArray"}</span>{"[idx] > "}<span className='text-triadic1'>{"heapArray"}</span>{"[cIndex] && cIndex != -1){"}</p>
                <p>{"        T previousChild = "}<span className='text-triadic1'>{"heapArray"}</span>{"[cIndex]"}<span className='text-triadic2'>{";"}</span></p>
                <p><span className='text-triadic1'>{"        heapArray"}</span>{"[cIndex] = "}<span className='text-triadic1'>{"heapArray"}</span>{"[idx]"}<span className='text-triadic2'>{";"}</span></p>
                <p><span className='text-triadic1'>{"        heapArray"}</span>{"[idx] = previousChild"}<span className='text-triadic2'>{";"}</span></p>
                <br />
                <p>{"        idx = cIndex"}<span className='text-triadic2'>{";"}</span></p>
                <p>{"        cIndex = minChild(idx)"}<span className='text-triadic2'>{";"}</span></p>
                <p>{"    }"}</p>
                <p>{"}"}</p>
            </div> */}
        {/* </div> */}
        
        <Reveal>
          <h3 className='text-xl pb-10'>Experience</h3>
        </Reveal>

        {/* Horizontal Timeline (Large Screens Only) */}
        <div className='hidden lg:block'><Timeline /></div>

        {/* Vertical Timeline */}
        <div className='lg:hidden'><TimelineVertical/></div>
    </>
  )
}

export default Experience