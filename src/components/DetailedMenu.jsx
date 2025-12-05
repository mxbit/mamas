import React, { useState } from 'react';
import './DetailedMenu.css';
import mamasMenu1 from '../assets/mamas_menu_1.jpg';
import mamasMenu2 from '../assets/mamas_menu_2.jpg';
import mamasMenu3 from '../assets/mamas_menu_3.png';
import mamasMenu4 from '../assets/mamas_menu_4.png';
import mamasMenu5 from '../assets/mamas_menu_5.png';
import mamasMenu6 from '../assets/mamas_menu_6.png';

const sweetsData = [
    {
        id: 1,
        name: "Gulab Jamun",
        tagline: "The Crown Jewel of Indian Desserts",
        image: mamasMenu6,
        history: "Gulab Jamun traces its origins to medieval India, though some historians believe it was inspired by Persian and Turkish desserts. The name combines 'Gulab' (rose water) and 'Jamun' (a deep purple fruit). This beloved sweet became an integral part of Indian celebrations and festivals, symbolizing joy and prosperity. It's said that the Mughal emperors were particularly fond of this delicacy, which helped popularize it across the Indian subcontinent.",
        origin: "North India",
        prepTime: "2-3 hours",
        ingredients: [
            "Khoya (reduced milk solids) - the foundation of authentic Gulab Jamun",
            "All-purpose flour and semolina for binding",
            "Milk powder for richness and texture",
            "Cardamom powder for aromatic essence",
            "Sugar syrup infused with rose water and saffron",
            "Ghee (clarified butter) for deep frying",
        ],
        preparation: [
            "Prepare the dough by kneading khoya with flour, milk powder, and a pinch of baking soda until smooth and crack-free",
            "Rest the dough for 30 minutes to allow the ingredients to integrate properly",
            "Shape into perfect spheres - this requires skill as any cracks will cause them to break during frying",
            "Prepare sugar syrup with rose water, saffron strands, and cardamom, keeping it warm",
            "Deep fry the balls in ghee at low-medium temperature, continuously rolling them for even golden-brown color",
            "Immediately immerse the hot Gulab Jamuns in warm sugar syrup and let them soak for at least 2 hours",
        ],
        ourValue: "At Mama's Treat, we use premium quality khoya prepared fresh daily in our kitchen. Our master halwais have perfected the art of achieving the ideal consistency - soft, spongy texture that melts in your mouth. We use pure rose water from Kannauj and premium saffron from Kashmir. Each Gulab Jamun is hand-rolled to ensure perfect spherical shape and uniform texture. Our traditional copper vessels ensure even heat distribution, resulting in the perfect golden-brown color.",
    },
    {
        id: 2,
        name: "Kaju Katli",
        tagline: "The Diamond of Indian Sweets",
        image: mamasMenu1,
        history: "Kaju Katli, also known as Kaju Barfi, is believed to have originated in the royal kitchens of Rajasthan. This premium sweet was traditionally served to royalty and wealthy merchants. The name 'Katli' means 'slice' in Hindi, referring to its characteristic diamond shape. Silver leaf (vark) decoration became associated with this sweet as a symbol of luxury and celebration. Today, it's the most gifted sweet during Diwali and other festive occasions.",
        origin: "Rajasthan",
        prepTime: "1-2 hours",
        ingredients: [
            "Premium cashew nuts - we use W180 grade cashews for the finest texture",
            "Pure cane sugar for the perfect sweetness level",
            "Ghee (clarified butter) for richness and shine",
            "Edible silver leaf (vark) for the traditional finishing touch",
            "Cardamom powder for subtle fragrance",
            "A few drops of rose water for enhanced aroma",
        ],
        preparation: [
            "Grind cashews into an ultra-fine powder - the finer the powder, the smoother the final product",
            "Prepare sugar syrup to precise one-string consistency - this is crucial for the right texture",
            "Add cashew powder to the syrup and cook on low heat while stirring continuously",
            "Add ghee and cardamom, cooking until the mixture forms a non-sticky dough",
            "Roll out the mixture while still warm to 1/4 inch thickness using a greased surface",
            "Cut into diamond shapes while slightly warm, then apply silver leaf with delicate precision",
        ],
        ourValue: "We source our cashews directly from Kerala plantations, ensuring only W180 grade nuts make it to our kitchen. Our time-tested recipe achieves the perfect balance - not too sweet, with just the right firmness that melts smoothly. We apply genuine silver leaf by hand using traditional methods passed down through three generations. The thickness is carefully controlled to ensure each piece has the signature smooth, velvety texture that Kaju Katli is famous for.",
    },
    {
        id: 3,
        name: "Rasmalai",
        tagline: "Bengali Delicacy in Creamy Nectar",
        image: mamasMenu2,
        history: "Rasmalai was created in the 1930s by K.C. Das in Kolkata, Bengal - the same confectioner who invented Rasgulla. The word 'Ras' means juice and 'Malai' means cream. This sweet was designed to offer a richer, creamier alternative to Rasgulla. It quickly became synonymous with Bengali cuisine and celebration. The recipe spread across India and to Bengali communities worldwide, becoming a symbol of Bengali culinary excellence.",
        origin: "West Bengal",
        prepTime: "3-4 hours",
        ingredients: [
            "Fresh paneer (cottage cheese) made from full-cream milk",
            "Malai (clotted cream) for the rich, creamy base",
            "Full-fat milk reduced to thick, sweet consistency",
            "Sugar for both the cheese patties and the milk",
            "Cardamom powder and saffron strands for flavoring",
            "Chopped pistachios and almonds for garnish",
        ],
        preparation: [
            "Prepare fresh paneer by curdling milk with lemon juice, then strain and knead until smooth",
            "Shape the paneer into small, flat discs - the traditional oval shape",
            "Cook the patties in sugar syrup until they double in size and become spongy",
            "Prepare rabri by slowly reducing milk with sugar, cardamom, and saffron until thick and creamy",
            "Gently squeeze excess syrup from the cooked patties without breaking them",
            "Immerse the patties in chilled rabri and garnish with nuts and saffron strands",
        ],
        ourValue: "Our Rasmalai uses milk from local dairies, delivered fresh every morning. The paneer is prepared in small batches to ensure optimum freshness and texture. We reduce the milk for rabri in traditional brass vessels over slow fire for 3-4 hours, which gives it the authentic golden color and rich flavor. Our master chef has perfected the kneading technique to create perfectly spongy patties that absorb the rabri while maintaining their delicate structure. We use Kashmiri saffron and Iranian pistachios for the finest aroma and taste.",
    },
];

const snacksData = [
    {
        id: 4,
        name: "Samosa",
        tagline: "The Iconic Indian Street Food",
        image: mamasMenu3,
        history: "The Samosa's journey to India began in the 13th-14th century, brought by traders from Central Asia and the Middle East. Originally called 'Sambosa,' it was mentioned in the court chronicles of the Delhi Sultanate. The triangular pastry was initially a royal snack served in the courts before becoming a beloved street food. Different regions of India adapted the recipe, creating variations like the Punjabi aloo samosa and the Bengali shinghara. Today, it's India's most iconic snack, enjoyed across all social strata.",
        origin: "Central Asia, adapted in North India",
        prepTime: "2 hours",
        ingredients: [
            "Refined flour (maida) and ghee for the crispy outer shell",
            "Boiled and mashed potatoes as the main filling",
            "Green peas for texture and sweetness",
            "Fresh ginger, green chilies, and coriander for zing",
            "Spices: cumin seeds, coriander powder, garam masala, amchur (dried mango powder)",
            "Oil for deep frying to achieve the perfect golden crispiness",
        ],
        preparation: [
            "Prepare the dough with flour, ghee, and water, kneading until smooth and elastic. Rest for 30 minutes",
            "Cook the filling: temper cumin seeds, add ginger-chili paste, then potatoes, peas, and spices",
            "Roll dough into thin circles, cut in half to form semi-circles",
            "Shape each semi-circle into a cone, fill with potato mixture, and seal the edges with water",
            "Heat oil to the right temperature (medium heat) - this is crucial for crispy, non-oily samosas",
            "Fry on medium heat, turning occasionally until golden brown and crispy",
        ],
        ourValue: "At Mama's Treat, we maintain the traditional triangular shape with exactly 14-16 layers in the pastry, achieved through our unique folding technique. We use organic potatoes from Himachal Pradesh and source our spices from the finest vendors in Old Delhi's spice market. Our filling strikes the perfect balance of flavors - neither too spicy nor too mild. Each samosa is hand-folded by experienced artisans who have been with us for decades. We fry them in small batches to ensure each one is served at its crispiest best.",
    },
    {
        id: 5,
        name: "Chakli",
        tagline: "The Spiral of Festive Joy",
        image: mamasMenu5,
        history: "Chakli, also known as Murukku in South India, is an ancient snack with roots in traditional Indian home cooking. The name 'Chakli' comes from the Hindi word 'Chakra' meaning wheel, referring to its distinctive spiral shape. This snack is deeply associated with Diwali celebrations in Maharashtra and Gujarat. Traditionally prepared by women during festivals, the art of making perfect chakli spirals was passed down through generations. Each region has its own variation, but the essence remains the same - a crunchy, savory delight.",
        origin: "Maharashtra/South India",
        prepTime: "1.5 hours",
        ingredients: [
            "Rice flour and gram flour (besan) blend for the perfect crunch",
            "Sesame seeds for nutty flavor and texture",
            "Cumin seeds and ajwain (carom seeds) for aroma",
            "Asafoetida (hing) for digestive properties and flavor",
            "Red chili powder and turmeric for color and spice",
            "Butter or ghee for binding and richness",
        ],
        preparation: [
            "Mix rice flour, gram flour, and all spices with melted butter",
            "Add warm water gradually to form a smooth, pliable dough - consistency is key",
            "Fill the chakli press with dough and test the consistency",
            "Press directly into hot oil in spiral patterns, starting from center moving outward",
            "Fry on medium heat until golden and crispy, flipping once for even cooking",
            "Drain on absorbent paper and cool completely before storing",
        ],
        ourValue: "We use a special blend of rice flour that we mill fresh every week, ensuring maximum crunchiness. Our chakli press is a family heirloom, over 50 years old, that creates the perfect spiral with consistent thickness. The ratio of rice to gram flour has been perfected over three generations to achieve the ideal texture - crispy yet not hard, with a distinctive melt-in-mouth quality. We roast the sesame seeds before adding them to enhance their nutty flavor. Each chakli is made fresh to order during the festive season and can stay crispy for weeks when stored properly.",
    },
    {
        id: 6,
        name: "Kachori",
        tagline: "The Puffed Pocket of Spiced Bliss",
        image: mamasMenu4,
        history: "Kachori originated in Uttar Pradesh and Rajasthan, though both states claim to be its birthplace. Historical records suggest it was created as a travel food for traders and warriors due to its long shelf life. The Jodhpur 'Mawa Kachori' and the Delhi 'Khasta Kachori' are two famous variants. In Rajasthan, kachori vendors have been part of the street food culture for centuries. The art of making the perfect puffed kachori requires years of practice and is considered a specialized skill among Indian chefs.",
        origin: "Rajasthan/Uttar Pradesh",
        prepTime: "2.5 hours",
        ingredients: [
            "All-purpose flour with a touch of semolina for flaky texture",
            "Moong dal (split yellow lentils) or urad dal for the filling",
            "Fennel seeds, black pepper, and dried ginger powder",
            "Coriander powder, red chili powder, and garam masala",
            "Asafoetida and dry mango powder (amchur) for tanginess",
            "Ghee for the dough and oil for deep frying",
        ],
        preparation: [
            "Prepare the dough with flour, ghee, and water, kneading to a firm consistency. Rest for 30 minutes",
            "Soak and coarsely grind moong dal, then roast with spices until aromatic",
            "Roll dough into small circles, place spiced dal filling in the center",
            "Seal edges carefully, ensuring no air pockets, then gently flatten",
            "Fry in medium-hot oil, pressing gently with a slotted spoon to help them puff up",
            "Cook until golden brown and hollow-sounding when tapped",
        ],
        ourValue: "Our kachori recipe comes from my grandmother who learned it in the royal kitchens of Jaipur. We use a secret blend of three types of lentils that creates a unique flavor profile you won't find elsewhere. The dough is prepared with precise measurements and rested for exactly 45 minutes to develop the right elasticity. Our frying technique involves a two-temperature method - starting at a lower heat and increasing it halfway through - which ensures the perfect puff and even golden color. We serve them fresh throughout the day, and the aroma of our kachoris has been a landmark in the neighborhood for over 30 years.",
    },
];

const TabContent = ({ activeTab, data }) => {
    switch (activeTab) {
        case 'history':
            return <p className="tab-text">{data.history}</p>;
        case 'origin':
            return <p className="tab-text"><strong>Origin:</strong> {data.origin}</p>;
        case 'prepTime':
            return <p className="tab-text"><strong>Preparation Time:</strong> {data.prepTime}</p>;
        case 'ingredients':
            return (
                <ul className="tab-list">
                    {data.ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            );
        case 'preparation':
            return (
                <ol className="tab-list">
                    {data.preparation.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            );
        case 'ourValue':
            return <p className="tab-text">{data.ourValue}</p>;
        default:
            return null;
    }
};

const ProductCard = ({ product }) => {
    const [activeTab, setActiveTab] = useState('history');
    const tabs = [
        { id: 'history', label: 'History' },
        { id: 'origin', label: 'Origin' },
        { id: 'prepTime', label: 'Prep Time' },
        { id: 'ingredients', label: 'Ingredients' },
        { id: 'preparation', label: 'Preparation' },
        { id: 'ourValue', label: 'Our Value' },
    ];

    return (
        <div className="detailed-card">
            <div className="card-image-container">
                <img 
                    src={product.image} 
                    alt={`${product.name} - ${product.tagline} from Mama's Treat. Premium quality traditional Indian ${product.id <= 3 ? 'sweet' : 'snack'} made with authentic recipes.`} 
                    className="card-image"
                    loading="lazy"
                />
                <div className="card-overlay">
                    <h3 className="card-title">{product.name}</h3>
                    <p className="card-tagline">{product.tagline}</p>
                </div>
            </div>
            <div className="card-content">
                <div className="tabs-header">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="tab-body">
                    <TabContent activeTab={activeTab} data={product} />
                </div>
            </div>
        </div>
    );
};

const DetailedMenu = () => {
    return (
        <section className="detailed-menu">
            <div className="container">
                <h2 className="section-title text-center">Our Heritage Collection</h2>
                <p className="section-subtitle text-center">Discover the pinch of Mom's magic behind our delicacies</p>

                <div className="category-section">
                    <h3 className="category-title">Signature Sweets</h3>
                    <div className="detailed-grid">
                        {sweetsData.map(sweet => (
                            <ProductCard key={sweet.id} product={sweet} />
                        ))}
                    </div>
                </div>

                <div className="category-section">
                    <h3 className="category-title">Savory Snacks</h3>
                    <div className="detailed-grid">
                        {snacksData.map(snack => (
                            <ProductCard key={snack.id} product={snack} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailedMenu;
