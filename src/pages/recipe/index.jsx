import React from 'react';
import MainFooter from '../../components/footer';
import Navbar from '../../components/nav';

function Recipe() {
    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <MainFooter />
            </div>
        </div>
    );
}

export default Recipe;
