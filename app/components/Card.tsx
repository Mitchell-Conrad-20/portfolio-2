import Image from "next/image"
import React, { FC } from "react"
import { StaticImageData } from "next/image"

interface CardProps {
  src: StaticImageData,
  alt: string,
  title: string,
  children: React.ReactNode,
  onClick?: () => void
}

const Card:FC<CardProps> = ({src, alt, title, children, onClick = () => {} }) => {
  return (
    <div onClick={ () => onClick() } className="shadow-2xl rounded-lg w-72 md:h-80 dark:bg-[rgba(255,255,255,0.05)] cursor-pointer transition ease-in-out hover:scale-105">
        <Image src={src} alt={alt} className="rounded-t-lg h-36 object-cover"/>
        <h3 className="font-bold pt-2 px-5">{ title }</h3>
        <div className="px-5 pb-5 pt-0">
            { children }
        </div>
    </div>
  )
}

export default Card