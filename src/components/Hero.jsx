import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import packageImage from '../assets/0002.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Mama's Treat <br />
                        
                        <span className="highlight">
                        Authentic Indian <br />
                        Snacks & Sweets</span>
                    </h1>
                    <p className="hero-subtitle">
                        Delivered to your doorstep. Taste the tradition of homemade goodness.
                    </p>
                    <Link to="/products" className="btn btn-primary hero-btn">Shop Now</Link>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-placeholder">
                        <img 
                            src={packageImage} 
                            alt="Premium Indian sweets and snacks from Mama's Treat - Traditional Gulab Jamun, Kaju Katli, and authentic snacks" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
