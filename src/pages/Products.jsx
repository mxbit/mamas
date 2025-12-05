import React from 'react';
import ProductSection from '../components/ProductSection';
import SEO from '../components/SEO';
import { breadcrumbSchema } from '../utils/structuredData';

const Products = () => {
    const structuredData = [
        breadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' }
        ])
    ];

    return (
        <>
            <SEO 
                title="Products"
                description="Browse our premium collection of Indian sweets and snacks. Mellow Mysore Pak, Crunchy Banana Chips, Heavenly Champakali, Traditional Bhujia Sev, and more. All FSSAI certified and made with authentic recipes."
                keywords="Indian sweets online, Indian snacks online, Mysore Pak, Banana Chips, Champakali, Bhujia Sev, buy Indian sweets, order Indian snacks, premium sweets, traditional snacks, FSSAI certified sweets"
                url="https://mamastreat.co.in/products"
                structuredData={structuredData}
            />
            <div className="page-container" style={{ paddingTop: '2rem' }}>
                <ProductSection />
            </div>
        </>
    );
};

export default Products;
