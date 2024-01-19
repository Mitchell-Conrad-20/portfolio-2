import React from 'react'
import RevealRepeat from './RevealRepeat';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const NavArrows = (props: {showUp:boolean, showDown:boolean, handleUpClick: () => void, handleDownClick: () => void } ) => {
  return (
    <div className='text-white dark:text-gray fixed right-0 bottom-0 mb-10 mr-10 transition'>
      {/* Up Arrow */}
        <RevealRepeat show={props.showUp} rightToLeft delay={0}>
          <div className='bg-gray dark:bg-white p-2 rounded-md mb-1 cursor-pointer hover:scale-105 transition ease-in-out'
              onClick={ ()=> props.handleUpClick() }>
              <FaArrowUp />
          </div>
        </RevealRepeat>

        {/* Down Arrow */}
        <RevealRepeat show={props.showDown} rightToLeft delay={0}>
          <div className='bg-gray dark:bg-white p-2 rounded-md cursor-pointer hover:scale-105 transition ease-in-out'
              onClick={ () => props.handleDownClick() }>
              <FaArrowDown />
          </div>
        </RevealRepeat>
    </div>
  )
}

export default NavArrows