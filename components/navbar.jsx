import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineUser } from 'react-icons/ai';
import Hamburger from 'react-hamburger-menu';


import { Cart } from '.';
import { useStateContext } from '../context/StateContext';

const NavLink = ({ href, children }) => (
  <Link href={href}>
    <span className="text-sm text-primary-color font-sans hover:text-feature-color transition-colors duration-200 cursor-pointer">
      {children}
    </span>
  </Link>
);


const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const [ mobileNavActive, setMobileNavActive ] = useState(false);

  return (
    <div className="py-4 navbar">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">

            <Link href="/">
              <span className="cursor-pointer">
                <img src="/Images/Logo.png" alt="logo" className="h-15" />
              </span>
            </Link>


          {/* <nav className="hidden lg:flex items-center space-x-8">
            <NavLink href="/">Homepage</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
            <NavLink href="/policies">Policies</NavLink>
          </nav>

          <div className="hidden lg:flex items-center space-x-4 lg:space-x-6">
            <AiOutlineUser className="text-2xl text-primary-color cursor-pointer hover:text-yellow-500 transition-colors duration-200" />
            <button
              type="button"
              className="relative"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping className="text-2xl text-primary-color cursor-pointer hover:text-yellow-500 transition-colors duration-200" />
              <span className="absolute top-0 -mt-1 left-4 bg-primary-color text-feature-color text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalQuantities}
              </span>
            </button>
          </div> */}

          <div className='lg:hidden cursor-pointer'>
            {/* <Hamburger
                isOpen={mobileNavActive}
                menuClicked={() => setMobileNavActive(!mobileNavActive)}
                width={30}
                height={20}
                strokeWidth={2}
                rotate={0}
                color='#7e0e06'
                borderRadius={0}
                animationDuration={0.4} 
              /> */}
          </div>
        </div>
      </div>



      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;