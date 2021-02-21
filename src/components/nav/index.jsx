import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => (
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
                                    {/* Contact Us :{' '}
                                                <img
                                                    style={{
                                                        marginRight: '15px',
                                                        marginLeft: '15px',
                                                    }}
                                                    src={phoneIcon}
                                                    alt="#"
                                                /> */}
                                    <a href="/">Home</a>
                                </li>
                                <li className="dinone">
                                    {/* <img
                                                    style={{ marginRight: '15px' }}
                                                    src={mailIcon}
                                                    alt="#"
                                                /> */}
                                    <a href="/">About</a>
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
                                    <a href="/"> Recipe </a>
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
                                    <a href="/"> Blog </a>
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
                                    <a href="/"> Contact </a>
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
);

export default Navbar;
