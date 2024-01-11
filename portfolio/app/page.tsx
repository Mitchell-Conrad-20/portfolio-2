'use client'
import Navbar from './components/Navbar'
import Modal from './components/Modal'
import Button from './components/Button'
import Notification from './components/Notification'
import { useState, useEffect, useRef } from 'react'
import Socials from './components/Socials'
import Gallery from './components/Gallery'
import About from './components/About'
import Splash from './components/Splash'
import Experience from './components/Experience'
import Link from 'next/link'
import FullScreenModal from './components/FullScreenModal'
import Background from './components/Background'
import NavArrows from './components/NavArrows'
import RevealRepeat from './components/RevealRepeat'
import { useInView } from 'framer-motion'
import ReactPlayer from 'react-player/lazy'
import Resume from './components/Resume'
import Loading from './components/Loading'

export default function Home() {
  // Loading State - Finishes Loading When ThreeJS completes first render
  const [loading, setLoading] = useState<boolean>(true) // Loading for 3 JS
  const [loadingDark, setLoadingDark] = useState<boolean>(true) // Loading for Dark Theme

  // Dark Mode - Uses user preference first. User an opt. to switch at any point
  const [dark, setDark] = useState<boolean>(false)

  // Refs for scrolling tp section
  const splashSection = useRef(null)
  const aboutSection = useRef(null)
  const experienceSection = useRef(null)
  const gallerySection = useRef(null)

  // Refs for checking inside the section
  const splashSectionCheck = useRef<HTMLDivElement | null>(null)
  const aboutSectionCheck = useRef(null)
  const experienceSectionCheck = useRef(null)
  const gallerySectionCheck = useRef(null)

  // View intersection observers
  const splashInView = useInView(splashSectionCheck, { once: false })
  const aboutInView = useInView(aboutSectionCheck, { once: false })
  const experienceInView = useInView(experienceSectionCheck, { once: false })
  const galleryInView = useInView(gallerySectionCheck, { once: false })

  // Gallery Item Full Screen Modal States
  const [thunderDonkey, setThunderDonkey] = useState<boolean>(false)
  const [OWC, setOWC] = useState<boolean>(false)
  const [drone, setDrone] = useState<boolean>(false)
  const [stepper, setStepper] = useState<boolean>(false)
  const [paper, setPaper] = useState<boolean>(false)
  const [heic, setHeic] = useState<boolean>(false)

  // Resume Full Screen Modal
  const [resume, setResume] = useState<boolean>(false)

  // Set Notification States
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
      setLoadingDark(false)
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

    const scrollUp = () => {
      // Scroll to Splash Section
      if(aboutInView && !experienceInView){
        splashSection.current && window.scrollTo({ top: (splashSection.current as HTMLElement).offsetTop, behavior: 'smooth' })
      }
      // Scroll to About Section
      else if(experienceInView && !galleryInView){
        aboutSection.current && window.scrollTo({ top: (aboutSection.current as HTMLElement).offsetTop, behavior: 'smooth' })
      }
      // Scroll to Experience Section
      else{
        experienceSection.current && window.scrollTo({ top: (experienceSection.current as HTMLElement).offsetTop, behavior: 'smooth' })
      }
    }

    const scrollDown = () => {
      // Scroll to About Section
      if(splashInView){
        aboutSection.current && window.scrollTo({ top: (aboutSection.current as HTMLElement).offsetTop, behavior: 'smooth' })
      }
      // Scroll to Experience Section
      else if(aboutInView && !splashInView){
        experienceSection.current && window.scrollTo({ top: (experienceSection.current as HTMLElement).offsetTop, behavior: 'smooth' })
      }
      // Scroll to Gallery
      else if(experienceInView && !aboutInView){
        gallerySection.current && window.scrollTo({ top: (gallerySection.current as HTMLElement).offsetTop, behavior: 'smooth' })
      }
    }

  return (
    <div className={dark ? "dark" : ""}>
      <main className={"bg-white text-gray dark:bg-gray dark:text-white overflow-x-hidden"}>

      { loading &&
        <Loading />
      }

        <Background dark={dark} loadingDark={loadingDark} doneLoading={ () => setLoading(false) } />

        {/* Splash Section */}
        <section ref={ splashSection } className="min-h-screen lg:flex lg:flex-col lg:justify-center absolute top-0 left-0 right-0">
          {/* Navbar */}
          <div className='px-10 lg:top-0 lg:absolute lg:w-full'>
            <Navbar darkModeToggle = { () => setDark(!dark) } />
          </div>

          {/* Splash Content */}
          <div ref={ splashSectionCheck } >
            <Splash setPhone={ () => setPhone(true)} setEmail={ () => setEmail(true)} setResume={ () => setResume(true) } />
          </div>

        </section>

        {/* About Section */}
        {/* add icons of the skills i used in each project and internship to the cards */}
        <section ref={ aboutSection } className='py-10 min-h-screen px-10 md:flex md:flex-col md:justify-center'>
          <div ref={ aboutSectionCheck }>
            <About />
          </div>
        </section>

        {/* Experience Section */}
        <section ref={ experienceSection } className='min-h-screen py-10 px-10 bg-gray text-white dark:bg-[rgba(255,255,255,0.05)] md:flex md:flex-col md:justify-center'>
          <div ref={ experienceSectionCheck }>
            <Experience/>
          </div>
        </section>

        {/* Gallery Section */}
        <section ref={ gallerySection } className='flex flex-col justify-center align-middle py-10 px-10 min-h-screen'>
          <div ref={ gallerySectionCheck }>
            <Gallery handleOpenArray={ [() => setThunderDonkey(true), () => setOWC(true), () => setDrone(true), () => setStepper(true), () => setPaper(true), () => setHeic(true) ] } />
          </div>
        </section>  

        {/* Footer */}
        <section className='text-center py-10 text-white bg-gray dark:bg-[rgba(255,255,255,0.05)]'>
          <h3 className='text-xl'>Reach Out!</h3>  
          <div className='flex justify-center py-5'>
            <Socials setPhone={ () => setPhone(true)} setEmail={ () => setEmail(true)} />
            {/* <a href="/resume" target='_blank' rel='noreferrer' className='text-md text-white font-semibold border-2 border-white hover:bg-white transition ease-in-out hover:text-gray dark:hover:text-lightGray px-2 pt-1 rounded-md ml-4'>Resume</a> */}
            <p onClick={ () => setResume(true) } className='cursor-pointer text-md text-white font-semibold border-2 border-white hover:bg-white transition ease-in-out hover:text-gray dark:hover:text-lightGray px-2 pt-1 rounded-md ml-4'>Resume</p>
          </div>
        </section>

        {/* Scroll Controls */}
        <NavArrows showUp={ !splashInView } showDown={ !galleryInView } handleUpClick={ () => scrollUp() } handleDownClick={ () => scrollDown() } />

        {/* Full Screen Modals */}
        {/* Thunder Donkey */}
        <FullScreenModal title='' open={ thunderDonkey } handleClose={ () => setThunderDonkey(false) }>
          <div className='flex flex-col justify-center align-middle w-full h-full'>
            <div className='flex justify-center gap-10'>
              <div className='md:w-3/4 lg:w-2/3'>
                <h3 className='text-xl font-semibold'>Immersive Recoil for VR</h3>
                <p className='text-sm font-semibold'>November 2023</p>
                <p className='py-5'>Two classmates and I attended to YCP Hacks, an anual Hackathon at York College of Pennsylvania, where we set out to invent a way to improve user experience in Virtual Reality.</p>
                <p className='pb-5'> Using an ESP32 to control a pneumatic piston, we created a recoil feedback system that is strong enough and fast enough to mimic a wide range of firearms. Additionally, computer vision scripts were developed for detecting shots in games.</p>
                <p>The project won Best of Show, Best VR Hack, and Best Hardware Hack. The final device we created is fun to use in games and we believe that it could serve as a great training tool.</p>
                <br />
                <div className='hidden md:block'>
                  <ReactPlayer url='https://www.youtube.com/watch?v=sO-APzdsIDQ' controls width={620} height={349} />
                </div>
                <div className='block md:hidden'>
                  <ReactPlayer url='https://www.youtube.com/watch?v=sO-APzdsIDQ' controls width={300} height={169} />
                </div>
                <br />
                <a className='text-md text-gray dark:text-white font-semibold border-2 border-gray dark:border-white hover:bg-gray dark:hover:bg-white hover:text-white dark:hover:text-gray transition ease-in-out px-2 py-2 rounded-md'
                  href='https://github.com/Mitchell-Conrad-20/ThunderDonkey' 
                  target='_blank' 
                  rel='noreferrer'>GitHub</a>
              </div>
            </div>
          </div>
        </FullScreenModal>
        
        {/* OWC */}
        <FullScreenModal title='' open={ OWC } handleClose={ () => setOWC(false) }>
          <div className='flex flex-col justify-center align-middle w-full h-full'>
            <div className='flex justify-center gap-10'>
              <div className='md:w-3/4 lg:w-2/3'>
                <h3 className='text-xl font-semibold'>Optical Wireless Communications</h3>
                <p className='text-sm font-semibold'>May - Aug 2023</p>
                <p className='py-5'>The Optical Wireless Communications project is a capstone project at York College of Pennsylvania. The project has been in developement through three graduating classes.The goal of the project is to develop a reliable wireless communications system using directional infrared transceivers. The previous team developed discovery and maintenance protocols which establish and maintain TCP sockets between robots.</p>
                <p className='pb-5'>My team and I sought to improve the system by using cameras and object detection to locate other robots. We developed a multithreaded pipeline that uses OpenCV to merge many video streams into a panoramic feed. Then, the resulting stream is sent to a custom object detection model for real-time object recognition. When a robot is identified, a TCP socket can be created and data can be transmitted between the robots.</p>
                <p>My team and I will continue to work on the project throughout the Spring semester in 2024 where we hope to continue improving the system.</p>
                <br />
                <a className='text-md text-gray dark:text-white font-semibold border-2 border-gray dark:border-white hover:bg-gray dark:hover:bg-white hover:text-white dark:hover:text-gray transition ease-in-out px-2 py-2 rounded-md'
                  href='https://github.com/bhageneder/OpticalCapstoneComputerVision2023' 
                  target='_blank' 
                  rel='noreferrer'>GitHub</a>
              </div>
            </div>
          </div>
        </FullScreenModal>

        {/* Drone */}
        <FullScreenModal title='' open={ drone } handleClose={ () => setDrone(false) }>
          <div className='flex flex-col justify-center align-middle w-full h-full'>
            <div className='flex justify-center gap-10'>
              <div className='md:w-3/4 lg:w-2/3'>
                <h3 className='text-xl font-semibold'>Custom Drone</h3>
                <p className='text-sm font-semibold'>November 2022</p>
                {/* <p className='py-5'></p>
                <p className='pb-5'></p>
                <p></p> */}
              </div>
            </div>
          </div>
        </FullScreenModal>
        
        {/* Stepper Motor MIDI Synth */}
        <FullScreenModal title='' open={ stepper } handleClose={ () => setStepper(false) }>
          <div className='flex flex-col justify-center align-middle w-full h-full'>
            <div className='flex justify-center gap-10'>
              <div className='md:w-3/4 lg:w-2/3'>
                <h3 className='text-xl font-semibold'>Stepper Motor MIDI Synth</h3>
                <p className='text-sm font-semibold'>November 2021</p>
                {/* <p className='py-5'></p>
                <p className='pb-5'></p>
                <p></p> */}
              </div>
            </div>
          </div>
        </FullScreenModal>

        {/* PaperTrader */}
        <FullScreenModal title='' open={ paper } handleClose={ () => setPaper(false) }>
          <div className='flex flex-col justify-center align-middle w-full h-full'>
            <div className='flex justify-center gap-10'>
              <div className='md:w-3/4 lg:w-2/3'>
                <h3 className='text-xl font-semibold'>PaperTrader</h3>
                <p className='text-sm font-semibold'>Jan - May 2022</p>
                {/* <p className='py-5'></p>
                <p className='pb-5'></p>
                <p></p> */}
              </div>
            </div>
          </div>
        </FullScreenModal>

        {/* HEIC Conversion Tool */}
        <FullScreenModal title='' open={ heic } handleClose={ () => setHeic(false) }>
          <div className='flex flex-col justify-center align-middle w-full h-full'>
            <div className='flex justify-center gap-10'>
              <div className='md:w-3/4 lg:w-2/3'>
                <h3 className='text-xl font-semibold'>HEIC Conversion Tool</h3>
                <p className='text-sm font-semibold'>December 2023</p>
                {/* <p className='py-5'></p>
                <p className='pb-5'></p>
                <p></p> */}
              </div>
            </div>
          </div>
        </FullScreenModal>

        {/* Resume Modal */}
        <FullScreenModal title='' open={ resume } handleClose={ () => setResume(false) }>
          <div className='flex flex-col align-middle w-full h-full'>
            <div className='flex gap-x-10 justify-evenly pb-10'>
              <div>
                <h3 className='text-xl font-semibold'>Resume</h3>
                <p className='text-sm font-semibold py-2'>Updated Jan 2024</p>
              </div>
              <p className='pt-4'>
                <a className='text-md text-gray dark:text-white font-semibold border-2 border-gray dark:border-white hover:bg-gray dark:hover:bg-white hover:text-white dark:hover:text-gray transition ease-in-out px-2 py-2 rounded-md'
                  href='/resume/ResumeMitchellConradOctober2023.pdf'
                  target='_blank'
                  rel='noreferrer '>Print</a>
              </p>
            </div>
            <Resume />
          </div>       
        </FullScreenModal>

        {/* Phone Notification Popup */}
        <Notification title="Phone Number Copied" open={phone} percent={phonePercent} handleClose={() => setPhone(false)}>
          <a href='tel:484-502-9014'>
            <p className='text-sm'>Open in App</p>
          </a>
        </Notification>

        {/* Email Notification Popup */} 
        <Notification title="Email Copied" open={email} percent={emailPercent} handleClose={() => setEmail(false)}>
          <a href='mailto:mconrad4@ycp.edu'>
            <p className='text-sm'>Open in App</p>
          </a>
        </Notification>

      </main>
    </div>
  )
}