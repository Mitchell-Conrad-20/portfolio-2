import React, { useEffect, useState } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'
import { AiOutlineClose } from 'react-icons/ai'

const Notification = (props: { title: string, open: boolean, handleClose: () => void, percent: number, children: React.ReactNode}) => {
    const [num,setNum] = useState('0%')
    const [openOrAnimating, setOpenOrAnimating] = useState<boolean>(false)

    useEffect(() => {
        if(props.open){
            setNum(props.percent + '%')
        }
        else{
            setNum('0%')
        }
    }, [props.open, props.percent])

    const mainControls = useAnimationControls()
    
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
            <motion.div id='wrapper'
                className={'fixed top-0 left-0 right-0 flex justify-center'}
                variants={{
                    hidden: { opacity: 0, y: -75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={ mainControls }
                transition={{
                    duration: 0.5,
                    delay: 0,
                }}>
                {/* Notification Content */}
                <div id='content'
                    className='w-72 flex flex-col shadow-2xl bg-white dark:bg-lightGray mt-10 p-5 rounded-lg'>
                    <div className='flex justify-between'>
                        <p className='text-sm font-semibold'>{ props.title }</p>
                        <AiOutlineClose className='mt-1 text-xl cursor-pointer' onClick={ () => props.handleClose() } />
                    </div>
            
                    {/* User Content */}
                    { props.children }
                    {/* Progress Bard */}
                    <div className='w-full h-2 mt-2 rounded-md bg-gray'>
                        <div className='h-2 rounded-md bg-gradient-to-r from-analagous1 to-primary' style={{width: num}}/>
                    </div>
                </div>
            </motion.div>}
        </>
    )
}

export default Notification