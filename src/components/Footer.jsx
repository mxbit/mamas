import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <div className="footer-logo-wrapper">
                        <img 
                            src={logo} 
                            alt="Mama's Treat - Authentic Indian Sweets and Snacks Logo" 
                            className="footer-logo-img" 
                        />
                    </div>
                    <p>Authentic Indian sweets and snacks made with a pinch of mom's magic.</p>
                </div>
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p>Mama's Treat</p>
                    <p>Shanti Madom, Eravimangalam</p>
                    <p>Thrissur 680751</p>
                    <p>hello@mamastreat.co.in</p>
                </div>
                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <p>Subscribe for updates and offers.</p>
                    <div className="newsletter-form">
                        <input type="email" placeholder="Enter your email" />
                        <button className="btn btn-primary">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom text-center">
                <p>&copy; 2024 Mama's Sweets. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
