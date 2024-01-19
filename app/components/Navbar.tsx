'use client'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import Link from 'next/link';

const Navbar = ( props: { darkModeToggle:()=>void } ) => {
  return (
    <nav className='py-10 flex justify-between align-middle'>
        <h1 className='font-bold text-xl'>Mitchell Conrad</h1>
        <ul className='flex items-center'>
            <li><BsFillMoonStarsFill onClick={ () => props.darkModeToggle() } className='cursor-pointer text-2xl' /></li>
        </ul>
    </nav>
  )
}

export default Navbar