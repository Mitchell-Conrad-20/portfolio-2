import Image from "next/image"
import { StaticImageData } from "next/image"

const Card = (props: { src: StaticImageData, alt: string, title: string, children: React.ReactNode}) => {
  return (
    <div className="mx-auto shadow-2xl rounded-lg my-10 text-center w-96 dark:bg-[rgba(255,255,255,0.05)]">
        <Image src={props.src} alt={props.alt} className="rounded-t-lg"/>
        <h3 className="text-lg font-semibold  pt-5 px-10">{ props.title }</h3>
        <div className="px-10 pb-5 pt-1">
            { props.children }
        </div>
    </div>
  )
}

export default Card