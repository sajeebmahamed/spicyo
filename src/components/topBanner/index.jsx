import React from 'react';

function TopBanner({ value }) {
    return (
        <div className="yellow_bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            <h2> {value} </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBanner;
