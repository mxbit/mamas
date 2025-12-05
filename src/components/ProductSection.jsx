import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './ProductSection.css';
import SampleRequestModal from './SampleRequestModal';
import { getProductSchema } from '../utils/structuredData';
import mamasProduct1 from '../assets/mamas_product_1.png';
import mamasProduct2 from '../assets/mamas_product_2.jpg';
import mamasProduct3 from '../assets/mamas_product_3.png';
import mamasProduct4 from '../assets/mamas_product_4.jpg';

const products = [
    {
        id: 1,
        name: 'Mellow Mysore Pak',
        price: '₹ 120.00',
        image: mamasProduct1,
        description: 'Traditional Mysore Pak made with premium ghee and gram flour. Rich, melt-in-mouth texture with authentic South Indian flavors.',
        category: 'Indian Sweets'
    },
    {
        id: 2,
        name: 'Crunchy Banana Chips',
        price: '₹ 150.00',
        image: mamasProduct2,
        description: 'Crispy banana chips made from fresh Kerala bananas. Perfectly seasoned and fried to golden perfection.',
        category: 'Indian Snacks'
    },
    {
        id: 3,
        name: 'Heavenly Champakali',
        price: '₹ 100.00',
        image: mamasProduct3,
        description: 'Delicate sweet dumplings in sugar syrup. A traditional South Indian sweet with a unique texture and flavor.',
        category: 'Indian Sweets'
    },
    {
        id: 4,
        name: 'Traditional Bhujia Sev',
        price: '₹ 110.00',
        image: mamasProduct4,
        description: 'Crispy, savory sev made from gram flour. A popular Indian snack perfect for tea time or as a side dish.',
        category: 'Indian Snacks'
    }
];

const ProductSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSampleRequest = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleImageClick = (product) => {
        setSelectedImage(product.image);
        setIsImageModalOpen(true);
    };

    const handleCloseImageModal = () => {
        setIsImageModalOpen(false);
        setSelectedImage(null);
    };

    // Handle ESC key to close image modal
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isImageModalOpen) {
                handleCloseImageModal();
            }
        };

        if (isImageModalOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isImageModalOpen]);

    // Generate structured data for all products
    const productsStructuredData = products.map(product => getProductSchema({
        ...product,
        image: product.image
    }));

    // Generate structured data for products list
    const productsListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products.map((product, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": getProductSchema(product)
        }))
    };

    return (
        <section className="products" id="products">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(productsListSchema)}
                </script>
            </Helmet>
            <div className="container">
                <h2 className="section-title text-center">Our Best Sellers</h2>
                <p className="section-subtitle text-center">Handpicked favorites just for you</p>

                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image" onClick={() => handleImageClick(product)}>
                                <img 
                                    src={product.image} 
                                    alt={`${product.name} - Premium quality ${product.category.toLowerCase()} from Mama's Treat`}
                                    loading="lazy"
                                />
                            </div>
                            <div className="product-info">
                                <h3 className="product-name">{product.name}</h3>
                                <p className="product-price">{product.price}</p>
                                <button 
                                    className="btn btn-primary product-btn"
                                    onClick={() => handleSampleRequest(product)}
                                >
                                    Ask for a free sample
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <SampleRequestModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                productName={selectedProduct?.name || ''}
            />
            {isImageModalOpen && (
                <div className="image-modal-overlay" onClick={handleCloseImageModal}>
                    <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="image-modal-close" onClick={handleCloseImageModal}>&times;</button>
                        <img 
                            src={selectedImage} 
                            alt="Product image"
                            className="image-modal-img"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProductSection;
