import React from 'react'
import useFadeInOnScroll from '../../Javascript/useFadeOnScroll';
import EmailForm from '../emailForm';
import Image from 'next/image'
import Button from '../button'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST);

const HeroBanner = ({product}) => {

   
  const handleBuyNow =  async (quantity) => {
    const response = await fetch('/api/create-checkout-session', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // This header specifies that you're sending JSON
        },
        body: JSON.stringify({ quantity }), // Send the quantity data in the body of the request
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server Error:', errorData.error);
        return; // Return early if there was a server error
      }
    const session = await response.json();
    const stripe = await stripePromise;

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error('---',result.error)
    }
};

    return (
        <div className='hero-image-container px-4 sm:px-8 md:px-16 lg:px-32 flex flex-row pt-28 py-20 mt-[98px] '>
            <div className='flex-col flex-1 justify-center z-10'>
            <div className='hero-text z-10'>
                <h2 className=' text-feature-color p-0'>Experience Marlenkas</h2>
                <h1 className='light text-feature-color '>Unforgetable Honey Cakes</h1>
                <p className='text-feature-color mt-6 font-light opacity-90 w-[500px]'> Savor the rich harmony of honey and tradition in every bite. Marlenka&apos;s Honey Cake is not just a dessert, it&apos;s an invitation to indulge in timeless pleasure
               </p>
                <div className="hero-stamps flex opacity-1 mt-10">
                    <button onClick={()=> handleBuyNow(1)} className='bg-feature-color text-primary-color font-bold uppercase px-6 rounded mr-6'>
                        Order Now
                    </button>
                    <img  className='h-14 mx-3' src="/Images/AdditivesFree.png" alt="" />
                    <img  className='h-14 mx-3' src="/Images/AwardWinningBrand.png" alt="" />
                    <img  className='h-14 mx-3' src="/Images/GMOFree.png" alt="" />
                
                 </div>
              </div>
            </div>
       
               <Image 
              src={product.images[0]}
              alt="Honey Cake in Box"
              height={500}
              width={500}
              className='lg:block hidden z-10 mt-[-30px] h-[350px] w-[300px] mr-[70px]'
            />
       
        </div>
     
        
    )
}


export default HeroBanner

