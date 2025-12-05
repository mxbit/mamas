// Structured Data for SEO

const siteUrl = 'https://mamastreat.co.in'; // Update with actual domain

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Mama's Treat",
  "alternateName": "Mama's Treat - Indian Snacks and Mitais",
  "url": siteUrl,
  "logo": `${siteUrl}/logo.png`,
  "description": "Authentic Indian sweets and snacks made with traditional recipes. Premium quality Gulab Jamun, Kaju Katli, Rasmalai, Samosa, Chakli, and more. FSSAI certified.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shanti Madom, Eravimangalam",
    "addressLocality": "Thrissur",
    "postalCode": "680751",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "Customer Service",
    "email": "hello@mamastreat.co.in",
    "availableLanguage": ["English", "Malayalam", "Hindi"]
  },
  "sameAs": [
    // Add social media links when available
  ],
  "servesCuisine": "Indian",
  "priceRange": "₹₹",
  "foundingDate": "2020"
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mama's Treat",
  "image": `${siteUrl}/logo.png`,
  "@id": siteUrl,
  "url": siteUrl,
  "telephone": "+1-555-123-4567",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shanti Madom, Eravimangalam",
    "addressLocality": "Thrissur",
    "postalCode": "680751",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    // Add coordinates if available
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  }
};

export const getProductSchema = (product) => {
  // Handle image path - if it's a module import, use a placeholder or extract filename
  let imageUrl = `${siteUrl}/logo.png`;
  if (product.image) {
    if (typeof product.image === 'string' && product.image.startsWith('http')) {
      imageUrl = product.image;
    } else if (typeof product.image === 'string') {
      // Extract filename from path if it's a relative path
      const filename = product.image.split('/').pop();
      imageUrl = `${siteUrl}/src/assets/${filename}`;
    } else {
      // For imported images, use a generic product image path
      // In production, these should be in public folder with known paths
      const productImageMap = {
        'mamas_product_1.png': '/src/assets/mamas_product_1.png',
        'mamas_product_2.jpg': '/src/assets/mamas_product_2.jpg',
        'mamas_product_3.png': '/src/assets/mamas_product_3.png',
        'mamas_product_4.jpg': '/src/assets/mamas_product_4.jpg'
      };
      // Try to infer from product name
      if (product.name.includes('Mysore Pak')) imageUrl = `${siteUrl}/src/assets/mamas_product_1.png`;
      else if (product.name.includes('Banana')) imageUrl = `${siteUrl}/src/assets/mamas_product_2.jpg`;
      else if (product.name.includes('Champakali')) imageUrl = `${siteUrl}/src/assets/mamas_product_3.png`;
      else if (product.name.includes('Bhujia')) imageUrl = `${siteUrl}/src/assets/mamas_product_4.jpg`;
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": imageUrl,
    "description": product.description || `Premium quality ${product.name} from Mama's Treat, made with traditional recipes and authentic ingredients.`,
    "brand": {
      "@type": "Brand",
      "name": "Mama's Treat"
    },
    "offers": {
      "@type": "Offer",
      "url": `${siteUrl}/products`,
      "priceCurrency": "INR",
      "price": product.price ? product.price.replace(/[₹\s,]/g, '') : "",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Mama's Treat"
      }
    },
    "category": product.category || "Food Product"
  };
};

export const breadcrumbSchema = (items) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${siteUrl}${item.url}`
    }))
  };
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Mama's Treat",
  "url": siteUrl,
  "description": "Authentic Indian sweets and snacks made with traditional recipes. Premium quality products delivered fresh to your doorstep.",
  "publisher": {
    "@type": "Organization",
    "name": "Mama's Treat"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteUrl}/products?search={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};
