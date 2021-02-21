import React from 'react';
import MainFooter from '../../components/footer';
import Navbar from '../../components/nav';
import TopBanner from '../../components/topBanner';

function Recipe() {
    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <TopBanner value="Recipe" />
                <MainFooter />
            </div>
        </div>
    );
}

export default Recipe;
