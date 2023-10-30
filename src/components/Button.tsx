import React from 'react'

interface ButtonProps{
  btnText: string;
}

const Button = ({btnText}: ButtonProps) => {
  return (
    <button>{btnText}</button>
  )
}

export default Button;