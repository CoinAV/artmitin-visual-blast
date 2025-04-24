import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
  };
  
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center text-artmitin-orange font-['Poppins'] text-2xl font-bold">
          <span className="mr-2">ArtMitin</span>
        </a>
        
        <button 
          className="md:hidden text-artmitin-dark" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>
        
        <div className={`md:flex gap-6 ${menuOpen ? 'absolute top-full left-0 right-0 flex flex-col bg-white shadow-md p-4' : 'hidden md:flex'}`}>
          <a 
            href="#services" 
            onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
            className="font-semibold hover:text-artmitin-orange transition-colors"
          >
            Послуги
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }}
            className="font-semibold hover:text-artmitin-orange transition-colors"
          >
            Портфоліо
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
      </div>
    </nav>
  );
};

export default Navigation;
