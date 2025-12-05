import React from 'react';
import SEO from '../components/SEO';
import { organizationSchema, breadcrumbSchema } from '../utils/structuredData';

const About = () => {
    const structuredData = [
        organizationSchema,
        breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '/about' }
        ])
    ];

    return (
        <>
            <SEO 
                title="About Us"
                description="Learn about Mama's Treat - a family legacy of authentic Indian sweets and snacks. Traditional recipes from Mangalore and South India, crafted with love and premium ingredients since 2020."
                keywords="Mama's Treat history, Indian sweets Mangalore, traditional recipes, family business, authentic Indian snacks, South Indian sweets, Perla heritage, Saraswatha community, FSSAI certified"
                url="https://mamastreat.co.in/about"
                structuredData={structuredData}
            />
            <div className="container" style={{ padding: '4rem 1rem', textAlign: 'left' }}>
                <h1 style={{ marginBottom: '2rem', color: 'var(--color-primary)' }}>About Us</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
                
            <p>The story begins decades ago when the ancestors of the family set the foundation for a unique culinary heritage that intertwined the flavors of Mangalore and the Saraswatha community. Over the years, this family perfected their skills in crafting "Satvik" (vegetarian) meals, coconut-rich curries, and the sweet indulgences that have been a signature of South Indian festivals and community events. They became known for their unyielding commitment to preserving the authenticity of their dishes — from the fresh, locally sourced ingredients to the preparation methods passed down through generations.</p>
            <br></br><br></br>
            <p>As with many traditional culinary crafts, their expertise naturally found its place in community celebrations, especially weddings, temples, and cultural functions where food played a pivotal role in uniting people. From the iconic Brahmin feasts to the delicate Udupi-style dosas, idlis, and coconut-based curries, each dish carried the essence of their heritage.</p>
            <br></br><br></br>
<p>In recent years, the family, recognizing the changing dynamics of food culture and the increasing demand for authentic, quality products, decided to venture into the Indian snack and sweets market. This decision was not born out of mere business acumen, but rather from a deep desire to share the rich culinary traditions of Perla with the broader urban world. It was the perfect intersection of preserving tradition while embracing the growing demand for convenience, quality, and authentic regional flavors in cities across the nation.</p>
            <br></br><br></br>
<p>In 2020, the family officially launched their small enterprise, Mama's Treat - Indian Snacks and Mitais. This modern venture continues to honor their long-standing legacy, combining time-honored recipes with new-age production processes to create a line of ready-to-eat snacks, traditional sweets, and savories that can now be enjoyed beyond the borders of Mangalore/Kasargod.<br></br>
<br></br>The focus remains firmly on quality, ensuring that every item, whether it’s a crispy Banana chips or a soft, melt-in-your-mouth Kunda, reflects the same meticulous attention to detail and love that has defined their cooking for years.</p>
            </div>
        </div>
        </>
    );
};

export default About;
