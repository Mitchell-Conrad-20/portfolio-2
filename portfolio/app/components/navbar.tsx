import {BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <nav className='py-10 mb-12 flex justify-between'>
        <h1 className='font-bold text-xl pt-2'>Mitchell Conrad</h1>
        <ul className='flex items-center'>
            <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
            <li><a href="#" className=' text-white bg-gradient-to-r from-primary to-analagous1 px-4 py-2 rounded-md ml-4'>Resume</a></li>
        </ul>
    </nav>
  )
}

export default Navbar