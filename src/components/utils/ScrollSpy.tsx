// src/components/ScrollSpy.tsx
import { useEffect, useState } from 'react';
import { activeSection } from '../../stores/navigationStore';

export function ScrollSpy() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // A new more control
    if (!isClient) return;

    const sections = document.querySelectorAll('main section[id]');
    // This ensure in the subpage doesn't activate
    if (sections.length === 0) {
      console.log("Scroll Spy not initialized")
      return; 
    }else{
      console.log("Scroll Spy initialized")
    }

    // Logica per l'ancora (hash)
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
      // Ora possiamo impostare lo stato in sicurezza.
      activeSection.set(hash);
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          console.log("Entry Target ID ", entry.target.id);
          activeSection.set(entry.target.id);
          break;
        }
      }
    },
      {

        rootMargin: '-40% 0px -60% 0px',
        threshold: 0,
      }
  );

  

    sections.forEach((section) => {
      observer.observe(section);
    });

    
    

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [isClient]);
  
  return null;
}
