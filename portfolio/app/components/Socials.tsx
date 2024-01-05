import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillPhone, AiFillMail } from 'react-icons/ai'

const Socials = (props: {setPhone: () => void, setEmail: () => void}) => {
  return (
    <div className='flex gap-5 text-4xl'>
        <a href='https://www.linkedin.com/in/mitch-conrad/' target='_blank' rel='noreferrer'>
        <AiFillLinkedin />
        </a>
        <a href='https://github.com/Mitchell-Conrad-20' target='_blank' rel='noreferrer'>
        <AiFillGithub />
        </a>
        <AiFillPhone className='cursor-pointer' onClick={()=> {
            props.setPhone()
            navigator.clipboard.writeText('4845029014') 
        }
        }/>
        <AiFillMail className='cursor-pointer' onClick={()=> {
            props.setEmail()
            navigator.clipboard.writeText('mconrad4@ycp.edu')
        }
        }/>
    </div> 
  )
}

export default Socials