import React from 'react'

function ValueProposition({ heading, description, icon: Icon }) {
  return (
    <div className='flex items-start w-[350px] w-full'>
            <img src={Icon} alt="" className='w-12 mr-6' />
            <div>
              <h2 className='font-sans uppercase font-bold'>{heading}</h2>
              <p className='pt-2'>{description}</p>
            </div>
        </div>
  )
}

export default ValueProposition