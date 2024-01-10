import React from 'react'

const Button = (props: { text: string, onClick: () => void }) => {
  return (
    <div className='text-white bg-primary rounded-md cursor-pointer p-1 m-1 flex justify-center'
        onClick={ () => props.onClick() }>
        <p>
            { props.text }
        </p>
    </div>
  )
}

export default Button