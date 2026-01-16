import React, { useState } from 'react';

/**
 * Optimized Image Component with lazy loading and proper alt attributes
 * Usage: <OptimizedImage src="/path/to/image.jpg" alt="Descriptive alt text" />
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  width,
  height,
  priority = false,
  placeholder = '/placeholder.jpg'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div 
      className={`optimized-image-container ${className}`} 
      style={{ position: 'relative', ...style }}
    >
      {!hasError ? (
        <>
          {/* Placeholder/blur effect while loading */}
          {!isLoaded && (
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <span style={{ color: '#999' }}>Loading...</span>
            </div>
          )}
          
          <img
            src={src}
            alt={alt}
            className={className}
            style={{
              ...style,
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
          />
        </>
      ) : (
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#999',
            padding: '20px',
            textAlign: 'center'
          }}
        >
          Image not available
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
