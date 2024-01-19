import React from 'react'
import CircleLoader from "react-spinners/ClipLoader"

const Loading = () => {
  return (
    <div className='h-screen w-full fixed z-50 overflow-hidden flex flex-col justify-center align-middle bg-gray text-white'>
        <div className='w-fit mx-auto text-xl text-center'>   
            <CircleLoader color='white' speedMultiplier={1.5} loading />
            <p>Loading</p>
        </div>
    </div>
  )
}

export default Loading