'use client'
import React, { useEffect, useRef, FC } from 'react'
import { motion, useInView, useAnimationControls } from 'framer-motion'

interface RevealProps {
    children: React.ReactNode,
    rightToLeft?:boolean
  }

const Reveal:FC<RevealProps> = ({ children, rightToLeft=false }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimationControls()

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
        }
    }, [isInView])

  return (
    <div ref={ ref } className='overflow-hidden'>
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
                    delay: 0.25
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
                    delay: 0.25
                }}
            >
                { children }
            </motion.div>
        }
    </div>
  )
}

export default Reveal