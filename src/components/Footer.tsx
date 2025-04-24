
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <footer className="bg-artmitin-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="#services" 
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            className="font-semibold hover:text-artmitin-orange transition-colors"
          >
            Послуги
          </a>
          <a 
            href="#about" 
            onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            className="font-semibold hover:text-artmitin-orange transition-colors"
          >
            Про нас
          </a>
          <a 
            href="#contacts" 
            onClick={(e) => { e.preventDefault(); scrollToSection('contacts'); }}
            className="font-semibold hover:text-artmitin-orange transition-colors"
          >
            Контакти
          </a>
        </div>
        
        <div className="flex justify-center mb-6">
          <a 
            href="https://t.me/NeoDesignUA" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-artmitin-orange transition-colors"
            aria-label="Telegram"
          >
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.88 8.8c-.14.66-.54.82-.94.42l-2.5-1.92-1.2.74c-.42.26-.76.26-1.06-.04l.18-2.14 6.86-6.2c.3-.28.14-.66-.32-.44l-8.56 5.36-2.26-.68c-.64-.2-.66-.74.02-.98l9.06-3.5c.5-.2.94.14.9.68z"/>
            </svg>
          </a>
        </div>
        
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} ArtMitin. Всі права захищено.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
