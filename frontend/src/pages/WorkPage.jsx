import React, { useState, useEffect } from 'react';
import './WorkPage.css';
import SEO from '../components/SEO';
import StructuredData from '../components/StructuredData';
import Breadcrumbs from '../components/Breadcrumbs';

// Import the new images properly
import mahaVastu1 from '../assets/WhatsApp Image 2025-09-01 at 21.25.47_a295c0db.jpg';
import mahaVastu2 from '../assets/WhatsApp Image 2025-09-01 at 21.27.46_f059e5b3.jpg';
import mahaVastu3 from '../assets/WhatsApp Image 2025-09-01 at 21.29.04_89b1650d.jpg';
import mahaVastu4 from '../assets/WhatsApp Image 2025-09-01 at 21.30.38_84b95f1d.jpg';
import numerologistImage from '../assets/WhatsApp Image 2025-09-01 at 21.31.48_d7294f89.jpg';
import phonologyImage from '../assets/WhatsApp Image 2025-09-01 at 21.35.35_9ce2e05b.jpg';
import swarScienceImage from '../assets/WhatsApp Image 2025-09-01 at 21.36.42_724a6934.jpg';
import vastuVigyanImage from '../assets/WhatsApp Image 2025-09-01 at 21.37.25_cb25425c.jpg';
// Latest 4 images for GeoVastu slideshow
import geoVastu1 from '../assets/WhatsApp Image 2025-09-01 at 21.38.04_f1987d92.jpg';
import geoVastu2 from '../assets/WhatsApp Image 2025-09-01 at 21.39.59_b381e418.jpg';
import geoVastu3 from '../assets/WhatsApp Image 2025-09-01 at 21.40.00_20266016.jpg';
import geoVastu4 from '../assets/WhatsApp Image 2025-09-01 at 21.40.00_d7b5487d.jpg';

const WorkPage = () => {
  // Use the imported images for Maha Vastu
  const mahaVastuImages = [
    mahaVastu1,
    mahaVastu2,
    mahaVastu3,
    mahaVastu4
  ];

  // Use the imported images for GeoVastu
  const geoVastuImages = [
    geoVastu1,
    geoVastu2,
    geoVastu3,
    geoVastu4
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentGeoVastuIndex, setCurrentGeoVastuIndex] = useState(0);

  // Auto-slide functionality for Maha Vastu
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % mahaVastuImages.length
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [mahaVastuImages.length]);

  // Auto-slide functionality for GeoVastu
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGeoVastuIndex((prevIndex) => 
        (prevIndex + 1) % geoVastuImages.length
      );
    }, 3500); // Slightly different timing to avoid sync

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [geoVastuImages.length]);
  return (
    <div className="work-page">
      <SEO 
        title="Our Work - Vastu, Numerology & Astrology Portfolio | Srajan Vastu"
        description="View our successful Vastu consultations, astrological readings, and energy healing projects. See real transformations through our Maha Vastu, GeoVastu, and numerology services."
        keywords="vastu portfolio, vastu projects, numerology case studies, astrology consultations, successful vastu transformations"
        canonical="https://www.srajanvastu.com/work"
      />
      <StructuredData 
        type="work" 
        customData={{
          breadcrumbs: [
            { name: 'Home', url: 'https://www.srajanvastu.com/' },
            { name: 'Our Work', url: 'https://www.srajanvastu.com/work' }
          ]
        }}
      />
      
      <Breadcrumbs 
        items={[
          { name: 'Home', path: '/' },
          { name: 'Our Work' }
        ]}
      />
      
      <div className="work-container">
        <h1 className="section-title">Our Portfolio</h1>
        <p className="subtitle">Explore a selection of our successful Vastu consultations, astrological chart readings, and energy healing projects.</p>
        
        <div className="work-grid">
          <div className="work-item maha-vastu-slider" style={{backgroundImage: `url(${mahaVastuImages[currentImageIndex]})`}}>
            <div className="overlay">
              <h3>Maha Vastu</h3>
              <p>Harmonizing a family home for peace and prosperity.</p>
            </div>
            <div className="slider-indicators">
              {mahaVastuImages.map((_, index) => (
                <span 
                  key={index}
                  className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="work-item" style={{backgroundImage: `url(${numerologistImage})`}}>
            <div className="overlay"><h3>Certified Numerologist</h3><p>Expert numerological analysis and name corrections for personal and professional success.</p></div>
          </div>
          <div className="work-item" style={{backgroundImage: `url(${phonologyImage})`}}>
            <div className="overlay"><h3>Professional Proonology</h3><p>Expert phonetic analysis and sound-based corrections for enhanced communication and success.</p></div>
          </div>
          <div className="work-item geo-vastu-slider" style={{backgroundImage: `url(${geoVastuImages[currentGeoVastuIndex]})`}}>
            <div className="overlay">
              <h3>Certified GeoVastu Expert</h3>
              <p>Advanced geological and directional Vastu analysis for optimal energy alignment and prosperity.</p>
            </div>
            <div className="slider-indicators">
              {geoVastuImages.map((_, index) => (
                <span 
                  key={index}
                  className={`indicator ${index === currentGeoVastuIndex ? 'active' : ''}`}
                  onClick={() => setCurrentGeoVastuIndex(index)}
                ></span>
              ))}
            </div>
          </div>
          <div className="work-item" style={{backgroundImage: `url(${vastuVigyanImage})`}}>
            <div className="overlay"><h3>Diploma in Vastu Vigyan</h3><p>Certified expertise in traditional Vastu science and sacred architectural principles.</p></div>
          </div>
          <div className="work-item" style={{backgroundImage: `url(${swarScienceImage})`}}>
            <div className="overlay"><h3>Swar Science</h3><p>Ancient breath science and sound vibration techniques for spiritual and physical well-being.</p></div>
          </div>
        </div>

        <div className="testimonials">
          <h2 className="section-title">Words of Harmony</h2>
          <div className="testimonials-grid">
            <a href="https://www.google.com/search?sca_esv=7363e84110bffb1e&cs=1&output=search&kgmid=/g/11pws7md3p&q=Expeart+Vastu+-+Top+Vastu+Expert+in+Gurgaon&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=80f937443527905a&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1#lrd=0x390d233b26638e07:0xad82cb523164812d,1,,,," target="_blank" rel="noopener noreferrer" className="testimonial-card">
              <p>"Seema Sharma has been not only Vastu consultant for us, she has also been available whenever we need her advice, be it for smaller issues or larger ones, she's always present. Her accurate reading of the problem and correct advice with apt solutions bring in quick relief and change the energy and aura of the house. She has solutions for all problems, be it health, finance, career , professional etc. Her grasp on numerology is commendable too.We will strongly recommend her for all vastu related solutions."</p>
              <p>- 
Deepa Sharma</p>
            </a>
            <a href="https://www.google.com/search?sca_esv=7363e84110bffb1e&cs=1&output=search&kgmid=/g/11pws7md3p&q=Expeart+Vastu+-+Top+Vastu+Expert+in+Gurgaon&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=80f937443527905a&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1#lrd=0x390d233b26638e07:0xad82cb523164812d,1,,,," target="_blank" rel="noopener noreferrer" className="testimonial-card">
              <p>"Excellent remedies for vastu by Seema ji...she is so knowledgeable in her profession and we r extremely greatful for all the suggestions she gave us.I would definitely recommend her .Thank you so much Seema Ji..🤗🙏🏻"</p>
              <p>- Amruthavarshini Ammu</p>
            </a>
            <a href="https://www.google.com/search?sca_esv=7363e84110bffb1e&cs=1&output=search&kgmid=/g/11pws7md3p&q=Expeart+Vastu+-+Top+Vastu+Expert+in+Gurgaon&shndl=30&shem=lcuae,lsptbl1,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=80f937443527905a&utm_source=lcuae,lsptbl1,uaasie,shrtsdl,sh/x/loc/uni/m1/1#lrd=0x390d233b26638e07:0xad82cb523164812d,1,,,," target="_blank" rel="noopener noreferrer" className="testimonial-card">
              <p>"We found Seema ji extremely helpful while finalising a property. She helped us in taking the right decision. She is a knowledgable and experienced vaastu consultant. She haa also do e vastu remidies for home."</p>
              <p>- Nitin kohli</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
