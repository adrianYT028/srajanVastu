import React, { useState, useEffect } from 'react';
import { useCart, useCartDispatch } from '../context/CartContext';
import './ProductsPage.css';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

const ProductsPage = () => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const products = {
    'Bracelets & Malas': [
      {
        id: 'bm1',
        name: 'Jap Mala - Clear Quartz Round Cut',
        benefits: 'Enhances spiritual practice and meditation focus.',
        howToUse: 'Use for japa meditation and mantra chanting.',
        priceRange: 'Contact for Best Offer',
        image: '/images/jap-mala-clear-quartz.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm2',
        name: 'Tulsi Mala',
        benefits: 'Brings peace, used in chanting mantras.',
        howToUse: 'Wear on neck or use for japa (chanting).',
        priceRange: 'Contact for Best Offer',
        image: '/images/tulsi-mala.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm3',
        name: 'Tiger Eye Bracelet',
        benefits: 'Protects from negativity, boosts confidence.',
        howToUse: 'Wear on right hand wrist after purification.',
        priceRange: 'Contact for Best Offer',
        image: '/images/tiger-eye-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm4',
        name: 'Black Tourmaline Bracelet',
        benefits: 'Strong protection against evil eye & negativity.',
        howToUse: 'Wear daily on left wrist.',
        priceRange: 'Contact for Best Offer',
        image: '/images/black-tourmaline-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm5',
        name: 'Pyrite Dark Brown Bracelet',
        benefits: 'Attracts wealth and abundance, enhances willpower.',
        howToUse: 'Wear on dominant hand for maximum benefit.',
        priceRange: 'Contact for Best Offer',
        image: '/images/pyrite-dark-brown-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm6',
        name: 'Pink Rose Quartz Bracelet',
        benefits: 'Promotes love, compassion, and emotional healing.',
        howToUse: 'Wear close to heart or on left wrist.',
        priceRange: 'Contact for Best Offer',
        image: '/images/pink-rose-quartz-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm7',
        name: 'Green Jade Natural Bracelet',
        benefits: 'Brings good luck, prosperity, and harmony.',
        howToUse: 'Wear on left hand for receiving positive energy.',
        priceRange: 'Contact for Best Offer',
        image: '/images/green-jade-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm8',
        name: 'Amethyst Bracelet',
        benefits: 'Promotes spiritual growth and mental clarity.',
        howToUse: 'Wear during meditation or daily for stress relief.',
        priceRange: 'Contact for Best Offer',
        image: '/images/amethyst-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm9',
        name: 'Seven Chakra (With Pyrite) Bracelet',
        benefits: 'Balances all seven chakras and energy centers.',
        howToUse: 'Wear daily to maintain chakra alignment.',
        priceRange: 'Contact for Best Offer',
        image: '/images/seven-chakra-pyrite-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm10',
        name: 'Money Magnet Bracelet (Round)',
        benefits: 'Attracts financial prosperity and business success.',
        howToUse: 'Wear on dominant hand while working or doing business.',
        priceRange: 'Contact for Best Offer',
        image: '/images/money-magnet-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm11',
        name: 'Aqua Marine Bracelet',
        benefits: 'Enhances communication and brings tranquility.',
        howToUse: 'Wear when speaking or during stressful situations.',
         priceRange: 'Contact for Best Offer',
        image: '/images/aqua-marine-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm12',
        name: 'Green Aventurine Bracelet',
        benefits: 'Brings luck, opportunity, and prosperity.',
        howToUse: 'Wear on left wrist to attract good fortune.',
         priceRange: 'Contact for Best Offer',
        image: '/images/green-aventurine-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm13',
        name: 'Clear Quartz Bracelet',
        benefits: 'Amplifies energy and promotes clarity of mind.',
        howToUse: 'Wear during meditation or important decisions.',
         priceRange: 'Contact for Best Offer',
        image: '/images/clear-quartz-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm14',
        name: 'Selenite Evil Eye Bracelet',
        benefits: 'Provides protection from negative energies and evil eye.',
        howToUse: 'Wear daily for continuous protection.',
         priceRange: 'Contact for Best Offer',
        image: '/images/selenite-evil-eye-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm15',
        name: 'Rudraksha + Crystal Bracelet',
        benefits: 'Combines spiritual power of Rudraksha with crystal healing.',
        howToUse: 'Wear during spiritual practices and daily life.',
         priceRange: 'Contact for Best Offer',
        image: '/images/rudraksha-crystal-bracelet.jpg',
        category: 'Bracelets & Malas'
      },
      {
        id: 'bm16',
        name: 'Yellow Citrine Bracelet',
        benefits: 'Enhances personal power and attracts abundance.',
        howToUse: 'Wear on solar plexus level for maximum effect.',
         priceRange: 'Contact for Best Offer',
        image: '/images/yellow-citrine-bracelet.jpg',
        category: 'Bracelets & Malas'
      }
    ],
    'Rudraksha': [
      {
        id: 'r1',
        name: '5 Mukhi Rudraksha',
        benefits: 'Brings peace, reduces stress, improves health. Suitable for everyone.',
        howToUse: 'Wear around neck or wrist after energizing. Keep clean and avoid meat/alcohol.',
         priceRange: 'Contact for Best Offer',
        image: '/images/5-mukhi-rudraksha.jpg',
        category: 'Rudraksha'
      },
      {
        id: 'r2',
        name: '7 Mukhi Rudraksha',
        benefits: 'Associated with Goddess Lakshmi, attracts wealth and prosperity.',
        howToUse: 'Wear as pendant/mala after purification rituals.',
         priceRange: 'Contact for Best Offer',
        image: '/images/7-mukhi-rudraksha.jpg',
        category: 'Rudraksha'
      },
      {
        id: 'r3',
        name: '9 Mukhi Rudraksha',
        benefits: 'Provides energy, courage, and protection from negativity.',
        howToUse: 'Wear on Monday after chanting specific mantra.',
         priceRange: 'Contact for Best Offer',
        image: '/images/9-mukhi-rudraksha.jpg',
        category: 'Rudraksha'
      },
      {
        id: 'r4',
        name: '4 Mukhi Rudraksha',
        benefits: 'Enhances knowledge, creativity, and speech power.',
        howToUse: 'Wear around neck after proper energizing ritual.',
         priceRange: 'Contact for Best Offer',
        image: '/images/4-mukhi-rudraksha.jpg',
        category: 'Rudraksha'
      },
      {
        id: 'r5',
        name: '6 Mukhi Rudraksha',
        benefits: 'Brings focus, willpower, and emotional stability.',
        howToUse: 'Wear as pendant or keep in meditation space.',
         priceRange: 'Contact for Best Offer',
        image: '/images/6-mukhi-rudraksha.jpg',
        category: 'Rudraksha'
      },
      {
        id: 'r6',
        name: '12 Mukhi Rudraksha',
        benefits: 'Provides leadership qualities and administrative power.',
        howToUse: 'Wear after proper puja and mantra chanting.',
         priceRange: 'Contact for Best Offer',
        image: '/images/12-mukhi-rudraksha.jpg',
        category: 'Rudraksha'
      },
      {
        id: 'r7',
        name: 'Rudraksha Malas (54 beads)',
        benefits: 'Complete spiritual practice set for meditation and chanting.',
        howToUse: 'Use for japa meditation and daily spiritual practice.',
         priceRange: 'Contact for Best Offer',
        image: '/images/rudraksha-mala-54.jpg',
        category: 'Rudraksha'
      },
      {
        id: 'r8',
        name: 'Rudraksha Malas (108 beads)',
        benefits: 'Traditional full mala for complete spiritual practice.',
        howToUse: 'Use for extended meditation and mantra recitation.',
         priceRange: 'Contact for Best Offer',
        image: '/images/rudraksha-mala-108.jpg',
        category: 'Rudraksha'
      }
    ],
    'Crystals & Semi-precious': [
      {
        id: 'c1',
        name: 'Amethyst Crystal',
        benefits: 'Relieves stress, balances mood, promotes healing.',
        howToUse: 'Keep in bedroom/office desk or wear as bracelet.',
         priceRange: 'Contact for Best Offer',
        image: '/images/amethyst-crystal.jpg',
        category: 'Crystals & Semi-precious'
      },
      {
        id: 'c2',
        name: 'Citrine Crystal',
        benefits: 'Known as "Merchant\'s Stone", attracts wealth & business success.',
        howToUse: 'Place in cash box, office desk, or carry in wallet.',
         priceRange: 'Contact for Best Offer',
        image: '/images/citrine-crystal.jpg',
        category: 'Crystals & Semi-precious'
      },
      {
        id: 'c3',
        name: 'Rose Quartz',
        benefits: 'Symbol of love & harmony, enhances relationships.',
        howToUse: 'Keep in bedroom or gift to partner for bonding.',
         priceRange: 'Contact for Best Offer',
        image: '/images/rose-quartz.jpg',
        category: 'Crystals & Semi-precious'
      },
      {
        id: 'c4',
        name: '7-Chakra Tree',
        benefits: 'Balances all seven chakras, promotes spiritual growth.',
        howToUse: 'Place in meditation room or living area.',
         priceRange: 'Contact for Best Offer',
        image: '/images/7-chakra-tree.jpg',
        category: 'Crystals & Semi-precious'
      },
      {
        id: 'c5',
        name: 'Pyrite Tree',
        benefits: 'Attracts wealth, abundance, and positive energy.',
        howToUse: 'Keep in office or business place for prosperity.',
         priceRange: 'Contact for Best Offer',
        image: '/images/pyrite-tree.jpg',
        category: 'Crystals & Semi-precious'
      },
      {
        id: 'c6',
        name: 'Black Tourmaline',
        benefits: 'Provides protection from negative energies and EMF.',
        howToUse: 'Keep near electronic devices or wear as pendant.',
         priceRange: 'Contact for Best Offer',
        image: '/images/black-tourmaline.jpg',
        category: 'Crystals & Semi-precious'
      },
      {
        id: 'c7',
        name: 'Green Aventurine',
        benefits: 'Brings luck, growth, and new opportunities.',
        howToUse: 'Carry in pocket or place in workspace.',
         priceRange: 'Contact for Best Offer',
        image: '/images/green-aventurine.jpg',
        category: 'Crystals & Semi-precious'
      },
      {
        id: 'c8',
        name: 'Crystal Jewelry Set',
        benefits: 'Various healing stones for daily wear and protection.',
        howToUse: 'Wear as earrings, necklace, or bracelet.',
         priceRange: 'Contact for Best Offer',
        image: '/images/crystal-jewelry-set.jpg',
        category: 'Crystals & Semi-precious'
      }
    ],
    'Yantras & Idols': [
      {
        id: 'y1',
        name: 'Shri Yantra (Brass)',
        benefits: 'Brings prosperity, wealth, and success in business & life.',
        howToUse: 'Place in North-East, energize with daily puja.',
         priceRange: 'Contact for Best Offer',
        image: '/images/shri-yantra-brass.jpg',
        category: 'Yantras & Idols'
      },
      {
        id: 'y2',
        name: 'Kuber Yantra',
        benefits: 'Attracts wealth and financial stability.',
        howToUse: 'Place in cash box or office locker.',
         priceRange: 'Contact for Best Offer',
        image: '/images/kuber-yantra.jpg',
        category: 'Yantras & Idols'
      },
      {
        id: 'y3',
        name: 'Ganesh Idol (Brass)',
        benefits: 'Removes obstacles, brings success & wisdom.',
        howToUse: 'Place near entrance or pooja room.',
         priceRange: 'Contact for Best Offer',
        image: '/images/ganesh-idol-brass.jpg',
        category: 'Yantras & Idols'
      },
      {
        id: 'y4',
        name: 'Copper Pyramid',
        benefits: 'Balances Vastu defects, harmonizes energy flow.',
        howToUse: 'Install in affected corners of home/office.',
         priceRange: 'Contact for Best Offer',
        image: '/images/copper-pyramid.jpg',
        category: 'Yantras & Idols'
      },
      {
        id: 'y5',
        name: 'Brass Kalash',
        benefits: 'Used in puja rituals, attracts positivity.',
        howToUse: 'Fill with water & keep near mandir.',
         priceRange: 'Contact for Best Offer',
        image: '/images/brass-kalash.jpg',
        category: 'Yantras & Idols'
      },
      {
        id: 'y6',
        name: 'Navgrah Chowki',
        benefits: 'Balances planetary energies, brings harmony.',
        howToUse: 'Keep in pooja room after energizing.',
         priceRange: 'Contact for Best Offer',
        image: '/images/navgrah-chowki.jpg',
        category: 'Yantras & Idols'
      },
      {
        id: 'y7',
        name: 'Brass Swastik Set',
        benefits: 'Brings good fortune and positive energy.',
        howToUse: 'Place at entrance or in pooja room.',
         priceRange: 'Contact for Best Offer',
        image: '/images/brass-swastik-set.jpg',
        category: 'Yantras & Idols'
      },
      {
        id: 'y8',
        name: 'Sacred Idol Collection',
        benefits: 'Complete set of divine idols for worship.',
        howToUse: 'Arrange in pooja room according to Vastu.',
         priceRange: 'Contact for Best Offer',
        image: '/images/sacred-idol-collection.jpg',
        category: 'Yantras & Idols'
      }
    ]
  };

  const categories = ['All', 'Bracelets & Malas', 'Rudraksha', 'Crystals & Semi-precious', 'Yantras & Idols'];

  const filteredProducts = () => {
    let allProducts = [];
    if (selectedCategory === 'All') {
      Object.values(products).forEach(categoryProducts => {
        allProducts = [...allProducts, ...categoryProducts];
      });
    } else {
      allProducts = products[selectedCategory] || [];
    }

    if (searchTerm) {
      allProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.benefits.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return allProducts;
  };

  const handleAddToCart = (product) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.priceRange,
        image: product.image,
        quantity: 1
      }
    });
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch({
        type: 'REMOVE_ITEM',
        payload: { id: productId }
      });
    } else {
      dispatch({
        type: 'UPDATE_QTY',
        payload: { id: productId, quantity: newQuantity }
      });
    }
  };

  const getProductQuantity = (productId) => {
    const item = cart.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleContactForDetails = (product) => {
    const phoneNumber = '919650786531';
    const message = `Hi! I'm interested in the ${product.name} (${product.priceRange}). 

Product Details:
- Name: ${product.name}
- Category: ${product.category}
- Price Range: ${product.priceRange}
- Benefits: ${product.benefits}

Could you please provide more details about this product?

Thank you!`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="products-page">
      <SEO 
        title="Spiritual Products - Authentic Rudraksha, Crystals, Yantras & Sacred Items"
        description="Shop authentic spiritual products at Srajan Vastu. Genuine Rudraksha beads, healing crystals, sacred yantras, energized bracelets, and spiritual items for prosperity, protection, and positive energy. Expert guidance included with every purchase."
        keywords="spiritual products, rudraksha beads, healing crystals, sacred yantra, tiger eye bracelet, shri yantra, energized crystals, spiritual items online, vastu products, authentic rudraksha"
        canonical="https://www.srajanvastu.com/products"
      />
      <StructuredData 
        type="products" 
        customData={{
          breadcrumbs: [
            { name: 'Home', url: 'https://www.srajanvastu.com/' },
            { name: 'Products', url: 'https://www.srajanvastu.com/products' }
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Products' }
        ]}
      />
      
      <div className="products-header">
        <h1 className="page-title">Sacred Products</h1>
        <p className="page-subtitle">Authentic spiritual items for your journey</p>
      </div>

      <div className="products-controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts().map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder" style={{display: 'none'}}>
                <span className="placeholder-text">Photo Coming Soon</span>
              </div>
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-category">{product.category}</p>
              <p className="product-benefits">{product.benefits}</p>
              <p className="product-usage"><strong>How to use:</strong> {product.howToUse}</p>
              <div className="product-price">{product.priceRange}</div>
              
              <div className="product-actions">
                {getProductQuantity(product.id) > 0 ? (
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn decrease"
                      onClick={() => handleUpdateQuantity(product.id, getProductQuantity(product.id) - 1)}
                    >
                      −
                    </button>
                    <span className="quantity-display">
                      {getProductQuantity(product.id)} in cart
                    </span>
                    <button 
                      className="quantity-btn increase"
                      onClick={() => handleUpdateQuantity(product.id, getProductQuantity(product.id) + 1)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
                <button 
                  className="contact-btn"
                  onClick={() => handleContactForDetails(product)}
                >
                  <i className="fab fa-whatsapp"></i>
                  Contact for Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts().length === 0 && (
        <div className="no-products">
          <p>No products found matching your search criteria.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
