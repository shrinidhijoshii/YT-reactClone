import React from 'react'
import Button from './Button'
import {Link} from "react-router-dom"

const buttonList = ["All", "Featured", "Live","Gaming"];

const ButtonList = () => {
  return (
    <div className='flex'>
    {buttonList.map((item,index) => {
      return (
        <a key={index}  href="/">
          <Button name={item} />
        </a>
      );
    })}
    </div>
  );
}

export default ButtonList