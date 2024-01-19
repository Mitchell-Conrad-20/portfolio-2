'use client'
import React, { useEffect, useRef, FC } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

interface RevealProps {
    children: React.ReactNode,
    rightToLeft?:boolean,
    delay?:number,
    overflowHidden?:boolean
}

const Reveal:FC<RevealProps> = ({ children, rightToLeft=false, delay=0.250, overflowHidden=true }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimationControls()

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView])

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

export default Reveal