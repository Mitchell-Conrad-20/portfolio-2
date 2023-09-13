import Navbar from './components/navbar'
import Image from 'next/image'
import Card from './components/card'
import { AiFillLinkedin, AiFillGithub, AiFillPhone, AiFillMail } from 'react-icons/ai'
import headshotSquare from '../public/images/headshotSquare.png'

// add icons of the skills i used in each project and internship to the cards

export default function Home() {
  return (
    <main className='px-10'>
      <section className="min-h-screen text-gray">
        <Navbar/>

        <div className='text-center'>
          <h2 className='font-bold text-4xl text-analagous1'>Mitchell Conrad</h2>
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
          <div className='bg-gradient-to-r from-primary to-analagous1 rounded-full w-72 h-72'>
            <Image src={headshotSquare} alt='Headshot of Mitchell Conrad' className='relative rounded-full p-1'/>
          </div>
        </div>
      </section>

      <section>
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
        <h3 className='text-xl'>Portfolio</h3>
      </section>

    </main>
  )
}
