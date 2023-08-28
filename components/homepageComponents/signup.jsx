import React from 'react'
import {TiTick} from 'react-icons/ti'
import {GiCheckMark} from 'react-icons/gi'
import EmailForm from '../emailForm'

function SignUp() {
  return (
    <div className='py-32 px-4 sm:px-8 md:px-16 lg:px-32 bg-white'>
        <div>
            <h2 className='uppercase'>sign up</h2>
            <h3>Join the Marlenka Family</h3>
        </div>
        <div className='pt-8 flex flex-col lg:flex-row lg:space-x-8'>
            <div className='flex-1'>
                <p className='pb-4'>Don’t miss out on the latest news, exclusive offers, and tasty surprises from Marlenka. Subscribe to our mailing list and be the first to know about our launch in New Zealand, new products, and upcoming events. We promise not to flood your inbox - just the sweet stuff!</p>
                <EmailForm lightBackground/>
            </div>
            <div className='flex-1 xl:pl-20 pb-8 order-first lg:order-last'>
                    <div className='flex items-center'>
                        <div className={`icon p-1 rounded-full bg-[#4d4f5c] inline-block mr-3`}>
                        <GiCheckMark color='white' size='1.5em'/>
                        </div>
                    <div>
                        <h2 className='uppercase font-bold'>first to know</h2>
                        <p>Be the pioneer in savouring new delights</p>
                    </div>
                </div>
                <div className='flex items-center pt-4'>
                        <div className={`icon p-1 rounded-full bg-[#4d4f5c] inline-block mr-3`}>
                            <GiCheckMark color='white' size='1.5em'/>
                        </div>
                    <div>
                        <h2 className='uppercase font-bold'>exclusive discounts</h2>
                        <p className=''>Unlock special savings on your first order</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp