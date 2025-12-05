import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  structuredData
}) => {
  const siteUrl = 'https://mamastreat.co.in'; // Update with actual domain
  const defaultTitle = "Mama's Treat .:. A pinch of mom's magic";
  const defaultDescription = "Authentic Indian sweets and snacks made with traditional recipes. Premium quality Gulab Jamun, Kaju Katli, Rasmalai, Samosa, Chakli, and more. FSSAI certified. Delivered fresh to your doorstep.";
  const defaultKeywords = "Indian sweets, Indian snacks, traditional sweets, authentic Indian food, Gulab Jamun, Kaju Katli, Rasmalai, Samosa, Chakli, Kachori, Mysore Pak, Banana Chips, Champakali, Bhujia Sev, Mangalore snacks, South Indian sweets, homemade sweets, ready-to-eat snacks, Thrissur, Kerala, FSSAI certified";
  const defaultImage = `${siteUrl}/logo.png`;

  const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  const pageImage = image || defaultImage;
  const pageUrl = url || siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Mama's Treat" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content="Mama's Treat" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
