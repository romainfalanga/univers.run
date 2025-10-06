import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getSEOMetadata } from '../config/seoConfig';

export const SEO: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const seoData = getSEOMetadata(location.pathname);

    document.title = seoData.title;

    updateMetaTag('name', 'description', seoData.description);
    updateMetaTag('name', 'keywords', seoData.keywords);

    updateMetaTag('property', 'og:title', seoData.title);
    updateMetaTag('property', 'og:description', seoData.description);
    updateMetaTag('property', 'og:type', seoData.ogType || 'website');
    updateMetaTag('property', 'og:url', `https://univers.run${location.pathname}`);
    updateMetaTag('property', 'og:site_name', 'Univers.run');
    updateMetaTag('property', 'og:image', 'https://univers.run/universrunlogo.png');

    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', seoData.title);
    updateMetaTag('name', 'twitter:description', seoData.description);
    updateMetaTag('name', 'twitter:image', 'https://univers.run/universrunlogo.png');

    updateLinkTag('canonical', `https://univers.run${location.pathname}`);
  }, [location.pathname]);

  return null;
};

function updateMetaTag(attribute: string, key: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}
