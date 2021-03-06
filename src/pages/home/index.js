import React from 'react';
import About from '../../components/about';
import HeroBanner from '../../components/banner/HeroBanner';
import OurBlog from '../../components/blog';
import OurClient from '../../components/client';
import MainFooter from '../../components/footer';
import Navbar from '../../components/nav';

function HomePage() {
    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <HeroBanner />
                <About />
                <OurBlog />
                <OurClient />
                <MainFooter />
            </div>
        </div>
    );
}

export default HomePage;
