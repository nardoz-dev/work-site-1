// // src/components/ScrollSpy.tsx
// import { useEffect, useState } from 'react';
// import { activeSection } from '../../stores/navigationStore';

// export function ScrollSpy() {
//   const [isClient, setIsClient] = useState(false);

//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   useEffect(() => {
//     // A new more control
//     if (!isClient) return;

//     const sections = document.querySelectorAll('main section[id]');
//     // This ensure in the subpage doesn't activate
//     if (sections.length === 0) {
//       console.log("Scroll Spy not initialized")
//       return; 
//     }else{
//       console.log("Scroll Spy initialized")
//     }

//     // Logica per l'ancora (hash)
//     const hash = window.location.hash.substring(1);
//     if (hash && document.getElementById(hash)) {
//       // Ora possiamo impostare lo stato in sicurezza.
//       activeSection.set(hash);
//     }

//     const observer = new IntersectionObserver((entries) => {
//       for (const entry of entries) {
//         if (entry.isIntersecting) {
//           console.log("Entry Target ID ", entry.target.id);
//           activeSection.set(entry.target.id);
//           break;
//         }
//       }
//     },
//       {

//         rootMargin: '-40% 0px -60% 0px',
//         threshold: 0,
//       }
//   );

  

//     sections.forEach((section) => {
//       observer.observe(section);
//     });

    
    

//     return () => {
//       sections.forEach((section) => {
//         observer.unobserve(section);
//       });
//     };
//   }, [isClient]);
  
//   return null;
// }

// src/components/utils/ScrollSpy.tsx
import { useEffect, useState } from 'react';
// 1. Importa ENTRAMBI gli store
import { activeSection, activeFeature } from '../../stores/navigationStore';

export function ScrollSpy() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  useEffect(() => {
    if (!isClient) return;

    const sections = document.querySelectorAll('main section[id]');
    if (sections.length === 0) {
      return; // Non siamo sulla homepage
    }

    // --- 2. LOGICA OBSERVER (per lo scroll normale) ---
    // Questo gestisce l'indicatore MENTRE scrolli
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeSection.set(entry.target.id);
        
          break;
        }
      }
    }, {
      rootMargin: '-40% 0px -60% 0px',
      threshold: 0,
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    // --- 3. LOGICA HASH (per lo scroll al CLICK) ---
    // Questa funzione legge l'hash e fa lo scroll
    const handleHashChange = () => {
      const fullHash = window.location.hash; // Es. "#security?feature=dvr"
      
      // Pulisci l'hash per l'ID della sezione
      const hashId = fullHash.split('?')[0].substring(1); // -> "security"

      if (hashId && document.getElementById(hashId)) {
        // Imposta l'indicatore della navbar
        activeSection.set(hashId);
        
        // Fai lo scroll
        setTimeout(() => {
          const targetElement = document.getElementById(hashId);
          if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - 80; // 80px offset
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);

        // Controlla i parametri per la feature "security"
        const params = new URLSearchParams(fullHash.split('?')[1]);
        const featureToOpen = params.get('feature'); // -> "dvr"
        if (featureToOpen) {
          activeFeature.set(featureToOpen); // <-- DICE A SECURITY.TSX DI APRIRSI
        }
      } else if (!fullHash) {
        // Se siamo arrivati sulla home senza hash, imposta "home"
        activeSection.set('home');
      }
    };

    // 4. ESECUZIONE
    
    // Esegui 1 volta al caricamento (per /iso -> /#security?feature=dvr)
    handleHashChange();
    
    // Esegui ogni volta che l'hash cambia (per /#home -> /#security?feature=dvr)
    window.addEventListener('hashchange', handleHashChange);

    // 5. Pulizia
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [isClient]);
  
  return null;
}