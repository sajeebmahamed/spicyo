import React from 'react';
import burgerSlide from '../../assets/images/burger_slide.png';

const HeroBanner = () => (
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
                                                    It is a long established fact that a reader will
                                                    be distracted by the readable content of a page
                                                    when looking at its layout.
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
                                                    It is a long established fact that a reader will
                                                    be distracted by the readable content of a page
                                                    when looking at its layout.
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
);

export default HeroBanner;
