import React from 'react'
import { DiReact, DiJava, DiJsBadge, DiCss3, DiHtml5, DiPython } from "react-icons/di";
import { SiCsharp, SiCplusplus, SiC, SiArduino, SiOpencv, SiNvidia } from "react-icons/si";

const About = () => {
  return (
    <>
        <div className='md:flex md:justify-center md:gap-x-10'>
            {/* About */}
            <div className='md:1/2 lg:w-1/3'>
                <h3 className='text-xl pb-5'>About</h3>
                <p className='leading-loose'>During my time at York College of Pennsylvania, I completed three internships for two companies and gained over a year of work experience. During these internships, I contributed to a variety of projects and learned many valuable skills.</p>
            </div>

            {/* Skills */}
            <div className=' md:text-left'>
                <h3 className='text-xl pb-5 pt-10 md:pt-0'>Skills</h3>
                <div className=''>
                <div className='flex justify-center gap-x-20 flex-col'>
                    <div className=''>
                    <p className='leading-loose'>Web Development</p>
                    <div className='text-4xl flex justify-start gap-x-5 py-2'>
                        <DiHtml5 />
                        <DiCss3 />
                        <DiReact />
                        <DiJsBadge />
                    </div>
                    </div>
                    <div className=''>
                    <p className='leading-loose'>General-Purpose Languages</p>
                    <div className='text-4xl flex justify-start gap-x-5 py-2'>
                        <SiC />
                        <SiCplusplus />
                        <SiCsharp />
                        <DiJava />
                        <DiPython />
                    </div>
                    </div>
                    <div className=''>
                    <p className='leading-loose'>Technologies</p>
                    <div className='text-4xl flex justify-start gap-x-5 py-2'>
                        <SiArduino />
                        <SiOpencv />
                        <SiNvidia />
                    </div>
                    </div>
                </div>
                {/* <p>Industrial</p> */}
                {/* ignition, factorytalk, studio 5, 500, 5k */}
                </div>
            </div>
        </div>
    </>
  )
}

export default About