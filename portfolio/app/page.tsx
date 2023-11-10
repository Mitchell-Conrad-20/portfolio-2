'use client'
import Navbar from './components/Navbar'
import Image from 'next/image'
import Card from './components/Card'
import Modal from './components/Modal'
import Button from './components/Button'
import { AiFillLinkedin, AiFillGithub, AiFillPhone, AiFillMail, AiOutlineCopy } from 'react-icons/ai'
import headshotSquare from '../public/images/headshotSquare.png'
import rifle from '../public/images/firing.gif'
import drone from '../public/images/droneCrop.jpg'
import synth from '../public/images/midiCombined.png'
import { useState, useEffect } from 'react'

export default function Home() {
  // Dark Mode - Uses user preference first. User an opt. to switch at any point
  const [dark, setDark] = useState<boolean>(false)

  // Set Modal States
  const [phone, setPhone] = useState<boolean>(false)
  const [email, setEmail] = useState<boolean>(false)

  // Retrieve dark mode settings
  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Fetch the state from local storage
      let darkMode = localStorage.getItem("dark") === "true"

      // Update the state
      setDark(darkMode)
    }
  }, [])

  // Store dark mode settings to local storage
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Save the state
      localStorage.setItem("dark", dark ? "true" : "false")
    }
  }, [dark])

  return (
    <div className={(dark ? "dark" : "")}>
      <main className={"px-10 bg-white text-gray dark:bg-gray dark:text-white"}>
        <section className="min-h-screen">
          <Navbar darkModeToggle = { () => setDark(!dark) } />

          <div className='text-center'>
            {/* Gradient Text: text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-r from-analagous1 to-primary */}
            <h2 className='text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-r from-analagous1 to-primary'>Mitchell Conrad</h2>
            <h3 className='text-xl py-2'>Computer Engineer</h3>
            <p className='leading-8 md:w-144 md:mx-auto'>
              Swift learner and highly motivated engineer. Graduating August 2024. Seeking full-time roles in embedded systems, software, and hardware.
            </p>
          </div>

          <div className='flex justify-center gap-5 text-4xl py-5'>
            <a href='https://www.linkedin.com/in/mitch-conrad/' target='_blank' rel='noreferrer'>
              <AiFillLinkedin />
            </a>
            <a href='https://github.com/Mitchell-Conrad-20' target='_blank' rel='noreferrer'>
              <AiFillGithub />
            </a>
            <AiFillPhone className='cursor-pointer' onClick={()=> setPhone(true)}/>
            <AiFillMail className='cursor-pointer' onClick={()=> setEmail(true)}/>
          </div>

          <div className='flex justify-center'>
            <div className='bg-gradient-to-r from-analagous1 to-primary  rounded-full w-72 h-72'>
              <Image src={headshotSquare} alt='Headshot of Mitchell Conrad' className='relative rounded-full p-1'/>
            </div>
          </div>
        </section>

        <section>
          <h3 className='text-xl'>Portfolio</h3>
          {/* // add icons of the skills i used in each project and internship to the cards */}
          <div className='lg:flex gap-10'>
            <Card src={rifle} alt='Rifle for VR Games' title='Immersive Recoil for VR'>
              <p>Description of VR project</p>
            </Card>
            <Card src={drone} alt='test' title='Drone from Scratch'>
              <p>Description of drone project</p>
            </Card>
            <Card src={synth} alt='test' title='Stepper Motor MIDI Synth'>
              <p>Description of midi synth project</p>
            </Card>
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

        { email && 
          <Modal title='Email Me' open={email} handleClose={() => setEmail(false)}>
            <p>mconrad4@ycp.edu</p>
            <Button text='Copy' onClick={ () => {
                navigator.clipboard.writeText('mconrad4@ycp.edu') 
                setEmail(false)
              }
            }>
              <AiOutlineCopy className='text-xl'/>
            </Button>
            <a href='mailto:mconrad4@ycp.edu'>
              <Button text='Open in App' onClick={ () => setEmail(false) }>
              </Button>
            </a>
          </Modal>
        }

        { phone && 
          <Modal title='Call Me' open={phone} handleClose={() => setPhone(false)}>
            <p>484-502-9014</p>
            <Button text='Copy' onClick={ () => { 
                navigator.clipboard.writeText('4845029014') 
                setPhone(false)
              }
            }>
              <AiOutlineCopy className='text-xl'/>
            </Button>
            <a href='tel:484-502-9014'>
              <Button text='Open in App' onClick={ () => setPhone(false) }>
              </Button>
            </a>
          </Modal>
        }

      </main>
    </div>
  )
}
