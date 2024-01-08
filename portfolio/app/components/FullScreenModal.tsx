import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const FullScreenModal = (props: { title: string, open: boolean, handleClose: () => void, children: React.ReactNode}) => {
    if(!props.open) 
        return(<></>)

    return(
        // Dark Background
        <div className='fixed inset-0'>

            {/* Modal Content */}
            <div className='flex flex-col w-screen h-screen bg-white dark:bg-lightGray text-center pl-10 pr-14 pt-12'>
                <div className='flex justify-between'>
                    <h1 className='text-xl'>{ props.title }</h1>
                    <AiOutlineClose className='mt-1 text-xl cursor-pointer' onClick={ () => props.handleClose() } />
                </div>
                { props.children }
            </div>  

        </div>
    )
}

export default FullScreenModal