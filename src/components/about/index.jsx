import React from 'react';
import aboutImg from '../../assets/images/about-img.jpg';
import title from '../../assets/images/title.png';

const About = () => (
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
                                It is a long established fact that a reader will be distracted by
                                the readable content of a
                                <br /> page when looking at its layout. The point of using Lorem
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="about_box">
                            <h3>Best Food</h3>
                            <p>
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old. Richard McClintock, a Latin professor
                                at Hampden-Sydney College in Virginia, looked up one of the more
                                obscureContrary to popular belief, Lorem Ipsum is not simply random
                                text. It has roots in a piece of classical Latin literature from 45
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
    </div>
);

export default About;
