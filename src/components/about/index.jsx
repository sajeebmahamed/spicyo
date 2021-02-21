import React from 'react';
import aboutImg from '../../assets/images/about-img.jpg';
import blogImg1 from '../../assets/images/blog_img1.png';
import blogImg2 from '../../assets/images/blog_img2.png';
import blogImg3 from '../../assets/images/blog_img3.png';
import client from '../../assets/images/client.jpg';
import clientIcon from '../../assets/images/client_icon.png';
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
                            <span>when looking at its layout. The point of using Lorem</span>
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
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                below for those interested. Sections 1.10.32 and 1.10.33 from &quot;
                                de Finibus Bonorum et Malorum &quot; by Cicero are also reproduced
                                in their exact original form, accompanied by English versions from
                                the{' '}
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
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                below for those interested. Sections 1.10.32 and 1.10.33 from &quot;
                                de Finibus Bonorum et Malorum&quot; by Cicero are also reproduced in
                                their exact original form, accompanied by English versions from the{' '}
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
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                below for those interested. Sections 1.10.32 and 1.10.33 from
                                &quot;de Finibus Bonorum et Malorum &quot; by Cicero are also
                                reproduced in their exact original form, accompanied by English
                                versions from the{' '}
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
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don’t look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum, you
                                need to be sure there isn’t anything embarrassing hidden in the
                                middle of text.
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
);

export default About;
