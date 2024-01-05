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
    </>
  )
}

export default Gallery