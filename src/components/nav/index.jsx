import { Link } from '@reach/router';
import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => (
    <header>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <div className="full">
                        <Link to="/" className="logo">
                            <img src={logo} alt="#" />
                        </Link>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="full">
                        <div className="right_header_info">
                            <ul>
                                <li className="dinone">
                                    {/* Contact Us :{' '}
                                                <img
                                                    style={{
                                                        marginRight: '15px',
                                                        marginLeft: '15px',
                                                    }}
                                                    src={phoneIcon}
                                                    alt="#"
                                                /> */}
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="dinone">
                                    {/* <img
                                                    style={{ marginRight: '15px' }}
                                                    src={mailIcon}
                                                    alt="#"
                                                /> */}
                                    <Link to="/about">About</Link>
                                </li>
                                <li className="dinone">
                                    {/* <img
                                                    style={{
                                                        marginRight: '15px',
                                                        height: '21px',
                                                        position: 'relative',
                                                        top: '-2px',
                                                    }}
                                                    src={locationIcon}
                                                    alt="#"
                                                /> */}
                                    <Link to="/recipe"> Recipe </Link>
                                </li>
                                <li className="dinone">
                                    {/* <img
                                                    style={{
                                                        marginRight: '15px',
                                                        height: '21px',
                                                        position: 'relative',
                                                        top: '-2px',
                                                    }}
                                                    src={locationIcon}
                                                    alt="#"
                                                /> */}
                                    <Link to="/blog"> Blog </Link>
                                </li>
                                <li className="dinone">
                                    {/* <img
                                                    style={{
                                                        marginRight: '15px',
                                                        height: '21px',
                                                        position: 'relative',
                                                        top: '-2px',
                                                    }}
                                                    src={locationIcon}
                                                    alt="#"
                                                /> */}
                                    <Link to="/contact"> Contact </Link>
                                </li>
                                <li className="button_user">
                                    <Link to="/loging" className="button active">
                                        Login
                                    </Link>
                                    <Link to="/register" className="button">
                                        Register
                                    </Link>
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
);

export default Navbar;
