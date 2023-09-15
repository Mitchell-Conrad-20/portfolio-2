import Image from "next/image"
import { StaticImageData } from "next/image"

const Card = (props: { src: StaticImageData, alt: string, title: string, children: React.ReactNode}) => {
  return (
    <div className="mx-auto shadow-2xl p-10 rounded-lg my-10 text-center w-72 md:w-96 dark:bg-[rgba(255,255,255,0.05)]">
        <h3 className="text-lg">{ props.title }</h3>
        <Image src={props.src} alt={props.alt} className="py-2"/>
        <div>
            { props.children }
        </div>
    </div>
  )
}

export default Card