import React from 'react';
import About from '../../components/about';
import MainFooter from '../../components/footer';
import Navbar from '../../components/nav';

function AboutPage() {
    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <About />
                <MainFooter />
            </div>
        </div>
    );
}

export default AboutPage;
