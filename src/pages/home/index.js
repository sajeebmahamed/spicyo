import React from 'react';
import aboutImg from '../../assets/images/about-img.jpg';
import blogImg1 from '../../assets/images/blog_img1.png';
import blogImg2 from '../../assets/images/blog_img2.png';
import blogImg3 from '../../assets/images/blog_img3.png';
import burgerSlide from '../../assets/images/burger_slide.png';
import client from '../../assets/images/client.jpg';
import clientIcon from '../../assets/images/client_icon.png';
import img from '../../assets/images/img.jpg';
import locationIcon from '../../assets/images/location_icon.png';
import logo from '../../assets/images/logo.png';
import logo1 from '../../assets/images/logo1.jpg';
import mailIcon from '../../assets/images/mail_icon.png';
import phoneIcon from '../../assets/images/phone_icon.png';
import rs1 from '../../assets/images/rs1.png';
import rs2 from '../../assets/images/rs2.png';
import rs3 from '../../assets/images/rs3.png';
import rs4 from '../../assets/images/rs4.png';
import rs5 from '../../assets/images/rs5.png';
import title from '../../assets/images/title.png';

const HomePage = () => (
    <div className="wrapper">
        {/* <!-- end loader --> */}

        <div className="sidebar">
            {/* <!-- Sidebar  --> */}
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
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="full">
                                <a className="logo" href="/">
                                    <img src={logo} alt="#" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="full">
                                <div className="right_header_info">
                                    <ul>
                                        <li className="dinone">
                                            Contact Us :{' '}
                                            <img
                                                style={{ marginRight: '15px', marginLeft: '15px' }}
                                                src={phoneIcon}
                                                alt="#"
                                            />
                                            <a href="/">987-654-3210</a>
                                        </li>
                                        <li className="dinone">
                                            <img
                                                style={{ marginRight: '15px' }}
                                                src={mailIcon}
                                                alt="#"
                                            />
                                            <a href="/">demo@gmail.com</a>
                                        </li>
                                        <li className="dinone">
                                            <img
                                                style={{
                                                    marginRight: '15px',
                                                    height: '21px',
                                                    position: 'relative',
                                                    top: '-2px',
                                                }}
                                                src={locationIcon}
                                                alt="#"
                                            />
                                            <a href="/">104 New york , USA</a>
                                        </li>
                                        <li className="button_user">
                                            <a className="button active" href="/">
                                                Login
                                            </a>
                                            <a className="button" href="/">
                                                Register
                                            </a>
                                        </li>
                                        {/* <li>
                                            <img
                                                style={{ marginRight: '15px' }}
                                                src={searchIcon}
                                                alt="#"
                                            />
                                        </li>
                                        <li>
                                            <button type="button" id="sidebarCollapse">
                                                <img src={menuIcon} alt="#" />
                                            </button>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- end header --> */}
            {/* <!-- start slider section --> */}
            <div className="slider_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="full">
                                <div
                                    id="main_slider"
                                    className="carousel vert slide"
                                    data-ride="carousel"
                                    data-interval="5000"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="slider_cont">
                                                        <h3>
                                                            Discover Restaurants
                                                            <br />
                                                            That deliver near You
                                                        </h3>
                                                        <p>
                                                            It is a long established fact that a
                                                            reader will be distracted by the
                                                            readable content of a page when looking
                                                            at its layout.
                                                        </p>
                                                        <a className="main_bt_border" href="/">
                                                            Order Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-7">
                                                    <div className="slider_image full text_align_center">
                                                        <img
                                                            className="img-responsive"
                                                            src={burgerSlide}
                                                            alt="#"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <div className="slider_cont">
                                                        <h3>
                                                            Discover Restaurants
                                                            <br />
                                                            That deliver near You
                                                        </h3>
                                                        <p>
                                                            It is a long established fact that a
                                                            reader will be distracted by the
                                                            readable content of a page when looking
                                                            at its layout.
                                                        </p>
                                                        <a className="main_bt_border" href="/">
                                                            Order Now
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-7 full text_align_center">
                                                    <div className="slider_image">
                                                        <img
                                                            className="img-responsive"
                                                            src={burgerSlide}
                                                            alt="#"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <a
                                        className="carousel-control-prev"
                                        href="#main_slider"
                                        role="button"
                                        data-slide="prev"
                                    >
                                        <i className="fa fa-angle-up" />
                                    </a>
                                    <a
                                        className="carousel-control-next"
                                        href="#main_slider"
                                        role="button"
                                        data-slide="next"
                                    >
                                        <i className="fa fa-angle-down" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end slider section --> */}

            {/* <!-- section --> */}
            <section className="resip_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ourheading">
                                <h2>Our Recipes</h2>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="owl-carousel owl-theme">
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs1} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>Homemade</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>10
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs2} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>Noodles</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>20
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs3} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>Egg</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>30
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs4} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>Sushi Dizzy</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>40
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs5} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>The Coffee Break</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>50
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs1} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>Homemade</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>10
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs2} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>Noodles</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>20
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs3} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>Egg</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>30
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs4} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>Sushi Dizzy</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>40
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="product_blog_img">
                                                <img src={rs5} alt="#" />
                                            </div>
                                            <div className="product_blog_cont">
                                                <h3>The Coffee Break</h3>
                                                <h4>
                                                    <span className="theme_color">$</span>50
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg_bg">
                {/* <!-- about --> */}
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <i>
                                        <img src={title} alt="#" />
                                    </i>
                                    <h2>About Our Food & Restaurant</h2>
                                    <span>
                                        It is a long established fact that a reader will be
                                        distracted by the readable content of a
                                        <br /> page when looking at its layout. The point of using
                                        Lorem
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                <div className="about_box">
                                    <h3>Best Food</h3>
                                    <p>
                                        Contrary to popular belief, Lorem Ipsum is not simply random
                                        text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old. Richard
                                        McClintock, a Latin professor at Hampden-Sydney College in
                                        Virginia, looked up one of the more obscureContrary to
                                        popular belief, Lorem Ipsum is not simply random text. It
                                        has roots in a piece of classical Latin literature from 45
                                        BC, making it over 2000 years old. Richard{' '}
                                    </p>
                                    <a href="/">
                                        Read More{' '}
                                        <i className="fa fa-long-arrow-right" aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-10 col-sm-12 about_img_boxpdnt">
                                <div className="about_img">
                                    <figure>
                                        <img src={aboutImg} alt="#/" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end about --> */}

                {/* <!-- blog --> */}
                <div className="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <i>
                                        <img src={title} alt="#" />
                                    </i>
                                    <h2>Our Blog</h2>
                                    <span>
                                        when looking at its layout. The point of using Lorem
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom">
                                <div className="blog_box">
                                    <div className="blog_img_box">
                                        <figure>
                                            <img src={blogImg1} alt="#" />
                                            <span>02 FEB 2019</span>
                                        </figure>
                                    </div>
                                    <h3>Spicy Barger</h3>
                                    <p>
                                        The standard chunk of Lorem Ipsum used since the 1500s is
                                        reproduced below for those interested. Sections 1.10.32 and
                                        1.10.33 from &quot; de Finibus Bonorum et Malorum &quot; by
                                        Cicero are also reproduced in their exact original form,
                                        accompanied by English versions from the{' '}
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mar_bottom">
                                <div className="blog_box">
                                    <div className="blog_img_box">
                                        <figure>
                                            <img src={blogImg2} alt="#" />
                                            <span>02 FEB 2019</span>
                                        </figure>
                                    </div>
                                    <h3>Egg & Tosh</h3>
                                    <p>
                                        The standard chunk of Lorem Ipsum used since the 1500s is
                                        reproduced below for those interested. Sections 1.10.32 and
                                        1.10.33 from &quot; de Finibus Bonorum et Malorum&quot; by
                                        Cicero are also reproduced in their exact original form,
                                        accompanied by English versions from the{' '}
                                    </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div className="blog_box">
                                    <div className="blog_img_box">
                                        <figure>
                                            <img src={blogImg3} alt="#" />
                                            <span>02 FEB 2019</span>
                                        </figure>
                                    </div>
                                    <h3>Pizza</h3>
                                    <p>
                                        The standard chunk of Lorem Ipsum used since the 1500s is
                                        reproduced below for those interested. Sections 1.10.32 and
                                        1.10.33 from &quot;de Finibus Bonorum et Malorum &quot; by
                                        Cicero are also reproduced in their exact original form,
                                        accompanied by English versions from the{' '}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end blog --> */}

                {/* <!-- Our Client --> */}
                <div className="Client">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <i>
                                        <img src={title} alt="#" />
                                    </i>
                                    <h2>Our Client</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="Client_box">
                                    <img src={client} alt="#" />
                                    <h3>Roock Due</h3>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some
                                        form, by injected humour, or randomised words which don’t
                                        look even slightly believable. If you are going to use a
                                        passage of Lorem Ipsum, you need to be sure there isn’t
                                        anything embarrassing hidden in the middle of text.
                                    </p>
                                    <i>
                                        <img src={clientIcon} alt="#" />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end Our Client --> */}
            </div>
            {/* <!-- footer --> */}
            <fooetr>
                <div className="footer">
                    <div className="container-fluid">
                        <div className="row">
                            <div className=" col-md-12">
                                <h2>
                                    Request A<strong className="white"> Call Back</strong>
                                </h2>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <form className="main_form">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input
                                                className="form-control"
                                                placeholder="Name"
                                                type="text"
                                                name="Name"
                                            />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input
                                                className="form-control"
                                                placeholder="Email"
                                                type="text"
                                                name="Email"
                                            />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <input
                                                className="form-control"
                                                placeholder="Phone"
                                                type="text"
                                                name="Phone"
                                            />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <textarea
                                                className="textarea"
                                                placeholder="Message"
                                                type="text"
                                                name="Message"
                                            />
                                        </div>
                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                            <button type="button" className="send">
                                                Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="img-box">
                                    <figure>
                                        <img src={img} alt="img" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="footer_logo">
                                    <a href="index.html">
                                        <img src={logo1} alt="logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <ul className="lik">
                                    <li className="active">
                                        {' '}
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="about.html">About</a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="recipe.html">Recipe</a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        {' '}
                                        <a href="contact.html">Contact us</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-12">
                                <div className="new">
                                    <h3>Newsletter</h3>
                                    <form className="newtetter">
                                        <input
                                            className="tetter"
                                            placeholder="Your email"
                                            type="text"
                                            name="Your email"
                                        />
                                        <button type="button" className="submit">
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <div className="container">
                            <p>
                                © 2019 All Rights Reserved. Design by
                                <a href="https://html.design/"> Free Html Templates</a>
                            </p>
                        </div>
                    </div>
                </div>
            </fooetr>
            {/* <!-- end footer --> */}
        </div>
    </div>
);

export default HomePage;
