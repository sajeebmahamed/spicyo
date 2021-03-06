import React from 'react';
import About from '../../components/about';
import MainFooter from '../../components/footer';
import Navbar from '../../components/nav';
import TopBanner from '../../components/topBanner';

function AboutPage() {
    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <TopBanner value="About" />
                <About />
                <MainFooter />
            </div>
        </div>
    );
}

export default AboutPage;
