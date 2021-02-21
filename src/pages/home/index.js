import React from 'react';
import About from '../../components/about';
import HeroBanner from '../../components/banner/HeroBanner';
import MainFooter from '../../components/footer';
import Navbar from '../../components/nav';

function HomePage() {
    return (
        <div className="wrapper">
            {/* Header  */}

            {/* <!-- end loader --> */}

            <div className="sidebar ">
                <nav id="sidebar">
                    <div id="dismiss">
                        <i className="fa fa-arrow-left" />
                    </div>

                    <ul className="list-unstyled components">
                        <li className="active">
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="recipe.html">Recipe</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="content">
                {/* <!-- header --> */}
                <Navbar />
                {/* <!-- end header --> */}
                {/* <!-- start slider section --> */}
                <HeroBanner />

                <About />

                {/* <!-- footer --> */}
                <MainFooter />
                {/* <!-- end footer --> */}
            </div>
        </div>
    );
}

export default HomePage;
