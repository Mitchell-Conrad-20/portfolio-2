import React, { useRef } from 'react'
import Image from 'next/image'
import Socials from './Socials'
import Typewriter from 'typewriter-effect';
import Reveal from './Reveal';
import headshotSquareClear from '../../public/images/headshot-square-clear.png'
import { VscChromeMinimize , VscChromeMaximize, VscChromeClose } from "react-icons/vsc";

const Splash = (props: {setPhone: () => void, setEmail: () => void, setResume: () => void}) => {
  return (
    <>
        <div className='px-10 text-center lg:flex lg:justify-center lg:text-left lg:h-full'>
            <Reveal>
                <div className='flex justify-center mb-5 mx-auto bg-gradient-to-br from-analagous1 to-primary rounded-full w-72 h-72 lg:mx-0'>
                    <Image src={headshotSquareClear} alt='Headshot of Mitchell Conrad' className='relative rounded-full m-1 bg-white dark:bg-gray'/>
                </div>
            </Reveal>

            <div className='lg:px-10'>
                {/* Main Title */}
                <Reveal rightToLeft>
                    <h2 className='text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-br from-analagous1 to-primary'>Mitchell Conrad</h2>
                </Reveal>
                <Reveal rightToLeft delay={0.500}>
                    <h3 className='text-xl py-2'>Computer Engineer</h3>
                </Reveal>

                {/* Terminal Style Intro */}
                <Reveal rightToLeft delay={0.750} overflowHidden={false}>
                    <div className="mx-auto text-left shadow-2xl rounded-lg my-2 bg-white dark:bg-gray">
                        <div className='py-0.5 rounded-t-lg flex justify-between align-middle px-1 gap-x-1 bg-gray dark:bg-lightGray text-white'>
                            <div>
                                <p className='text-xs pl-2'>Terminal</p>
                            </div>
                            <div className='rounded-t-lg flex justify-end align-middlegap-x-1'>
                                <VscChromeMinimize  />
                                <VscChromeMaximize />
                                <span className='text-triadic2'>
                                    <VscChromeClose />
                                </span>
                            </div>
                        </div>
                        <div className="px-5 py-3 leading-loose md:h-32 lg:w-144 lg:h-32">
                            <Typewriter
                                onInit={(typewriter) => {
                                typewriter.changeDelay(Math.floor(Math.random()*50) + (Math.floor(Math.random()*30)))
                                typewriter.typeString('> Swift learner and highly motivated engineer.<br />> ')
                                    .pauseFor(500)
                                    .typeString('Interested in embedded systems, software, and hardware.<br />> ')
                                    .pauseFor(500)
                                    .typeString('Graduating August 2024.')
                                    .callFunction(() => {
                                    })
                                    .start();
                                }}
                            />
                    
                        </div>
                    </div>
                </Reveal>

                {/* Social Links */}
                <Reveal rightToLeft delay={1}>
                    <div className='py-5 flex justify-center lg:justify-start'>
                        <Socials setPhone={ () => props.setPhone()} setEmail={ () => props.setEmail()} />
                        <p onClick={ () => props.setResume() } className='cursor-pointer text-md text-gray dark:text-white font-semibold border-2 border-gray dark:border-white hover:bg-gray dark:hover:bg-white transition ease-in-out hover:text-white dark:hover:text-gray px-2 pt-1 rounded-md ml-4'>Resume</p>
                    </div>
                </Reveal>

            </div>

        </div>
    </>
  )
}

export default Splash