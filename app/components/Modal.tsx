import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = (props: { title: string, open: boolean, handleClose: () => void, children: React.ReactNode}) => {
    if(!props.open) 
        return(<></>)

    const handleCloseHandler = (e: React.MouseEvent<HTMLElement>) => {
        let t = e.target as HTMLInputElement
        if(t.id == "wrapper"){
            props.handleClose()
        } 
    }

    return(
        // Dark Background
        <div id='wrapper'
            className='fixed inset-0 bg-gray bg-opacity-25 backdrop-blur-sm flex justify-center items-center' 
            onClick={handleCloseHandler}>

            {/* Modal Content */}
            <div id='content'
                className='flex flex-col bg-white dark:bg-lightGray text-center p-5 rounded-lg'>
                <div className='flex justify-between'>
                    <h1 className='text-xl'>{ props.title }</h1>
                    <AiOutlineClose className='mt-1 text-xl cursor-pointer' onClick={ () => props.handleClose() } />
                </div>
                { props.children }
            </div>  

        </div>
    )
}

export default Modal