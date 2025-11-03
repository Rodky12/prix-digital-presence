import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declaração de tipo para o gtag do Google Analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Verifica se o gtag existe (configurado no index.html)
    if (typeof window.gtag !== 'undefined') {
      // Envia o pageview para o GA sempre que a rota mudar
      window.gtag('config', 'G-X6KRFN1EPW', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
