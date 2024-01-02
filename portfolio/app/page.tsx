'use client'
import Navbar from './components/Navbar'
import Image from 'next/image'
import Card from './components/Card'
import Modal from './components/Modal'
import Button from './components/Button'
import Notification from './components/Notification'
import { AiFillLinkedin, AiFillGithub, AiFillPhone, AiFillMail } from 'react-icons/ai'
import { DiReact, DiJava, DiJsBadge, DiCss3, DiHtml5, DiPython } from "react-icons/di";
import { SiCsharp, SiCplusplus, SiC, SiArduino, SiOpencv, SiNvidia } from "react-icons/si";
import headshotSquare from '../public/images/headshotSquare.png'
import rifle from '../public/images/firing.gif'
import robot from '../public/images/robot.png'
import drone from '../public/images/droneCrop.jpg'
import synth from '../public/images/midiFront.jpg'
import paperTrader from '../public/images/paperTrader.png'
import heicTool from '../public/images/HEIC-Conversion-Tool-Graphic.png'
import testBg from '../public/images/test.png'
import { useState, useEffect } from 'react'
import TimelineVertical from './components/TimelineVertical'

export default function Home() {
  // Dark Mode - Uses user preference first. User an opt. to switch at any point
  const [dark, setDark] = useState<boolean>(false)

  // Set Modal States
  const [phone, setPhone] = useState<boolean>(false)
  const [email, setEmail] = useState<boolean>(false)

  // Progress Bar States
  const [phonePercent, setPhonePercent] = useState<number>(100)
  const [emailPercent, setEmailPercent] = useState<number>(100)

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

  // Timer for Phone Progress Bar
  useEffect(() => {
    if(phone){
      const interval = setInterval(() => {
        setPhonePercent((prev) => prev - 0.25)
      }, 10)
      return () => {
        setPhonePercent(100)
        clearInterval(interval)
      }
    }
  }, [phone])

  // Reset Phone Notification When Timer Finishes
  useEffect(() => {
    if(phonePercent <= 0){
      setPhone(false)
    }
  },[phonePercent])

    // Timer for Email Progress Bar
    useEffect(() => {
      if(email){
        const interval = setInterval(() => {
          setEmailPercent((prev) => prev - 0.25)
        }, 10)
        return () => {
          setEmailPercent(100)
          clearInterval(interval)
        }
      }
    }, [email])
  
    // Reset Email Notification When Timer Finishes
    useEffect(() => {
      if(emailPercent <= 0){
        setEmail(false)
      }
    },[emailPercent])

  return (
    <div className={(dark ? "dark" : "")}>
      <main className={"bg-white text-gray dark:bg-gray dark:text-white"}>
        <section className="min-h-screen px-10">
          <Navbar darkModeToggle = { () => setDark(!dark) } />

          <div className='text-center'>
            {/* Gradient Text: text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-r from-analagous1 to-primary */}
            <h2 className='text-transparent font-bold text-4xl bg-clip-text bg-gradient-to-br from-analagous1 to-primary'>Mitchell Conrad</h2>
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
            <AiFillPhone className='cursor-pointer' onClick={()=> {
                setPhone(true)
                navigator.clipboard.writeText('4845029014') 
              }
            }/>
            <AiFillMail className='cursor-pointer' onClick={()=> {
                setEmail(true)
                navigator.clipboard.writeText('mconrad4@ycp.edu')
              }
            }/>
          </div>

          <div className='flex justify-center'>
            <div className='bg-gradient-to-br from-analagous1 to-primary rounded-full w-72 h-72'>
              <Image src={headshotSquare} alt='Headshot of Mitchell Conrad' className='relative rounded-full p-1'/>
            </div>
          </div>
        </section>

        <section className='py-10 px-10 min-h-screen'>
          {/* <div className='flex flex-wrap lg:flex-nowrap'>
            <div>
              <h3 className='text-xl'>Experience</h3>
              <p className='leading-8 py-5 lg:w-2/5 md:w-2/3'>
                During my time at York College of Pennsylvania, I completed three internships for two companies and gained over a year of work experience. During these internships, I contributed to a variety of projects and learned many valuable skills.
              </p>
            </div>
            <TimelineVertical/>
          </div> */}
            <h3 className='text-xl'>Experience</h3>
            <p className='leading-8 py-5 lg:w-2/5 md:w-2/3'>
              During my time at York College of Pennsylvania, I completed three internships for two companies and gained over a year of work experience. During these internships, I contributed to a variety of projects and learned many valuable skills.
            </p>
            <TimelineVertical/>
        </section>

        {/* // add icons of the skills i used in each project and internship to the cards */}
        <section className='text-center pt-10 pb-20 bg-gradient-to-br'>
          <h3 className='text-xl'>Skills</h3>          
          <div className='flex justify-center gap-x-20 flex-col md:flex-row'>
            <div className='pt-5'>
              <p className='pt-2'>Web Development</p>
              <div className='text-4xl flex justify-center gap-x-5 pt-2'>
                <DiHtml5 />
                <DiCss3 />
                <DiReact />
                <DiJsBadge />
              </div>
            </div>

            <div className='pt-5'>
              <p className='pt-2'>General-Purpose Languages</p>
              <div className='text-4xl flex justify-center gap-x-5 pt-2'>
                <SiC />
                <SiCplusplus />
                <SiCsharp />
                <DiJava />
                <DiPython />
              </div>
            </div>

            <div className='pt-5'>
              <p className='pt-2'>Technologies</p>
              <div className='text-4xl flex justify-center gap-x-5 pt-2'>
                <SiArduino />
                <SiOpencv />
                <SiNvidia />
              </div>
            </div>
          </div>

          {/* <p>Industrial</p> */}

          {/* ignition, factorytalk, studio 5, 500, 5k */}
          
        </section>

        <section className='px-10'>
          <h3 className='text-xl text-center pt-10'>Gallery</h3>
          <div className='flex flex-row flex-wrap justify-center'>
            <Card src={rifle} alt='Rifle for VR Games' title='Immersive Recoil for VR'>
              <p>Simulates realistic recoil when firing weapons in VR games. The recoil is generated using a pneumatic piston, which can fire rapidly at various intensities to simulate a variety of firearms.</p>
            </Card>
            <Card src={robot} alt='Robot' title='Optical Wireless Communications'>
              <p>Developed a computer vision aided OWC system for autonomous mobile robots.</p>
            </Card>
            <Card src={drone} alt='Drone' title='Drone'>
              <p>Created a drone using an Arduino based flight controller.</p>
            </Card>
            <Card src={synth} alt='MIDI Synthesizer' title='Stepper Motor MIDI Synth'>
              <p>Processes live MIDI signals and creates music using the vibrations of stepper motors.</p>
            </Card>
            <Card src={paperTrader} alt='Screenshot of Website' title='PaperTrader'>
              <p>PaperTrader gives users access to real stock market data and charts in order to make informed buy and sell decisions with play money.</p>
            </Card>  
            <Card src={heicTool} alt='Screenshot of HEIC Conversion Tool Software' title='HEIC Conversion Tool'>
              <p>Allows users to convert entire folders of HEIC (iPhone) photos to JPG or PNG formats.</p>
            </Card>            
          </div>
        </section>  

        <section className='text-center py-10 bg-gradient-to-br from-analagous1 to-primary text-white dark:from-gray dark:to-gray'>
          <h3 className='text-xl'>Reach Out!</h3>  
          <div className='flex justify-center gap-5 text-4xl py-5'>
            <a href='https://www.linkedin.com/in/mitch-conrad/' target='_blank' rel='noreferrer'>
              <AiFillLinkedin />
            </a>
            <a href='https://github.com/Mitchell-Conrad-20' target='_blank' rel='noreferrer'>
              <AiFillGithub />
            </a>
            <AiFillPhone className='cursor-pointer' onClick={()=> {
                setPhone(true)
                navigator.clipboard.writeText('4845029014') 
              }
            }/>
            <AiFillMail className='cursor-pointer' onClick={()=> {
                setEmail(true)
                navigator.clipboard.writeText('mconrad4@ycp.edu')
              }
            }/>
          </div>    
        </section>

        {/* Notification Popups */}

        { phone && 
          <Notification title="Phone Number Copied" open={phone} percent={phonePercent} handleClose={() => setPhone(false)}>
            <a href='tel:484-502-9014'>
              <p className='text-sm'>Open in App</p>
            </a>
          </Notification>
        }

        { email && 
          <Notification title="Email Copied" open={email} percent={emailPercent} handleClose={() => setEmail(false)}>
            <a href='mailto:mconrad4@ycp.edu'>
              <p className='text-sm'>Open in App</p>
            </a>
          </Notification>
        }

      </main>
    </div>
  )
}