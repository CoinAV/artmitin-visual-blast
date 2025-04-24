
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  images: string[];
  fullDescription: string;
}

interface ServiceModalProps {
  service: Service;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    // Add escape key listener
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent body scrolling
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };
  
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev > 0 ? prev - 1 : 0));
  };
  
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev < service.images.length - 1 ? prev + 1 : prev));
  };
  
  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative animate-slide-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-artmitin-orange text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#E05500] transition-colors"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        
        <div className="relative mb-6">
          {service.images.length > 0 && (
            <img
              src={service.images[currentImageIndex]}
              alt={`${service.title} - зображення ${currentImageIndex + 1}`}
              className="w-full max-h-80 object-contain rounded-lg"
            />
          )}
          
          {service.images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors ${currentImageIndex === 0 ? 'hidden' : ''}`}
                aria-label="Попереднє зображення"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextImage}
                className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors ${currentImageIndex === service.images.length - 1 ? 'hidden' : ''}`}
                aria-label="Наступне зображення"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
        
        {service.images.length > 1 && (
          <div className="flex gap-2 mb-6 flex-wrap justify-center">
            {service.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Мініатюра ${index + 1}`}
                className={`w-20 h-16 object-cover cursor-pointer rounded-md transition-all ${currentImageIndex === index ? 'border-2 border-artmitin-orange' : 'opacity-70 hover:opacity-100'}`}
                onClick={() => selectImage(index)}
              />
            ))}
          </div>
        )}
        
        <p className="text-gray-700 mb-6">{service.fullDescription}</p>
        
        <div className="mt-6 text-center">
          <p className="font-semibold">
            📞 <strong>Зв'яжіться для замовлення:</strong>{' '}
            <a href="tel:+380674290579" className="text-artmitin-orange hover:underline">
              +38 (067) 429-05-79
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
