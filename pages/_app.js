import '../styles/tailwind.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Head from 'next/head';
import Layout from '@/components/layout'
import { StateContext } from '@/context/StateContext'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Head>
          <title>Marlenka</title>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  ) 
}