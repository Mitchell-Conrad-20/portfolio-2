import React, { useState, useEffect } from 'react'
import Reveal from './Reveal';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const NavArrows = (props: {showUp:boolean, showDown:boolean, handleUpClick: () => void, handleDownClick: () => void } ) => {
  const [showUpState, setShowUpState] = useState(" hidden ")
  const [showDownState, setShowDownState] = useState(" hidden ")

  useEffect(() => { 
    props.showUp ? setShowUpState(" block ") : setShowUpState(" hidden ")
  }, [props.showUp])

  useEffect(() => { 
    props.showDown ? setShowDownState(" block ") : setShowDownState(" hidden ")
  }, [props.showDown])

  return (
    <div className='text-white dark:text-gray fixed right-0 bottom-0 mb-10 mr-10 transition'>
        {/* {props.showUp && */}
        {/* <Reveal> */}
          <div className={`bg-gray dark:bg-white p-2 rounded-md mb-1 cursor-pointer hover:scale-105 transition ease-in-out ${showUpState}`}
              onClick={ ()=> props.handleUpClick() }>
              <FaArrowUp />
          </div>
        {/* </Reveal> */}
        {/* } */}
        {/* {props.showDown && */}
        <div className={`bg-gray dark:bg-white p-2 rounded-md cursor-pointer hover:scale-105 transition ease-in-out ${showDownState}`}
            onClick={ () => props.handleDownClick() }>
            <FaArrowDown />
        </div>
        {/* } */}
    </div>
  )
}

export default NavArrows