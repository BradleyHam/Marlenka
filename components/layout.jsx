import React from 'react'
import Head from 'next/head';
import Navbar from './navbar'
import Footer from './footer'

const Layout = ({ children }) => {
    return (
        <div>
            <Head>
                <title> Ecommerce Sotre </title>
            </Head>
            <header className='fixed w-screen top-0 bg-white z-50'>
                <Navbar />
            </header>
            <main className="main-container">
                {children}
            </main>
            {/* <footer>
                <Footer />
            </footer> */}
        </div>
    )
}

export default Layout