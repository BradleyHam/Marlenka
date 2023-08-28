import React from 'react'
import Stripe from 'stripe'
import { HeroBanner, ValuePropositions, Introduction, BestSellers, Testimonials, CertificationStamps, SignUp, Wholesale, Contact, Product, Footer } from '../components'


const Home = ({product}) => {
  console.log(product)
  return (
    <>
      <HeroBanner product={ product}/>
      <ValuePropositions />
      <Introduction />
      <Testimonials />
      <CertificationStamps />
      <Product />
      <SignUp />
      <Wholesale />
      <Contact />
      <Footer />
      {/* <BestSellers /> */}
      {/* <div>
        <h2 className='products-heading'>Best selling products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {
          products?.map(product => 
                <Product key={Product.id} product={product}/>
          )
        }
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/> */}
    </>
  )
}

export const getServerSideProps = async () => {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_TEST);
  const product = await stripe.products.retrieve('prod_OSBsZlviKSJ6FT');

  return{
    props: {
      product
    }
  }
}

export default Home