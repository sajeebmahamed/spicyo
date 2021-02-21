import React from 'react';
import client from '../../assets/images/client.jpg';
import clientIcon from '../../assets/images/client_icon.png';
import title from '../../assets/images/title.png';

const OurClient = () => (
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
                            There are many variations of passages of Lorem Ipsum available, but the
                            majority have suffered alteration in some form, by injected humour, or
                            randomised words which don’t look even slightly believable. If you are
                            going to use a passage of Lorem Ipsum, you need to be sure there isn’t
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
);

export default OurClient;
