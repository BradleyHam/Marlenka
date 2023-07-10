import React from 'react'
import BestSeller from './bestseller'
import useFadeInOnScroll from '../../Javascript/useFadeOnScroll'

function BestSellers() {
  useFadeInOnScroll('.fade-in');
  return (
    <div className="pb-32 px-20 fade-in">
        <h2>Best Sellers</h2>
        <h3>Indulge in our top selling Marlenka cakes</h3>
      <div className="flex container mx-auto px-8 pt-10">
          <BestSeller className='mr-8 px-8'name='Honey Cake' imageSide='left' imageSource='./Images/[removal.ai]_tmp-6436733ce50a7.png'/>
          <BestSeller name='Honey Nuggets' imageSide='left' imageSource='./Images/[removal.ai]_tmp-6436742771f0c.png' />
          <BestSeller name='Cacao Honey Cake' imageSide='right' isLast imageSource='./Images/[removal.ai]_tmp-64390b60df560.png'/>
    </div>
  </div>
  )
}

export default BestSellers

