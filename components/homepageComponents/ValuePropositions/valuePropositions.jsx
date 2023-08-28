import React from 'react'
import ValueProposition from './valueProposition'
 import { GiCoffeeBeans } from 'react-icons/gi'
 import { BsAward, BsFillHeartFill } from 'react-icons/bs'
 

function ValuePropositions() {
  return (
    <div className='px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col space-y-12 xl:flex-row xl:space-y-0 xl:space-x-6 justify-between md:items-start py-32 bg-[#f3dcaa24]'>
        <ValueProposition  icon={'/Images/coffeeBeansBlue.png'} heading='Ideal with coffee' description="your ideal coffee partner. Its unique blend enhances and balances your brew."/>
        <ValueProposition  icon={'/Images/QualityBlue.png'} heading='QAULITY INGREDIENTS' description="Crafted from pure, natural ingredients, Marlenka offers an unrivalled, authentic taste."/>
        <ValueProposition  icon={'/Images/heartBlue.png'} heading='LOVED WORLDWIDE' description="From New Zealand to global tables, Marlenka has won hearts with its distinct taste and quality."/>
    </div>
  )
}

export default ValuePropositions