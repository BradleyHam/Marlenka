import React from 'react'
import useFadeInOnScroll from '../../Javascript/useFadeOnScroll';
import EmailForm from '../emailForm';



const HeroBanner = () => {
   
    return (
        <div className='hero-image-container px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col justify-center mt-[90px] py-32 '>
            <div className='hero-text z-10'>
                <h2 className=' text-feature-color p-0'>Experience Marlenkas</h2>
                <h1 className='light text-feature-color '>Unforgetable Honey Cakes</h1>
                <p className='text-feature-color mt-6 font-light opacity-90'>Join Our VIP List for <strong className='font-bold'>Exclusive Pre-Launch Offers’ </strong>
and <br className='hidden md:block'/>  Be Among the First to<strong className='font-bold'> Enjoy Marlenka </strong>in<strong className='font-bold'> New Zealand!</strong></p>
                <EmailForm hero/>
                <div className="hero-stamps flex opacity-1 mt-10">
                    <img  className='h-14 mx-3' src="/Images/AdditivesFree.png" alt="" />
                    <img  className='h-14 mx-3' src="/Images/AwardWinningBrand.png" alt="" />
                    <img  className='h-14 mx-3' src="/Images/GMOFree.png" alt="" />
                 </div>
            </div>
        </div>
    )
}


export default HeroBanner

