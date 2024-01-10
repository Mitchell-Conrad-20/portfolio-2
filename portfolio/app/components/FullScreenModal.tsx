import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { AiOutlineClose } from 'react-icons/ai'

const FullScreenModal = (props: { title: string, open: boolean, handleClose: () => void, children: React.ReactNode}) => {
    const ref = useRef(null)
    const [openOrAnimating, setOpenOrAnimating] = useState<boolean>(false)
    const mainControls = useAnimationControls()

    useEffect(() => {
        if(openOrAnimating){
            ref.current && disableBodyScroll(ref.current)
        }
        else{
            clearAllBodyScrollLocks()
        }
    }, [openOrAnimating])

    useEffect(() => {
        if (props.open){
            setOpenOrAnimating(true)
        }
        else{
            mainControls.stop()
            mainControls.start("hidden").then(() => {
                setOpenOrAnimating(false)
            })
        }
    }, [props.open])

    useEffect(() => {
        if (openOrAnimating){
            setOpenOrAnimating(true)
            mainControls.start("visible")
        }
    }, [openOrAnimating])

    return(
        <>

        { openOrAnimating &&
        <div ref={ ref }>
        {/* Dark Background */}
        <motion.div className='fixed inset-0 text-gray dark:text-white'
            variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={ mainControls }
            transition={{
                duration: 0.25,
                delay: 0,
            }}>

            {/* Modal Content */}
            <div className='flex flex-col w-screen h-screen bg-white dark:bg-lightGray px-10 pt-5 overflow-y-auto'>
                <div className='flex justify-between'>
                    <h1 className='text-xl'>{ props.title }</h1>
                    <AiOutlineClose className='mt-1 text-xl cursor-pointer' onClick={ () => props.handleClose() } />
                </div>
                { props.children }
            </div>  

        </motion.div>
        </div>
        }
        </>
    )
}

export default FullScreenModal