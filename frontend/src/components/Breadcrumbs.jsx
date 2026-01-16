import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

/**
 * Breadcrumb navigation component for better SEO and user experience
 * Usage: <Breadcrumbs items={[{name: 'Home', path: '/'}, {name: 'Services'}]} />
 */
const Breadcrumbs = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="breadcrumb-item"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            {item.path ? (
              <>
                <Link 
                  to={item.path} 
                  itemProp="item"
                  className="breadcrumb-link"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
                <meta itemProp="position" content={index + 1} />
              </>
            ) : (
              <>
                <span itemProp="name" className="breadcrumb-current">{item.name}</span>
                <meta itemProp="position" content={index + 1} />
              </>
            )}
            {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
