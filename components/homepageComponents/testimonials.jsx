import React from 'react'
import Testimonial from './testimonial';

function testimonials() {

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-32 border-b-2 relative">
        <h2 className=''>Testimonials</h2>
        <h3>Sweet Praise from our  Happy Customers</h3>
    <div className=' flex flex-col xl:flex-row justify-between space-y-10 xl:space-y-0 xl:space-x-4  items-center pt-12'>
      <Testimonial face={'/Images/womanOne.jpg'} customerName='Rebeca Lukacs' customerJob='Receptionist at Millbrook' testimonial={`Great cakes, delicious and all natural! I buy them as gifts for clients and they absolutely love them.`}/>
      <Testimonial face={'/Images/womanTwo.jpg'} customerName='Ellie Scott' customerJob='Ceo at Tesla' testimonial={`I LOVE this cake! Right amount of sweetness and moisture, and the chewing textures is amazing! It's possible to find someone never try this cake but it's impossible to find someone just try once!`}/>
      <Testimonial face={'/Images/manOne.jpg'} customerName='Paul M. Caputo' customerJob='Joiner' testimonial={`These are very good and addicting. The balls are mushy on the outside and then some wonderful goodness on the inside. Very good flavours.`}/>
    </div>
    </div>
  )
}

export default testimonials

