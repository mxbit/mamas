# Mama's Treat - Website - Entirely Vibe coded !!

**A pinch of mom's magic**

A modern, responsive website for Mama's Treat - an authentic Indian sweets and snacks business. Built with React and Vite, featuring SEO optimization, structured data, and a beautiful user interface.

## 🌟 About

Mama's Treat is a family legacy business specializing in authentic Indian sweets and snacks. Founded in 2020, the company brings traditional recipes from Mangalore and South India to customers nationwide. All products are FSSAI certified and made with premium ingredients using time-honored preparation methods.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **SEO Optimized**: Comprehensive SEO implementation with meta tags, structured data (JSON-LD), and semantic HTML
- **Image Gallery**: Interactive product image popup with modal view
- **Product Showcase**: Beautiful product cards with detailed information
- **Sample Request**: Contact form for requesting free product samples
- **User Authentication**: Login/Sign Up modal (ready for backend integration)
- **Multi-page Navigation**: Clean routing with React Router
- **Performance Optimized**: Built with Vite for fast development and optimized production builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Routing**: React Router DOM 7.10.1
- **SEO**: React Helmet Async 2.0.5
- **Styling**: CSS3 with CSS Variables
- **Code Quality**: ESLint with React plugins

## 📁 Project Structure

```
website/
├── public/
│   ├── logo.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # Reusable React components
│   │   ├── AuthModal.jsx
│   │   ├── DetailedMenu.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductSection.jsx
│   │   ├── SampleRequestModal.jsx
│   │   └── SEO.jsx
│   ├── pages/          # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   └── Products.jsx
│   ├── utils/          # Utility functions
│   │   └── structuredData.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in the terminal).

### Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📄 Pages

- **Home** (`/`) - Hero section and detailed product menu
- **About** (`/about`) - Company history and story
- **Products** (`/products`) - Product showcase with image popup functionality
- **Contact** (`/contact`) - Contact form and business information

## 🎨 Key Components

### ProductSection
- Displays product cards in a responsive grid
- Click on product images to view in full-screen modal
- Sample request functionality for each product

### DetailedMenu
- Tabbed interface showing product details
- Includes history, origin, prep time, ingredients, preparation, and value proposition

### SEO Component
- Dynamic meta tags for each page
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data (JSON-LD) for search engines

## 🔍 SEO Features

- **Structured Data**: Organization, Product, Breadcrumb, and ItemList schemas
- **Meta Tags**: Comprehensive meta tags for all pages
- **Sitemap**: XML sitemap for search engine crawling
- **Robots.txt**: Properly configured for search engine indexing
- **Semantic HTML**: Proper HTML5 semantic elements throughout

## 📱 Responsive Design

The website is fully responsive with breakpoints optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1440px+)

## 🎯 Features in Detail

### Image Modal Popup
- Click any product card image to view in full-screen
- Smooth animations (fade-in overlay, zoom-in image)
- Close button with hover effects
- ESC key support to close modal
- Click outside image to close
- Prevents background scrolling when open

### Sample Request Form
- Contact form for requesting free product samples
- Form validation
- Success/error messaging
- Ready for Google Sheets integration

## 🌐 Deployment

The website is configured for deployment at `https://mamastreat.co.in`. 

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Environment Variables

Update the following in the codebase:
- Site URL in `src/utils/structuredData.js`
- Site URL in `src/components/SEO.jsx`
- Contact information in `src/utils/structuredData.js`

## 📞 Contact Information

- **Business Name**: Mama's Treat - Indian Snacks and Mitais
- **Address**: Shanti Madom, Eravimangalam, Thrissur, Kerala 680751, India
- **Email**: hello@mamastreat.co.in
- **Website**: https://mamastreat.co.in

## 📝 License

This project is private and proprietary.

## 👥 Contributing

This is a private project. For any suggestions or issues, please contact the development team.

## 🔄 Future Enhancements

- Backend integration for user authentication
- Shopping cart and checkout functionality
- Product search and filtering
- Customer reviews and ratings
- Order tracking system
- Multi-language support (English, Malayalam, Hindi)

---

**Built with ❤️ for Mama's Treat**
