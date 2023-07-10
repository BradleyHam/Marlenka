// BestSeller.js

import React from 'react';
import useFadeInOnScroll from '../../Javascript/useFadeOnScroll';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Button from '../button';

function Bestseller({ name, imageSource, isLast }) {
  useFadeInOnScroll('.fade-in');
  const marginStyle = isLast ? '' : 'mr-24';

  return (
    <div className={`flex flex-col items-start justify-center ${marginStyle} `}>
      <img src={imageSource} alt="" className="fade-in" />
      <div className="flex flex-col fade-in items-start">
        <h5 className="text-2xl font-bold text-left md:text-left">{name}</h5>
        <div className="flex pb-2">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiOutlineStar className="text-yellow-500" />
        </div>
        <span className='opacity-50'>$50</span>
      </div>
      <Button text="ADD TO CART"></Button>
    </div>
  );
}

export default Bestseller;
