import '../styles/tailwind.scss'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Layout from '@/components/layout'
import { StateContext } from '@/context/StateContext'




export default function App({ Component, pageProps }) {

  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  ) 
}

