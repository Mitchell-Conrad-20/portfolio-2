import React from 'react'
import Card from './Card'
import Reveal from './Reveal'
import rifle from '../../public/images/firing.gif'
import robot from '../../public/images/robot.png'
import drone from '../../public/images/droneCrop.jpg'
import synth from '../../public/images/midiFront.jpg'
import paperTrader from '../../public/images/paperTrader.png'
import heicTool from '../../public/images/HEIC-Conversion-Tool-Graphic.png'

const Gallery = (props: { handleOpenArray:Array<() => void>
 }) => {
  return (
    <>
      <Reveal>
        <h3 className='text-xl text-center'>Projects</h3>
      </Reveal>
      <Reveal delay={0.500}>
        <p className='text-center pt-5 md:w-2/3 lg:w-1/2 mx-auto'>A collection of projects completed for school, hackathons, and personal endevours. Excludes projects from formal work experience.</p>
      </Reveal>
      <div className='flex flex-row flex-wrap justify-center py-10 gap-10 lg:px-24 xl:px-44'>
          <Reveal overflowHidden={false} delay={0.500}>
            <Card onClick={ () => props.handleOpenArray[0]() } src={rifle} alt='Rifle for VR Games' title='Immersive Recoil for VR'>
              <span className='text-complementary border-complementary text-xs border-2 rounded-md p-0.5 mr-0.5'>Python</span>
              <span className='text-analagous1 border-analagous1 text-xs border-2 rounded-md p-0.5 mr-0.5'>Arduino</span>
              <p className='pt-0.5'>Generates realistic recoil when firing weapons in VR. Simulates a variety of firearms using a rapid-firing pneumatic piston.</p>
            </Card>
          </Reveal>
        <Reveal overflowHidden={false} delay={0.500}>
          <Card src={robot} alt='Robot' title='Optical Wireless Comms.'>
            <span className='text-complementary border-complementary text-xs border-2 rounded-md p-0.5 mr-0.5'>Python</span>
            <span className='text-primary border-primary text-xs border-2 rounded-md p-0.5 mr-0.5'>OpenCV</span>
            <p className='pt-0.5'>Developed a computer vision aided OWC system for autonomous mobile robots.</p>
          </Card>
        </Reveal>
        <Reveal overflowHidden={false} delay={0.500}>
          <Card src={drone} alt='Drone' title='Custom Drone'>
            <span className='text-analagous1 border-analagous1 text-xs border-2 rounded-md p-0.5 mr-0.5'>Arduino</span>
            <span className='text-success border-success text-xs border-2 rounded-md p-0.5 mr-0.5'>Electrical Design</span>
            <p className='pt-0.5'>Created a drone using an Arduino based flight controller. Developed a protoboard to control motors with PWM.</p>
          </Card>
        </Reveal>
        <Reveal overflowHidden={false} delay={0.500}>
          <Card src={synth} alt='MIDI Synthesizer' title='Stepper Motor MIDI Synth'>
            <span className='text-analagous1 border-analagous1 text-xs border-2 rounded-md p-0.5 mr-0.5'>Arduino</span>
            <p className='pt-0.5'>Processes live MIDI signals and creates music using the vibrations of stepper motors.</p>
          </Card>
        </Reveal>
        <Reveal overflowHidden={false} delay={0.500}>
          <Card src={paperTrader} alt='Screenshot of Website' title='PaperTrader'>
            <span className='text-triadic2 border-triadic2 text-xs border-2 rounded-md p-0.5 mr-0.5'>ReactJS</span>
            <span className='text-complementary border-complementary text-xs border-2 rounded-md p-0.5 mr-0.5'>Firebase</span>
            <p className='pt-0.5'>Gives users access to real stock market data and charts in order to make informed buy and sell decisions with play money.</p>
          </Card>
        </Reveal>  
        <Reveal overflowHidden={false} delay={0.500}>
          <Card src={heicTool} alt='Screenshot of HEIC Conversion Tool Software' title='HEIC Conversion Tool'>
            <span className='text-complementary border-complementary text-xs border-2 rounded-md p-0.5 mr-0.5'>Python</span>
            <p className='pt-0.5'>Allows users to convert entire folders of HEIC (iPhone) photos to JPG or PNG formats.</p>
          </Card>
        </Reveal>         
      </div>
    </>
  )
}

export default Gallery