import React from 'react'
import Button from '../button'

function Wholesale() {
  return (
    <div className='py-32 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-0 bg-[#f3dcaa24]'>
        <div className="content flex items-center flex-col xl:flex-row items-start">
            <img className='w-full xl:w-[400px] pb-12 xl:pb-0' src="/Images/Wholesale.jpeg" alt="" />
            <div className='xl:p-32'>
                <h2 className=''>Wholesale</h2>
                <h3>Partnership Opportunities with Marlenka</h3>
                <p className='pt-4'>Join us in spreading the love for Marlenka cakes throughout New Zealand. We are actively seeking partnerships with businesses for wholesale opportunities. By partnering with us, you can enrich your offerings and share the exquisite taste of our time-honoured Armenian cakes. Contact us today to learn more about our competitive pricing and the benefits of becoming a Marlenka reseller.</p>
                <Button text='Register'/>
            </div>
        </div>
    </div>
  )
}

export default Wholesale