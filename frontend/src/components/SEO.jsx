import React, { useEffect } from 'react';

/**
 * SEO Component for managing page-specific meta tags
 * Usage: <SEO title="Page Title" description="Page description" keywords="keyword1, keyword2" />
 */
const SEO = ({ 
  title = 'Srajan Vastu - Expert Vastu Consultant, Numerologist & Astrologer',
  description = 'Transform your home and office with professional Vastu Shastra consultation by certified expert Seema Sharma. Expert services in Vastu, Numerology, Astrology, and spiritual products.',
  keywords = 'vastu consultant, vastu shastra, numerology, astrology, vastu expert',
  author = 'Seema Sharma - Srajan Vastu',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonical = null,
  noindex = false
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);
    updateMetaTag('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `https://www.srajanvastu.com${ogImage}`, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonical || window.location.href, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', `https://www.srajanvastu.com${ogImage}`, true);
    updateMetaTag('twitter:card', 'summary_large_image', true);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical || window.location.href);

  }, [title, description, keywords, author, ogImage, ogType, canonical, noindex]);

  return null;
};

export default SEO;
