
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
      style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
    >
      <div className="text-center px-4 sm:px-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">Яскрава реклама для вашого бізнесу</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
          ArtMitin створює незабутні білборди, вивіски та LED-екрани, які привертають увагу та підвищують впізнаваність бренду.
        </p>
        <a 
          href="tel:+380674290579" 
          className="inline-block py-4 px-4 text-lg font-bold uppercase text-white bg-artmitin-pink/90 border-3 border-artmitin-cyan rounded-full w-[200px] h-[200px] flex items-center justify-center shadow-[0_0_10px_#8B5CF6,0_0_20px_#8B5CF6,0_0_30px_#8B5CF6] transition-all duration-300 hover:bg-artmitin-pink hover:shadow-[0_0_20px_#8B5CF6,0_0_40px_#8B5CF6,0_0_60px_#8B5CF6] animate-neon-pulse"
          style={{ 
            borderWidth: '3px',
            textShadow: '0 0 5px rgba(139, 92, 246, 0.7), 0 0 10px rgba(139, 92, 246, 0.7)'
          }}
        >
          📞 Замовити зараз
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
