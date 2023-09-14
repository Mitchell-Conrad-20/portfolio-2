'use client'
import Navbar from './components/navbar'
import Image from 'next/image'
import Card from './components/card'
import { AiFillLinkedin, AiFillGithub, AiFillPhone, AiFillMail } from 'react-icons/ai'
import headshotSquare from '../public/images/headshotSquare.png'
import { useState } from 'react'

export default function Home() {
  // Dark Mode - Uses user preference first. User an opt. to switch at any point
  const [dark, setDark] = useState(false)

  return (
    <div className={dark ? "dark" : ""}>
      <main className={"px-10 bg-white dark:bg-gray"}>
        <section className="min-h-screen text-gray">

          <Navbar darkModeToggle = { () => setDark(!dark) } />

          <div className='text-center'>
            {/* Gradient Text: text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-r from-analagous1 to-primary */}
            <h2 className='text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-r from-analagous1 to-primary dark:text-complementary'>Mitchell Conrad</h2>
            <h3 className='text-xl py-2'>Computer Engineer</h3>
            <p className='leading-8 md:w-144 md:mx-auto'>
              Swift learner and highly motivated engineer. Graduating August 2024. Seeking full-time roles in embedded systems, software, and hardware.
            </p>
          </div>

          <div className='flex justify-center gap-5 text-4xl py-5'>
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillPhone />
            <AiFillMail />
          </div>

          <div className='flex justify-center'>
            <div className='bg-gradient-to-r from-analagous1 to-primary  rounded-full w-72 h-72'>
              <Image src={headshotSquare} alt='Headshot of Mitchell Conrad' className='relative rounded-full p-1'/>
            </div>
          </div>
        </section>

        <section>
          {/* // add icons of the skills i used in each project and internship to the cards */}
          <h3 className='text-xl'>Experience</h3>
          <p className='leading-8'>
            During my time at York College of Pennsylvania, I completed three internships for two companies and gained over a year of work experience. During these internships, I contributed to a variety of projects and learned many valuable skills.
          </p>

          <div className='lg:flex gap-10'>
            <Card src={headshotSquare} alt='Getting Parameters from Drive at a Customer Site' title='Multi-Dimensional Integration'>
              <p>Testing testing testing. Lorem ipsum dolor sit amet. Testing testing testing. Lorem ipsum dolor sit amet. Testing testing testing. Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card src={headshotSquare} alt='test' title='Becton Dickinson'>
              <p>Testing testing testing. Lorem ipsum dolor sit amet. Testing testing testing. Lorem ipsum dolor sit amet. Testing testing testing. Lorem ipsum dolor sit amet.</p>
            </Card>
          </div>

        </section>

        <section>
          <h3 className='text-xl'>Portfolio or Projects???</h3>
          {/* // add icons of the skills i used in each project and internship to the cards */}
        </section>

      </main>
    </div>
  )
}
