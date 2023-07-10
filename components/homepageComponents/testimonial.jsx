import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'

function Testimonial({customerName, customerJob, testimonial, face}) {

  return (
    <div className='w-[370px] w-full border rounded-lg relative '>
      <div className='bg-white absolute top-[-15px] left-[14px]'>
         <ImQuotesLeft size='2em' color='#4d4f5c' opacity='.3'/>
      </div>
        <p className='p-8 text-sm h-[150px]'>{testimonial}</p>
        <div className='p-6 linearGradientOne flex justify-between'>
            <div className="textSide">
                <p className='font-sans uppercase font-bold'>{customerName}</p>
                <p>{customerJob}</p>
                <div className="stars flex pt-2">
                   <AiFillStar color='#f3dcaa'/>
                   <AiFillStar color='#f3dcaa'/>
                   <AiFillStar color='#f3dcaa'/>
                   <AiFillStar color='#f3dcaa'/>
                   <AiFillStar color='#f3dcaa'/>
                </div>
            </div>
            <div className="imageSide">
               <img className="h-[70px] w-[70px] object-cover rounded-full" src={face} alt="Random face"/>
            </div>
        </div>
    </div>
  )
}

export default Testimonial

