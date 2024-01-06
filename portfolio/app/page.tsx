'use client'
import Navbar from './components/Navbar'
import Image from 'next/image'
import Card from './components/Card'
import Modal from './components/Modal'
import Button from './components/Button'
import Notification from './components/Notification'
import headshotSquare from '../public/images/headshotSquare.png'
import { useState, useEffect } from 'react'
import Timeline from './components/Timeline'
import TimelineVertical from './components/TimelineVertical'
import Socials from './components/Socials'
import Gallery from './components/Gallery'
import About from './components/About'
import Splash from './components/Splash'
import Experience from './components/Experience'

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

        {/* Splash Section */}
        <section className="min-h-screen lg:flex lg:flex-col lg:justify-center">
          {/* Navbar */}
          <div className='px-10 lg:top-0 lg:absolute lg:w-full'>
            <Navbar darkModeToggle = { () => setDark(!dark) } />
          </div>

          {/* Splash Content */}
          <Splash setPhone={ () => setPhone(true)} setEmail={ () => setEmail(true)} />

        </section>

        {/* About Section */}
        {/* // add icons of the skills i used in each project and internship to the cards */}
        <section className='py-10 min-h-screen px-10 md:flex md:flex-col md:justify-center'>
          <About />
        </section>

        {/* Experience Section */}
        <section className='min-h-screen py-10 px-10 bg-gray text-white dark:bg-[rgba(255,255,255,0.05)] md:flex md:flex-col md:justify-center'>
          <Experience />
        </section>

        {/* Gallery Section */}
        <section className='flex flex-col justify-center align-middle py-10 px-10 min-h-screen'>
          <Gallery />
        </section>  

        {/* Footer */}
        <section className='text-center py-10 text-white bg-gray dark:bg-[rgba(255,255,255,0.05)]'>
          <h3 className='text-xl'>Reach Out!</h3>  
          <div className='flex justify-center py-5'>
            <Socials setPhone={ () => setPhone(true)} setEmail={ () => setEmail(true)} />
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