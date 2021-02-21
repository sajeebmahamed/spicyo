import React from 'react';
import MainFooter from '../../components/footer';
import Navbar from '../../components/nav';
import TopBanner from '../../components/topBanner';

function ContactPage() {
    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <TopBanner value="Contact" />
                <MainFooter />
            </div>
        </div>
    );
}

export default ContactPage;
