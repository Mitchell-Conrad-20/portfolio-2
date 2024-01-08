'use client'
import React, { useEffect, useRef, FC } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

interface RevealProps {
    children: React.ReactNode,
    show:boolean,
    rightToLeft?:boolean,
    delay?:number,
    overflowHidden?:boolean
  }

const RevealRepeat:FC<RevealProps> = ({ children, show, rightToLeft=false, delay=0.250, overflowHidden=true }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false })
    const mainControls = useAnimationControls()

    useEffect(() => {
        if (show){
            mainControls.start("visible")
        }
        else{
            mainControls.stop()
            mainControls.start("hidden")
        }
    }, [show])

  return (
    <div ref={ ref } className={ overflowHidden ? 'overflow-hidden' : ''}>
        { !rightToLeft &&
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: -75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={ mainControls }
                transition={{
                    duration: 0.5,
                    delay: delay,
                }}
            >
                { children }
            </motion.div>
        }
        { rightToLeft &&
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 }
                }}
                initial="hidden"
                animate={ mainControls }
                transition={{
                    duration: 0.5,
                    delay: delay,
                }}
            >
                { children }
            </motion.div>
        }
    </div>
  )
}

export default RevealRepeat