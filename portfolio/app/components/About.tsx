import React from 'react'
import Reveal from './Reveal';
import { DiReact, DiJava, DiJsBadge, DiCss3, DiHtml5, DiPython } from "react-icons/di";
import { SiCsharp, SiCplusplus, SiC, SiArduino, SiOpencv, SiNvidia } from "react-icons/si";

const About = () => {
  return (
    <>
        <div className='md:flex md:justify-center md:gap-x-10'>
            {/* About */}
            <div className='md:1/2 lg:w-1/3'>
                <Reveal>
                    <h3 className='text-xl pb-5'>About</h3>
                </Reveal>
                <Reveal>
                    <p className='leading-loose'>I began developing software at a very young age. I used to rush home from middle school to get to work. This passion eventually led me to York College of Pennsylvania, where I studied to become a computer engineer.</p>
                </Reveal>
                <br />
                <Reveal>
                    <p className='leading-loose'>While interning at Becton Dickinson and MDI, I contributed to a variety of projects and learned many valuable skills. Over the course of three internships, I developed more than a year of work experience.</p>
                </Reveal>
            </div>

            {/* Skills */}
            <div className=' md:text-left'>
                <Reveal rightToLeft>
                    <h3 className='text-xl pb-5 pt-10 md:pt-0'>Skills</h3>
                </Reveal>
                <div className=''>
                <div className='flex justify-center gap-x-20 flex-col'>
                    <Reveal rightToLeft>
                        <div className=''>
                        <p className='leading-loose'>Web Development</p>
                        <div className='text-4xl flex justify-start gap-x-5 py-2'>
                            <DiHtml5 />
                            <DiCss3 />
                            <DiJsBadge />
                            <DiReact />
                        </div>
                        </div>
                    </Reveal>
                    <Reveal rightToLeft>
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
                    </Reveal>
                    <Reveal rightToLeft>
                        <div className=''>
                        <p className='leading-loose'>Technologies</p>
                        <div className='text-4xl flex justify-start gap-x-5 py-2'>
                            <SiArduino />
                            <SiOpencv />
                            <SiNvidia />
                        </div>
                        </div>
                    </Reveal>
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