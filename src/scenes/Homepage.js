import React from 'react'

import Clients from 'parts/Clients'
import Navbar from 'parts/Navbar'
import Hero from 'parts/Hero'

import Footer from 'parts/Footer'
import Features from 'parts/Features'
import Pricing from 'parts/Pricing'

export default function Homepage() {

    return (
        <div className='body-wrap'>
            <Navbar />
            <main className="site-content">
                <Hero />
                <Clients />
                <Features />
                <Pricing />
            </main>

            <Footer />
        </div>
    )
}
