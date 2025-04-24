
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactsSection: React.FC = () => {
  return (
    <section id="contacts" className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Зв'яжіться з нами</h2>
        
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center">
              <Phone className="text-artmitin-orange mr-3 h-6 w-6" />
              <a 
                href="tel:+380674290579" 
                className="text-xl hover:text-artmitin-orange transition-colors"
              >
                +38 (067) 429-05-79
              </a>
            </div>
            
            <div className="flex items-center">
              <MessageCircle className="text-artmitin-orange mr-3 h-6 w-6" />
              <span className="text-xl">Viber: +38 (067) 429-05-79</span>
            </div>
            
            <div className="flex items-center">
              <svg 
                className="text-artmitin-orange mr-3 h-6 w-6" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.88 8.8c-.14.66-.54.82-.94.42l-2.5-1.92-1.2.74c-.42.26-.76.26-1.06-.04l.18-2.14 6.86-6.2c.3-.28.14-.66-.32-.44l-8.56 5.36-2.26-.68c-.64-.2-.66-.74.02-.98l9.06-3.5c.5-.2.94.14.9.68z"/>
              </svg>
              <a 
                href="https://t.me/NeoDesignUA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:text-artmitin-orange transition-colors"
              >
                Telegram
              </a>
            </div>
          </div>
          
          <p className="mt-8 text-gray-600">
            Маєте запитання? Ми завжди готові допомогти!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
