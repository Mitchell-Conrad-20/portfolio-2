import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Notification = (props: { title: string, open: boolean, handleClose: () => void, percent: number, children: React.ReactNode}) => {
    if(!props.open) 
        return(<></>)

    const handleCloseHandler = (e: React.MouseEvent<HTMLElement>) => {
        let t = e.target as HTMLInputElement
        if(t.id == "wrapper"){
            props.handleClose()
        } 
    }

    let num = props.percent + '%'

    return(
        <div id='wrapper'
            className='fixed top-0 left-0 right-0 flex justify-center'
            onClick={handleCloseHandler}>

            {/* Notification Content */}
            <div id='content'
                className='w-72 flex flex-col bg-white dark:bg-lightGray mt-10 p-5 rounded-lg'>
                <div className='flex justify-between'>
                    <p className='text-sm font-semibold'>{ props.title }</p>
                    <AiOutlineClose className='mt-1 text-xl cursor-pointer' onClick={ () => props.handleClose() } />
                </div>
                
                {/* User Content */}
                { props.children }

                {/* Progress Bard */}
                <div className='w-full h-2 mt-2 rounded-md dark:bg-gray'>
                    <div className='h-2 rounded-md dark:bg-analagous1' style={{width: num}}/>
                    {/* className={`'w-[${num}%] h-2 rounded-md dark:bg-analagous1'`}  */}
                </div>
            </div>              
        </div>
    )
}

export default Notification