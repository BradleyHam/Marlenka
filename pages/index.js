import React from 'react'
import Stripe from 'stripe'
import { HeroBanner, ValuePropositions, Introduction, BestSellers, Testimonials, CertificationStamps, SignUp, Wholesale, Contact, Footer } from '../components'


const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner />
      <ValuePropositions />
      <Introduction />
      <Testimonials />
      <CertificationStamps />
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

export const GetServerSideProps = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_TEST);
  const product = await stripe.products.retrieve('prod_OSBsZlviKSJ6FT');

  return{
    props: {
      product
    }
  }
}

export default Home