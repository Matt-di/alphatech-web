import React from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useLocation } from 'react-router-dom';
import { config } from '../config';

const SEO = ({ 
  title, 
  description, 
  keywords = [],
  image,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  noindex = false,
  canonical
}) => {
  const location = useLocation();
  const siteUrl = 'https://alphatech-et.com'; // Update with your actual domain
  const currentUrl = canonical || `${siteUrl}${location.pathname}`;
  
  // Default values
  const defaultTitle = config.companyName;
  const defaultDescription = config.tagline;
  const defaultImage = `${siteUrl}/og-image.jpg`; // You'll need to add this image
  const defaultKeywords = [
    'Alphatech',
    'Ethiopia',
    'Software Development',
    'Telecom Solutions',
    'Transport Systems',
    'Enterprise Solutions',
    'Technology Trading',
    'Addis Ababa'
  ];

  const seoTitle = title ? `${title} | ${config.companyName}` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoKeywords = [...defaultKeywords, ...keywords].join(', ');

  // Structured Data (JSON-LD)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.companyName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: config.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.contact.address,
      addressLocality: 'Addis Ababa',
      addressCountry: 'ET'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: config.contact.phone,
      email: config.contact.email,
      contactType: 'Customer Service'
    },
    sameAs: [
      config.socials.facebook,
      config.socials.twitter,
      config.socials.linkedin
    ].filter(Boolean)
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.companyName,
    url: siteUrl,
    description: config.tagline,
    publisher: {
      '@type': 'Organization',
      name: config.companyName
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: location.pathname
      .split('/')
      .filter(Boolean)
      .map((segment, index, array) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
        item: `${siteUrl}/${array.slice(0, index + 1).join('/')}`
      }))
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      {author && <meta name="author" content={author} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={config.companyName} />
      <meta property="og:locale" content="en_US" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      {config.socials?.twitter && (
        <meta name="twitter:site" content={config.socials.twitter} />
      )}
      
      {/* Additional Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content={config.theme.primaryColor} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      {location.pathname !== '/' && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
