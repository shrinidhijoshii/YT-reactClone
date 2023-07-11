import React from 'react'
import Button from './Button'

const buttonList = ["All", "Featured", "Live","Gaming"];

const ButtonList = () => {
  return (
    <div className='flex'>
    {buttonList.map((item,index) => {
      return(<Button key={index} name={item} />)
    })}
    </div>
  );
}

export default ButtonList