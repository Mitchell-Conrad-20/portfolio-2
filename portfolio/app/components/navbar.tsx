'use client'
import {BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar = ( props: { darkModeToggle:()=>void } ) => {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='font-bold text-xl pt-2'>Mitchell Conrad</h1>
        <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={ () => props.darkModeToggle() } className='cursor-pointer text-2xl' /></li>
            <li><a href="#" className=' text-white bg-gradient-to-r from-analagous1 to-primary px-4 py-2 rounded-md ml-4'>Resume</a></li>
        </ul>
    </nav>
  )
}

export default Navbar