import React from 'react'
import { client } from '../lib/client'
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

export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return {
      props:{
        products,
        bannerData
      }
    }
}

export default Home