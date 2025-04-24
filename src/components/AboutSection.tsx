
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Про ArtMitin</h2>
        
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
          <p className="mb-6 text-lg">
            ArtMitin – це команда професіоналів, які створюють яскраві та ефективні рекламні рішення.
            Ми спеціалізуємося на:
          </p>
          
          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-2xl mr-4">🛠</span>
              <span>Виготовлення білбордів, вивісок та банерів</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">🎨</span>
              <span>Розробка унікального дизайну</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">📍</span>
              <span>Розміщення реклами у вигідних локаціях</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">⚙️</span>
              <span>Монтаж та технічне облуговування</span>
            </li>
            <li className="flex items-start">
              <span className="text-2xl mr-4">📈</span>
              <span>Консультації з маркетингу</span>
            </li>
          </ul>
          
          <p className="text-lg font-semibold text-artmitin-orange">
            Довірте нам ваш бренд, і ми зробимо його помітним!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
