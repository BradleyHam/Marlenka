import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'


function Button({text}) {
  return (
    <div className='pt-6'>
        <div className="flex items-center">
            <button className='mr-2 text-secondary-color'>{text}</button>
            <HiOutlineArrowNarrowRight/>
        </div>
    </div>
  )
}

export default Button