import React, { useState, useEffect } from 'react';
import './VideosPage.css';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

const VideosPage = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [currentText, setCurrentText] = useState(0);
  const [isFading, setIsFading] = useState(false);
  
  const heroTexts = [
    "VIDEOS || BLOGS || SPIRITUAL INSIGHTS",
    "अंतर्दृष्टि और ज्ञान || Insights & Knowledge"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentText(prev => (prev + 1) % heroTexts.length);
        setIsFading(false);
      }, 250); // Half of transition time
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const videos = [
    {
      id: 'hhzb4aqdPNU',
      title: 'Vastu Shastra Fundamentals',
      description: 'Learn the basic principles of Vastu Shastra and how they can transform your living space.',
      duration: '5:42'
    },
    {
      id: 'Q8Kv8XqikAo',
      title: 'Numerology Secrets',
      description: 'Discover the hidden meanings behind numbers and their influence on your life.',
      duration: '12:15'
    },
    {
      id: 'rExalA6r7hI',
      title: 'Astrology Insights',
      description: 'Understanding celestial influences and their impact on daily life.',
      duration: '8:33'
    },
    {
      id: 'waPU-pz240U',
      title: 'Crystal Healing Guide',
      description: 'The power of crystals and their role in energy healing practices.',
      duration: '7:28'
    },
    {
      id: 'CBRJKcTVFPc',
      title: 'Meditation Techniques',
      description: 'Ancient meditation practices for modern spiritual growth.',
      duration: '15:20'
    },
    {
      id: 'xqmY_2SG8Ec',
      title: 'Spiritual Products Overview',
      description: 'Explore authentic spiritual tools and their traditional uses.',
      duration: '9:45'
    }
  ];

  const blogs = [
    {
      id: 'vastu-entrance-tips',
      title: 'Vastu Tips for Home Entrance – Invite Positivity and Prosperity',
      metaTitle: 'Vastu Tips for Home Entrance | SrajanVastu Gurgaon',
      metaDescription: 'Discover simple Vastu tips for your home entrance to attract positivity, health, and prosperity. Expert guidance from SrajanVastu, Gurgaon\'s trusted Vastu consultants.',
      excerpt: 'In Vastu Shastra, the main entrance is known as the gateway of energy. Learn powerful yet easy-to-implement guidelines for creating an auspicious entrance that brings prosperity and health.',
      category: 'Vastu Tips',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop',
      content: {
        introduction: 'Why Your Home Entrance Matters in Vastu Shastra\n\nIn Vastu Shastra, the main entrance is known as the gateway of energy. It is the first point where cosmic energy enters your home. A well-aligned entrance not only brings prosperity and health, but also ensures harmony in relationships and overall happiness.\nAt SrajanVastu, we believe that the doorway is not just an entry for people, but a passage for opportunities, luck, and positive vibrations.',
        dos: 'Do\'s – Vastu Tips for Home Entrance\n\nHere are some powerful yet easy-to-implement guidelines:\n\nDirection of Entrance:\nNorth, East, or North-East facing entrances are considered most auspicious.\nSouth-West should be avoided for main doors.\n\nDoor Design:\nThe main door should be the largest door in the house.\nUse high-quality wood, avoid metal doors.\n\nDecor & Cleanliness:\nKeep the entrance well-lit, clean, and free of clutter.\nPlace a toran of mango leaves, rangoli, or Shubh-Labh symbols for positivity.\n\nNameplate:\nA clean, readable nameplate attracts good vibes.\nMetal nameplates are suitable for North & East entrances, while wooden ones are best for South & West.\n\nSacred Symbols:\nPlace symbols like Swastik, Om, or Shri Yantra near the entrance.',
        donts: 'Don\'ts – What to Avoid at the Entrance\n\nAvoid broken or cracked doors.\nNo shoe rack directly in front of the main door.\nNo mirror facing the entrance (it pushes energy out).\nAvoid clutter, dustbins, or bathrooms near the entrance.',
        remedies: 'Vastu Remedies Without Renovation\n\nIf your entrance direction or setup isn\'t ideal, don\'t worry! Some quick remedies:\n\nUse Vastu pyramids near the main door.\nHang a crystal ball for energy balance.\nPlace plants like tulsi or money plant at the entry for good vibes.',
        conclusion: 'Final Thoughts\n\nYour home entrance is the gateway of fortune. With simple Vastu adjustments, you can create a welcoming space that radiates positivity and prosperity.\nAt SrajanVastu, we specialize in residential & commercial Vastu consultations – guiding you with customized remedies for your home or office.',
        cta: 'Call to Action\n\nReady to transform your home with personalized Vastu guidance?\n Book your consultation with SrajanVastu – Gurgaon\'s trusted Vastu experts today.\nContact: +91-9650786531 / +91-9810681928 | srajanvastu@gmail.com\n Visit: srajanvastu.com'
      },
      readTime: '5 min read',
      publishDate: 'September 16, 2025'
    },
    {
      id: 'vastu-analysis-home-consultancy',
      title: 'Why Go for Vastu Analysis of Your Home?',
      metaTitle: 'Vastu Analysis for Home | Expert Vastu Consultancy – SrajanVastu Gurgaon',
      metaDescription: 'Discover why Vastu analysis of your home is essential for health, harmony, and prosperity. Get expert guidance from SrajanVastu, trusted Vastu consultants in Gurgaon.',
      excerpt: 'Vastu analysis examines your home\'s structure, design, and energy flow to identify imbalances that may affect your family\'s health, finances, and relationships.',
      category: 'Consultancy',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=250&fit=crop',
      content: {
        introduction: 'What is Vastu Analysis?\n\nVastu Shastra, the ancient Indian science of architecture, is based on the balance of the five natural elements – Earth, Water, Fire, Air, and Space. A Vastu analysis examines your home\'s structure, design, and energy flow to identify imbalances (Vastu doshas) that may affect your family\'s health, finances, and relationships.\nAt SrajanVastu, we don\'t just look at walls and directions – we study how your home interacts with universal energies, and how to realign it for positivity and growth.',
        benefits: 'Why Vastu Analysis is Important for Your Home\n\nHere are the key benefits of a proper Vastu consultation:\n\nHealth & Wellbeing\nCorrect placement of bedrooms, kitchen, and bathrooms ensures better health.\nReduces stress, anxiety, and improves sleep quality.\n\nWealth & Prosperity\nProper positioning of entrances, lockers, and study/work areas attracts abundance.\nVastu remedies can unblock financial stagnation.\n\nRelationships & Harmony\nBalances energies in bedrooms and family areas.\nPromotes love, peace, and understanding among family members.\n\nCareer & Success\nHome offices or study rooms aligned as per Vastu boost focus and performance.\nHelps in achieving professional growth and stability.\n\nSpiritual Growth\nA balanced home promotes meditation, positivity, and overall spiritual alignment.',
        consultation: 'What Happens During a Vastu Consultation?\n\nWhen you book a Vastu consultancy with SrajanVastu, we provide:\nOn-site or Online Analysis of your property.\nStudy of entrance, layout, rooms, and surroundings.\nIdentification of Vastu doshas (imbalances).\nPractical Remedies (like placements, colors, crystals, yantras) – without demolition.\nPersonalized guidance tailored to your family\'s needs.',
        need: 'Do You Really Need Vastu Consultancy?\n\nMany people think Vastu is just for new homes or construction. That\'s not true.\nAlready living in a flat or rented home? Remedies still work.\nPlanning a new house? Start with Vastu to build it right.\nFacing challenges in health, finances, or relationships? Vastu analysis often reveals the root cause.',
        conclusion: 'Final Thoughts\n\nYour home is not just a shelter – it\'s a living energy field. With the right Vastu alignment, you can experience peace, prosperity, and progress in every aspect of life.\nAt SrajanVastu, we combine traditional wisdom with modern practicality, offering solutions that are simple, effective, and result-oriented.',
        cta: 'Call to Action\n\nReady to bring harmony and prosperity into your life?\n Book your Vastu Analysis & Consultation with SrajanVastu today.\nContact: +91-9650786531 / +91-9810681928 | srajanvastu@gmail.com\n Visit: srajanvastu.com'
      },
      readTime: '6 min read',
      publishDate: 'September 15, 2025'
    },
    {
      id: 'vastu-business-growth',
      title: 'Vastu for Business Growth & Office Spaces',
      metaTitle: 'Vastu for Business Growth | Office & Shop Vastu Consultation – SrajanVastu Gurgaon',
      metaDescription: 'Discover powerful Vastu tips for offices, shops, and businesses to attract success and prosperity. Consult SrajanVastu for customized business Vastu solutions in Gurgaon.',
      excerpt: 'Success isn\'t just about hard work – it\'s about being in sync with positive energies. Learn how Vastu alignment can boost your business performance and attract growth.',
      category: 'Business Vastu',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=250&fit=crop',
      content: {
        introduction: 'Why Vastu Matters in Business\n\nIn today\'s competitive world, success is not just about hard work – it\'s also about being in sync with positive energies. According to Vastu Shastra, the alignment of your office, shop, or business space can directly influence:\nYour financial stability\nTeam productivity\nCustomer attraction\nOverall business growth\nAt SrajanVastu, we have helped entrepreneurs, shopkeepers, and corporates achieve better results through business Vastu consultations.',
        office: 'Vastu Tips for Offices\n\nHere are some proven guidelines for offices:\n\nOwner\'s Cabin:\nShould be in the South-West direction.\nSit facing North or East for better decision-making.\n\nReception Area:\nPlace in North-East for attracting positivity and clients.\nKeep it well-lit and welcoming.\n\nEmployee Seating:\nStaff should face North or East while working.\nAvoid sitting under beams – it causes stress.\n\nCash & Finance Department:\nPlace in North or North-East direction.\nKeep lockers/safes against the South wall, opening towards North.',
        retail: 'Vastu Tips for Shops & Retail\n\nEntrance:\nNorth-East entrance is most auspicious for attracting customers.\nAvoid South-West entry points.\n\nCash Counter:\nPlace on the North side, opening towards the East.\n\nDisplay Items:\nPlace attractive or best-selling products near the entrance to draw attention.\n\nLighting & Decor:\nBright and clutter-free shops invite positive buying energy.',
        benefits: 'Benefits of Business Vastu Consultation\n\nIncreased sales & revenue\nBetter employee productivity\nEnhanced brand reputation\nImproved client trust & repeat business\nOverall growth & stability',
        cta: 'Call to Action\n\nWant to boost your business with Vastu?\n Book your Business Vastu Consultation with SrajanVastu today.\nContact: +91-9650786531 / +91-9810681928 | srajanvastu@gmail.com\n Visit: srajanvastu.com'
      },
      readTime: '7 min read',
      publishDate: 'September 14, 2025'
    },
    {
      id: 'vastu-stress-reduction',
      title: 'How Vastu Can Reduce Stress and Bring Peace',
      metaTitle: 'Vastu for Stress Reduction | Bring Peace to Your Home – SrajanVastu',
      metaDescription: 'Discover simple Vastu tips to reduce stress, improve sleep, and bring harmony into your home. Balance energy and live with peace and positivity.',
      excerpt: 'Even small, mindful changes in our living spaces can ease stress and restore balance. Learn how Vastu principles can transform your home into a peaceful sanctuary.',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop',
      content: {
        introduction: 'I often meet people who share how overwhelming life has become—constant deadlines, endless responsibilities, and the silent burden of stress. In my journey with Vastu Shastra, I have seen how even small, mindful changes in our living spaces can ease this pressure and restore balance.\n\nVastu, the ancient science of geomancy, teaches us how to harmonize the relationship between nature, humans, and mother earth. By aligning our surroundings with these principles, we can invite health, prosperity, and peace into our lives.',
        declutter: 'Declutter Your Space, Declutter Your Mind\n\nRemove all unwanted, unused, broken, or rusted clutter from your home.\nKeep the north-east corner of every room clean and tidy to maintain fresh energy flow.\nEnsure that the central space of the house remains open, clean, and uncluttered for stress-free living.',
        bedroom: 'Bedroom Vastu for Peaceful Sleep\n\nAvoid mirrors in the bedroom; if present, cover them at night.\nSleep with your head towards the south for the best results; east is also favorable.\nPlace the bed slightly away from the wall, with a proper headrest.\nAvoid bed boxes as they restrict energy flow. If you must use one, never store items emitting negative energy.\nBe mindful of geopathic stress lines beneath your bed—these can cause serious long-term health issues.\nUse clean white linen at night for purity and calmness.\nDiffuse soft music and soothing aromas in your bedroom for restful sleep.',
        conclusion: 'Final Thoughts\n\nIn my years of practice, I have witnessed families regain harmony, children improve their focus, and individuals find peace—all by embracing these simple Vastu tips. You don\'t need massive changes or expensive remedies; sometimes, it\'s the smallest shifts that bring the biggest transformation.\n\nAt Srajan Vastu, our guiding philosophy is simple yet profound:\n"सर्वे भवन्तु सुखिनः – May all be happy."\n\nMy humble invitation to you: start with one or two of these practices today, and you will begin to feel the difference—lighter, calmer, and more connected with yourself and your space.',
        cta: 'Call to Action\n\nReady to bring harmony and prosperity into your life?\n Book your Vastu Analysis & Consultation with SrajanVastu today.\nContact: +91-9650786531 / +91-9810681928 | srajanvastu@gmail.com\n Visit: srajanvastu.com'
      },
      readTime: '8 min read',
      publishDate: 'September 13, 2025'
    },
    {
      id: 'vastu-shastra-hindi',
      title: 'वास्तु शास्त्र: जीवन में संतुलन का विज्ञान',
      metaTitle: 'वास्तु शास्त्र | घर और जीवन में संतुलन – सृजन वास्तु',
      metaDescription: 'वास्तु शास्त्र टिप्स के साथ जानिए कैसे घर और जीवन में सकारात्मक ऊर्जा, शांति और समृद्धि लाएँ। विशेषज्ञ सीमा शर्मा से वास्तु परामर्श पाएँ।',
      excerpt: 'वास्तु शब्द का अर्थ है रहने योग्य स्थान। जानिए कैसे प्राचीन वास्तु विज्ञान आपके जीवन को सुखद, संतुलित और समृद्ध बना सकता है।',
      category: 'हिंदी ब्लॉग',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=250&fit=crop',
      content: {
        introduction: 'वास्तु शास्त्र का अर्थ और उत्पत्ति\n\n\'वास्तु\' शब्द संस्कृत के "वस् निवासे" से लिया गया है, जिसका अर्थ है — रहने योग्य स्थान। यानी ऐसा घर या कार्यस्थल जो आपके जीवन को सुखद, संतुलित और समृद्ध बनाने में सहायक हो। यही कारण है कि आजकल लोग अपने घर और ऑफिस को सकारात्मक ऊर्जा से भरने के लिए Vastu Shastra for Home और Vastu Consultant की मदद ले रहे हैं.',
        ancient: 'प्राचीन काल में वास्तु शास्त्र\n\nप्राचीन समय में Vastu Shastra केवल राजाओं और उच्च वर्ग तक सीमित था। उस दौर में वास्तु के नियम दो तरह से अपनाए जाते थे:\n- राजपरिवारों के लिए विशेष नियम\n- आम जनता के लिए नियम',
        daily: 'आम जीवन में वास्तु टिप्स (Vastu Tips for Home)\n\n- शयनकक्ष (Bedroom): दक्षिण-पश्चिम दिशा में बनाया जाता था। यह दिशा स्थिरता और कार्यकुशलता बढ़ाने वाली मानी जाती है।\n- रसोईघर (Kitchen): दक्षिण-पूर्व दिशा में बनाया जाता था। यह दिशा परिश्रम और कर्मशीलता के लिए प्रेरित करती है।\n\nआज भी ये Vastu Tips घर को संतुलित करने और परिवार में शांति व समृद्धि लाने के लिए अपनाए जाते हैं.',
        celebration: 'जीवन है एक उत्सव\n\nजीवन वास्तव में एक उत्सव है। यदि आप इस उत्सव का आनंद नहीं ले पा रहे हैं, तो संभव है कि आपके घर या ऑफिस में वास्तु दोष (Vastu Dosh) मौजूद हो।\n- यह दोष आपके मन, स्वास्थ्य और जीवन में बाधाएँ पैदा कर सकता है।\n- ऐसे समय में Vastu Shastra Tips और सही Vastu Consultation आपके वातावरण को संतुलित कर, जीवन को सकारात्मक और ऊर्जावान बना सकते हैं.',
        cta: 'संपर्क करें (Call to Action)\n\nक्या आप अपने जीवन में संतुलन और समृद्धि लाना चाहते हैं?\nआज ही सृजन वास्तु से अपना वास्तु विश्लेषण और परामर्श बुक करें।\nसंपर्क: +91-9650786531 / +91-9810681928 | srajanvastu@gmail.com\nवेबसाइट देखें: srajanvastu.com'
      },
      readTime: '6 min read',
      publishDate: 'September 12, 2025'
    },
    {
      id: 'numerology-life-path',
      title: 'Numerology: Discovering Your Life Path Number',
      metaTitle: 'Life Path Number Calculator | Numerology Guide – SrajanVastu',
      metaDescription: 'Calculate your life path number and discover its meaning. Learn how numerology can guide your life decisions and reveal your true purpose.',
      excerpt: 'Your life path number reveals your soul\'s purpose and the lessons you\'re here to learn. Discover how this ancient science can guide your major life decisions.',
      category: 'Numerology',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop',
      content: {
        introduction: 'What is Numerology?\n\nNumerology is the ancient science of numbers and their mystical influence on human life. Every number carries a unique vibration and energy that can reveal insights about your personality, relationships, career, and life purpose.\n\nYour Life Path Number is the most important number in your numerological profile. It\'s calculated from your birth date and represents the path you\'re meant to walk in this lifetime.',
        calculation: 'How to Calculate Your Life Path Number\n\nStep 1: Write down your full birth date (MM/DD/YYYY)\nStep 2: Add all the digits together\nStep 3: Keep adding until you get a single digit (1-9) or master numbers (11, 22, 33)\n\nExample: Born on March 15, 1990\n3 + 1 + 5 + 1 + 9 + 9 + 0 = 28\n2 + 8 = 10\n1 + 0 = 1\nLife Path Number = 1',
        meanings: 'Life Path Number Meanings\n\nLife Path 1: The Leader - Independent, pioneering, ambitious\nLife Path 2: The Peacemaker - Cooperative, diplomatic, sensitive\nLife Path 3: The Creative - Artistic, expressive, optimistic\nLife Path 4: The Builder - Practical, hardworking, reliable\nLife Path 5: The Explorer - Adventurous, freedom-loving, dynamic\nLife Path 6: The Nurturer - Caring, responsible, family-oriented\nLife Path 7: The Seeker - Spiritual, analytical, introspective\nLife Path 8: The Achiever - Ambitious, material success, power\nLife Path 9: The Humanitarian - Compassionate, generous, wise',
        master: 'Master Numbers\n\nLife Path 11: The Intuitive - Highly spiritual, inspirational\nLife Path 22: The Master Builder - Practical visionary, great potential\nLife Path 33: The Master Teacher - Spiritual teacher, healer',
        cta: 'Personal Numerology Consultation\n\nWant a detailed numerology reading?\n Book your personal consultation with SrajanVastu today.\nContact: +91-9650786531 / +91-9810681928 | srajanvastu@gmail.com\n Visit: srajanvastu.com'
      },
      readTime: '9 min read',
      publishDate: 'September 11, 2025'
    }
  ];

  const handleVideoClick = (videoId) => {
    window.open(`https://youtu.be/${videoId}`, '_blank');
  };

  return (
    <div className="videos-page">
      <SEO 
        title="Videos & Blogs - Vastu Tips, Numerology Insights & Astrology Guidance"
        description="Watch educational videos and read insightful blogs about Vastu Shastra, Numerology, and Astrology by expert consultant Seema Sharma. Get free tips and spiritual guidance."
        keywords="vastu videos, numerology blogs, astrology insights, vastu tips, spiritual guidance, vastu consultant videos"
        canonical="https://www.srajanvastu.com/videos"
      />
      <StructuredData 
        type="videos" 
        customData={{
          breadcrumbs: [
            { name: 'Home', url: 'https://www.srajanvastu.com/' },
            { name: 'Videos & Blogs', url: 'https://www.srajanvastu.com/videos' }
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Videos & Blogs' }
        ]}
      />
      
      <div className="videos-container">
        {/* Hero Section */}
        <div className="hero-section">
          <h1 className="section-title">Content</h1>
        </div>

        {/* Videos Section */}
        <section className="content-section">
          <h2 className="content-section-title">Videos</h2>
          <div className="videos-grid">
            {videos.map((video) => (
              <article
                key={video.id}
                className="video-card"
                onClick={() => handleVideoClick(video.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleVideoClick(video.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Watch ${video.title} - ${video.description}`}
              >
                <div className="video-thumbnail">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={`Thumbnail for ${video.title}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://img.youtube.com/vi/${video.id}/default.jpg`;
                    }}
                    loading="lazy"
                  />
                  <div className="play-overlay" aria-hidden="true">
                    <div className="play-button">
                      <i className="fas fa-play" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div className="video-duration" aria-label={`Duration: ${video.duration}`}>
                    {video.duration}
                  </div>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <p className="video-description">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Blogs Section */}
        <section className="content-section">
          <h2 className="content-section-title">Blogs</h2>
          <div className="blogs-container">
            <div className="blogs-grid">
              {blogs.map((blog) => (
                <article 
                  key={blog.id} 
                  className={`blog-card ${expandedBlog === blog.id ? 'expanded' : ''}`}
                  onClick={() => setExpandedBlog(expandedBlog === blog.id ? null : blog.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setExpandedBlog(expandedBlog === blog.id ? null : blog.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={expandedBlog === blog.id}
                  aria-label={`${blog.title} - Click to read more`}
                >
                  <div className="blog-card-image">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop';
                      }}
                    />
                    <div className="blog-category">{blog.category}</div>
                  </div>
                  
                  <div className="blog-card-content">
                    <header className="blog-header">
                      <h2 className="blog-title">{blog.title}</h2>
                      <div className="blog-meta">
                        <time dateTime={blog.publishDate} className="blog-date" aria-label={`Published on ${blog.publishDate}`}>
                          {blog.publishDate}
                        </time>
                        <span className="blog-read-time" aria-label={`Estimated read time: ${blog.readTime}`}>
                          {blog.readTime}
                        </span>
                      </div>
                    </header>

                    <div className="blog-excerpt">
                      <p>{blog.excerpt}</p>
                    </div>

                    {expandedBlog === blog.id && (
                      <div className="blog-full-content" role="region" aria-label="Full blog content">
                        {Object.entries(blog.content).map(([sectionKey, sectionContent]) => {
                          if (sectionKey === 'cta') {
                            return (
                              <div key={sectionKey} className="blog-cta" role="complementary" aria-label="Call to action">
                                <div className="blog-text cta-content">{sectionContent}</div>
                              </div>
                            );
                          }
                          return (
                            <section key={sectionKey} className="blog-section" aria-labelledby={`section-${sectionKey}`}>
                              <div className="blog-text" id={`section-${sectionKey}`}>{sectionContent}</div>
                            </section>
                          );
                        })}
                      </div>
                    )}

                    <div className="blog-card-footer">
                      <span className="read-more-indicator" aria-hidden="true">
                        {expandedBlog === blog.id ? 'Click to minimize' : 'Click to read full blog'}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VideosPage;
