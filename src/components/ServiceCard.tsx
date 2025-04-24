
import React from 'react';

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  description: string[];
  onClick: () => void;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageUrl, description, onClick, delay = 0 }) => {
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in service-card"
      onClick={onClick}
      style={{ animationDelay: `${delay}s` }}
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover" 
        loading="lazy"
      />
      <div className="p-5">
        <h3 className="text-xl mb-3">{title}</h3>
        {description.map((item, index) => (
          <p key={index} className="text-gray-600 mb-2">{item}</p>
        ))}
        <button className="mt-3 bg-artmitin-orange text-white px-5 py-2 rounded-full font-semibold hover:bg-[#E05500] transition-colors">
          Детальніше
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
