import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <div className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 footer-about">
                            <h4>ABOUT US</h4>
                            <p>Lily Zhang, Manager of Graduate Student Professional Development at the MIT Media Lab and a writer for</p>
                            <Link to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="/"><i className="fab fa-instagram"></i></Link>
                            <Link to="/"><i className="fab fa-twitter"></i></Link>
                            <Link to="/"><i className="far fa-envelope-open"></i></Link>
                            <Link to="/"><i className="fab fa-pinterest-p"></i></Link>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 footer-service">
                            <h4>Service</h4>
                            <NavLink to="/">Men shoping</NavLink>
                            <NavLink to="/">Women shoping</NavLink>
                            <NavLink to="/">Men Shoes</NavLink>
                            <NavLink to="/">Women Shoes</NavLink>
                            <NavLink to="/">Men T-Shirt</NavLink>
                            <NavLink to="/"> Women T-Shirt</NavLink>
                            <NavLink to="/"> Men pent</NavLink>

                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 footer-service">
                            <h4>important link </h4>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/">About</NavLink>
                            <NavLink to="/">Contact</NavLink>
                            <NavLink to="/">Blog</NavLink>
                            <NavLink to="/">How to order</NavLink>
                            <NavLink to="/"> Shop</NavLink>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-12 footer-service">
                            <h4> Trams & condition page </h4>
                            <NavLink to="/">Trams & condition</NavLink>
                            <NavLink to="/">Privacy policy</NavLink>

                        </div>
                    </div>

                    <div className="copyRight">
                        <p className='py-5'>CopyRight &copy; 2021 RiazHossen professional web developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;