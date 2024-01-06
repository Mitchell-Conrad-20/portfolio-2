import React from 'react'
import Card from './Card'
import rifle from '../../public/images/firing.gif'
import robot from '../../public/images/robot.png'
import drone from '../../public/images/droneCrop.jpg'
import synth from '../../public/images/midiFront.jpg'
import paperTrader from '../../public/images/paperTrader.png'
import heicTool from '../../public/images/HEIC-Conversion-Tool-Graphic.png'

const Gallery = () => {
  return (
    <>
      <h3 className='text-xl text-center'>Projects</h3>
      {/* Use two seperate rows to force a maximum of 3 cards per row. Not ideal since it is not dynamic. Can make it dynamic if needed */}
      {/* First Row */} 
      <div className='flex flex-row flex-wrap justify-center py-10 gap-10 lg:px-24 xl:px-44'>
          <Card src={rifle} alt='Rifle for VR Games' title='Immersive Recoil for VR'>
            <p>Generates realistic recoil when firing weapons in VR. Simulates a variety of firearms using a rapid-firing pneumatic piston.</p>
          </Card>
          <Card src={robot} alt='Robot' title='Optical Wireless Comms.'>
            <p>Developed a computer vision aided OWC system for autonomous mobile robots.</p>
          </Card>
          <Card src={drone} alt='Drone' title='Custom Drone'>
          <p>Created a drone using an Arduino based flight controller.</p>
          </Card>
        </div>

        {/* Second Row */}
        <div className='flex flex-row flex-wrap justify-center py-10 gap-10 lg:px-24 xl:px-44'>
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
    </>
  )
}

export default Gallery