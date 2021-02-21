import React from 'react';
import OurBlog from '../../components/blog';
import MainFooter from '../../components/footer';
import Navbar from '../../components/nav';
import TopBanner from '../../components/topBanner';

function BlogPage() {
    return (
        <div className="wrapper">
            <div id="content">
                <Navbar />
                <TopBanner value="Blog" />
                <OurBlog />
                <MainFooter />
            </div>
        </div>
    );
}

export default BlogPage;
