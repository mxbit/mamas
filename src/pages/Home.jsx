import React from 'react';
import Hero from '../components/Hero';
import DetailedMenu from '../components/DetailedMenu';
import SEO from '../components/SEO';
import { organizationSchema, websiteSchema } from '../utils/structuredData';

const Home = () => {
    const structuredData = [
        organizationSchema,
        websiteSchema
    ];

    return (
        <>
            <SEO 
                title="Home"
                description="Authentic Indian sweets and snacks made with traditional recipes. Premium quality Gulab Jamun, Kaju Katli, Rasmalai, Samosa, Chakli, and more. FSSAI certified. Delivered fresh to your doorstep."
                keywords="Indian sweets, Indian snacks, traditional sweets, authentic Indian food, Gulab Jamun, Kaju Katli, Rasmalai, Samosa, Chakli, Kachori, Mysore Pak, Banana Chips, Champakali, Bhujia Sev, Mangalore snacks, South Indian sweets, homemade sweets, ready-to-eat snacks, Thrissur, Kerala, FSSAI certified"
                url="https://mamastreat.co.in/"
                structuredData={structuredData}
            />
            <Hero />
            <DetailedMenu />
        </>
    );
};

export default Home;
