import React from 'react'
import Image from 'next/image'
import Socials from './Socials'
import Typewriter from 'typewriter-effect';
import headshotSquareClear from '../../public/images/headshot-square-clear.png'
import { VscChromeMinimize , VscChromeMaximize, VscChromeClose } from "react-icons/vsc";

const Splash = (props: {setPhone: () => void, setEmail: () => void}) => {
  return (
    <>
        <div className='px-10 text-center lg:flex lg:justify-center lg:text-left lg:h-full'>
            <div className='flex justify-center mb-5 mx-auto bg-gradient-to-br from-analagous1 to-primary rounded-full w-72 h-72 lg:mx-0'>
                <Image src={headshotSquareClear} alt='Headshot of Mitchell Conrad' className='relative rounded-full m-1 bg-white dark:bg-gray'/>
            </div>

            <div className='lg:px-10'>
                {/* Main Title */}
                <h2 className='text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-br from-analagous1 to-primary'>Mitchell Conrad</h2>
                <h3 className='text-xl py-2'>Computer Engineer</h3>

                {/* Terminal Style Intro */}
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
                        {/* <p>{">"} Swift learner and highly motivated engineer.</p>
                        <p>{">"} Seeking a full-time role in embedded systems, software, or hardware.</p>
                        <p>{">"} Graduating August 2024.</p> */}

                        <Typewriter
                            onInit={(typewriter) => {
                            typewriter.typeString('> Swift learner and highly motivated engineer.<br />> ')
                                .pauseFor(500)
                                .typeString('Seeking a full-time role in embedded systems, software, or hardware.<br />> ')
                                .pauseFor(500)
                                .typeString('Graduating August 2024.')
                                .callFunction(() => {
                                })
                                .start();
                            }}
                        />
                        
                    </div>
                </div>

                {/* Social Links */}
                <div className='py-5 flex justify-center lg:justify-start'>
                    <Socials setPhone={ () => props.setPhone()} setEmail={ () => props.setEmail()} />
                    <a href="/resume" target='_blank' rel='noreferrer' className='text-md text-gray dark:text-white font-semibold border-2 border-gray dark:border-white hover:bg-gray dark:hover:bg-white hover:text-white dark:hover:text-gray transition ease-in-out px-2 pt-1 rounded-md ml-4'>Resume</a>
                </div>

            </div>

        </div>
    </>
  )
}

export default Splash