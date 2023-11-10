import React from 'react'

const Button = (props: { text: string, children: React.ReactNode, onClick: () => void }) => {
  return (
    <div className='text-white bg-primary rounded-md ml-4 cursor-pointer p-1 m-1 flex justify-center'
        onClick={ () => props.onClick() }>
        { props.children }
        <p>
            { props.text }
        </p>
    </div>
  )
}

export default Button