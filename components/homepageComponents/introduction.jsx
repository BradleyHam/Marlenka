import React from 'react'
import Image from 'next/image'

function Introduction() {

  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 py-32 '>
        {/* <img src="./Images/honeyCakeInBox.jpeg" alt="" className="pb-16 object-contain height=[500px] z-10 pt-6 xl:hidden" /> */}
        <div className="pb-16 z-10 pt-6 lg:hidden">
            <Image 
              src="/Images/MarlenkaBoxBetterQuality.jpg"
              alt="Honey Cake in Box"
              height={500}
              width={500}
              objectFit="contain"
              className='mx-auto'
            />
        </div>

                {/* <Image
                  src="/Images/HoneyCakeInBox.jpeg" // Path of your image
                  alt="Description of the image"  // Alternate text for the image
                  height={500}
                  width={500}
              /> */}
    

        
        <div className='flex flex-col xl:flex-row relative'>
          <div className="left-side flex-1 ">
            <div className="pt-4">
            <h2>about</h2>
          <h3>A Timeless Taste Of Tradition</h3>
            </div>
          </div>
          <div className="right-side flex items-center justify-center flex-1 relative mt-6">
            {/* <img src="./Images/honeyCakeInBox.jpeg" alt="" className="pb-16 object-contain height=[500px] z-10 pt-6 hidden xl:block" /> */}
              <div className=' '> 
              <p className="text-left ">Welcome to the world of Marlenka, where the exquisite flavors of our all-natural honey cakes take you on a delightful journey through time. Founded on a beloved Armenian family recipe dating back to the 18th century, Marlenka has been capturing the hearts and taste buds of dessert lovers for generations.
            <br /><br />
            Our story began with the Baghdasarov family, who preserved and passed down the cherished recipe through the years. In 2003, Gevorg Avetisyan, an Armenian entrepreneur living in the Czech Republic, rediscovered this culinary gem and set out to share its unique taste with the world. Thus, Marlenka was born.
            <br /><br />
            Today, Marlenka is renowned for its luxurious honey cakes made from high-quality, all-natural ingredients, including honey, milk, eggs, and cocoa. Our cakes are free from artificial preservatives and colors, ensuring an authentic and wholesome experience with every bite. Marlenka has gained international recognition and is enjoyed by customers across the globe, from Europe to Asia, and now, in New Zealand.
            </p>
             </div>
          </div>
        </div>
    </div>
  
  )
}

export default Introduction
