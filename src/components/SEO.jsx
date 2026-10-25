import { useEffect } from "react";

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    // Set page title
    const fullTitle = title 
      ? `${title} | Graytus Technologies` 
      : "Graytus Technologies | Premier Software & Digital Solutions Company";
    document.title = fullTitle;

    // Set meta description
    const metaDesc = description || "Graytus Technologies designs and develops high-performance websites, mobile applications, custom software, and intelligent AI solutions for global enterprises.";
    
    let descElement = document.querySelector('meta[name="description"]');
    if (!descElement) {
      descElement = document.createElement('meta');
      descElement.setAttribute('name', 'description');
      document.head.appendChild(descElement);
    }
    descElement.setAttribute('content', metaDesc);

  }, [title, description, keywords]);

  return null;
}
