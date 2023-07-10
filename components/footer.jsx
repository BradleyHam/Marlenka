import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillPhone} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io';
import EmailForm from './emailForm';

const Footer = () => {
    return (
        <div className="footer-contaier bg-primary-color flex flex-col p-16 px-4 sm:px-8 md:px-16 lg:px-32 text-feature-color">
       
           <h4>Official Distributor for New Zealand</h4>
           <div className='xl:flex justify-between'>
          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 pt-4 '>
            <div className="adress order-first">
                <p className='text-feature-color opacity-60'>
                    Lucrato Trading Limited <br />
                    55 A McBride Street <br />
                    9300 <br />
                    Queenstown <br />
                    New Zealand <br />
                </p>
                <span className='hidden'>© Copyright Lucrato Trading Ltd. 2023.</span>
            </div>
            <div className="contactMethods">
                    <div className="contactMethod flex items-center">
                        <AiFillFacebook />
                        <p className="email pl-2 text-feature-color opacity-60">Marlenka New Zealand</p>
                    </div>
                    <div className="contactMethod flex items-center pt-1">
                        <AiFillInstagram />
                        <p className="email pl-2 text-feature-color opacity-60">MarlenkaNZ</p>
                    </div>
                    <div className="contactMethod flex items-center pt-1">
                        <MdEmail />
                        <p className="email pl-2 text-feature-color opacity-60">Lucratotradingltd@gmail.com</p>
                    </div>
                    <div className="contactMethod flex items-center pt-1">
                        <AiFillPhone />
                        <p className="email pl-2 text-feature-color opacity-60">0226132936</p>
                    </div>
            </div>
            </div>
            <div className="EmailForm flex pt-4 ">
                <div className='w-[100%]'>
                    <p className='text-feature-color font-light opacity-100'>Join Our VIP    List for <strong className=''>Exclusive Pre-Launch Offers’</strong>
                      and <br /> Be Among the First to<strong> Enjoy Marlenka </strong>in<strong> New Zealand!</strong></p>
                <EmailForm />
                 </div>
            </div>
            </div>
            <span className='pt-4'>© Copyright Lucrato Trading Ltd. 2023.</span>
        </div>
    )
}

export default Footer