import React from 'react'
import Image from 'next/image'
import Socials from './Socials'
import headshotSquareClear from '../../public/images/headshot-square-clear.png'

const Splash = (props: {setPhone: () => void, setEmail: () => void}) => {
  return (
    <>
        <div className='px-10 text-center lg:flex lg:justify-center lg:text-left lg:h-full'>
            <div className='flex justify-center mb-5 mx-auto bg-gradient-to-br from-analagous1 to-primary rounded-full w-72 h-72 lg:mx-0'>
                <Image src={headshotSquareClear} alt='Headshot of Mitchell Conrad' className='relative rounded-full m-1 bg-white dark:bg-gray'/>
            </div>

            <div className='px-10'>
                {/* Main Title */}
                <h2 className='text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-br from-analagous1 to-primary'>Mitchell Conrad</h2>
                <h3 className='text-xl py-2'>Computer Engineer</h3>

                {/* Terminal Style Intro */}
                <div className="mx-auto text-left shadow-2xl rounded-lg my-2 dark:bg-[rgba(255,255,255,0.05)]">
                <div className="px-5 py-3 leading-loose">
                    <p>{">"} Swift learner and highly motivated engineer.</p>
                    <p>{">"} Seeking a full-time role in embedded systems, software, or hardware.</p>
                    <p>{">"} Graduating August 2024.</p>
                </div>
                </div>

                {/* Social Links */}
                <div className='py-5 flex justify-center lg:justify-start'>
                <Socials setPhone={ () => props.setPhone()} setEmail={ () => props.setEmail()} />
                </div>

            </div>

        </div>
    </>
  )
}

export default Splash