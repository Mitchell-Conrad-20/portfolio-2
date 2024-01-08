import React from 'react'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const NavArrows = (props: {showUp:boolean, showDown:boolean, handleUpClick: () => void, handleDownClick: () => void } ) => {
  return (
    <div className='text-white dark:text-gray fixed right-0 bottom-0 mb-10 mr-10'>
        {props.showUp &&
        <div className='bg-gray dark:bg-white p-2 rounded-md mb-1 cursor-pointer'
            onClick={ ()=> props.handleUpClick() }>
            <FaArrowUp />
        </div>
        }
        {props.showDown &&
        <div className='bg-gray dark:bg-white p-2 rounded-md cursor-pointer'
            onClick={ () => props.handleDownClick() }>
            <FaArrowDown />
        </div>
        }
    </div>
  )
}

export default NavArrows