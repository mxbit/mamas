import React from 'react';
import './Contact.css';
import cardImage from '../assets/card.jpg';
import SEO from '../components/SEO';
import { localBusinessSchema, breadcrumbSchema } from '../utils/structuredData';

const Contact = () => {
    const structuredData = [
        localBusinessSchema,
        breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Contact Us', url: '/contact' }
        ])
    ];

    return (
        <>
            <SEO 
                title="Contact Us"
                description="Get in touch with Mama's Treat. Located in Thrissur, Kerala. Email: hello@mamastreat.co.in. FSSAI: 21324198000407. We offer catering, Indian snacks, and mini-cafe services."
                keywords="Mama's Treat contact, Thrissur sweets, Kerala snacks, contact Indian sweets, order online, catering services, FSSAI certified, Eravimangalam"
                url="https://mamastreat.co.in/contact"
                structuredData={structuredData}
            />
            <div className="container contact-container">
            <h1 className="contact-header">Contact Us</h1>
            <p className="contact-intro">
                We'd love to hear from you! Reach out to us for orders, queries, or just to say hello.
            </p>
            
            <div className="contact-content">
                {/* Left side - Card Image */}
                <div className="contact-card">
                    <img 
                        src={cardImage} 
                        alt="Mama's Treat business card with contact information - Located in Thrissur, Kerala. FSSAI certified Indian sweets and snacks." 
                        loading="lazy"
                    />
                </div>

                {/* Right side - Address Information */}
                <div className="contact-info">
                    <div>
                        <p style={{ marginBottom: '0.5rem' }}>
                            <strong>Email:</strong> hello@mamastreat.co.in
                        </p>
                        <p>
                            <strong>Phone:</strong> +1 (555) 123-4567
                        </p>
                    </div>
                    
                    <div className="contact-details">
                        <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                        </p>
                        <p style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Mama's Treat</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)' }}>
                            Catering, Indian Snacks, Mini-cafe
                        </p>
                        <p>Shanti Madom, Eravimangalam</p>
                        <p>Thrissur 680751</p>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
                            <strong>FSSAI:</strong> 21324198000407
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;
