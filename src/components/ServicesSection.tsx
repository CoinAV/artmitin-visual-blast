
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceModal from './ServiceModal';

// Define the service data structure
interface Service {
  id: string;
  title: string;
  imageUrl: string;
  images: string[];
  description: string[];
  fullDescription: string;
}

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const services: Service[] = [
    {
      id: "neon-sign-1",
      title: "Комбіновані вивіски",
      imageUrl: "/images/neon-sign-1.png",
      images: ["/images/neon-sign-1.png", "/images/neon-sign-2.png"],
      description: [
        "💡 Яскраве неонове підсвічування",
        "🎯 Для магазинів та кафе",
        "🛠 Акрил, неон"
      ],
      fullDescription: "Неонові вивіски з комбінованим підсвічуванням для яркого ефекту."
    },
    {
      id: "neon-sign-2",
      title: "Світлові вивіски",
      imageUrl: "/images/neon-sign-3.webp",
      images: ["/images/neon-sign-3.webp", "/images/neon-sign-4.webp"],
      description: [
        "💡 Рівномірне світло",
        "🎯 Для салонів та офісів",
        "🛠 Акрил, LED"
      ],
      fullDescription: "Світлові вивіски для створення унікального стилю."
    },
    {
      id: "led-screen-1",
      title: "LED монохромне табло",
      imageUrl: "/images/led-screen-1.webp",
      images: ["/images/led-screen-1.webp"],
      description: [
        "💡 Чіткий текст",
        "🎯 Для інформ. повідомлень",
        "🛠 LED модулі"
      ],
      fullDescription: "Монохромні LED табло для чіткої інформації."
    },
    {
      id: "led-screen-2",
      title: "Повноколірний вуличний екран",
      imageUrl: "/images/led-screen-2.webp",
      images: ["/images/led-screen-2.webp"],
      description: [
        "💡 Яскраві кольори",
        "🎯 Для вуличної реклами",
        "🛠 LED модулі"
      ],
      fullDescription: "Повноколірний екран для яскравої реклами."
    },
    {
      id: "city-light-1",
      title: "Сітілайти",
      imageUrl: "/images/city-light-1.webp",
      images: ["/images/city-light-1.webp"],
      description: [
        "💡 Компактний формат",
        "🎯 Для міського транспорту",
        "🛠 Алюміній, скло"
      ],
      fullDescription: "Компактні сітілайти для міського транспорту."
    },
    {
      id: "volume-sign-1",
      title: "Об'ємні світлові вивіски",
      imageUrl: "/images/volume-sign-1.webp",
      images: ["/images/volume-sign-1.webp"],
      description: [
        "💡 3D ефект",
        "🎯 Для торгових центрів",
        "🛠 Акрил, LED"
      ],
      fullDescription: "Об'ємні світлові вивіски для привернення уваги."
    },
    {
      id: "banner-1",
      title: "Широкоформатний друк",
      imageUrl: "/images/banner-1.webp",
      images: ["/images/banner-1.webp"],
      description: [
        "💡 Висока якість друку",
        "🎯 Для зовнішньої реклами",
        "🛠 ПВХ"
      ],
      fullDescription: "Широкоформатний друк для банерів та реклами."
    },
    {
      id: "banner-2",
      title: "Оренда рекламних носіїв",
      imageUrl: "/images/banner-2.webp",
      images: ["/images/banner-2.webp"],
      description: [
        "💡 Гнучкі терміни",
        "🎯 Для тимчасових кампаній",
        "🛠 Вініл"
      ],
      fullDescription: "Оренда рекламних носіїв для розміщення реклами."
    },
    {
      id: "furniture-1",
      title: "Міські меблі",
      imageUrl: "/images/furniture-1.webp",
      images: ["/images/furniture-1.webp"],
      description: [
        "💡 Функціональний дизайн",
        "🎯 Для громадських місць",
        "🛠 Алюміній, LED"
      ],
      fullDescription: "Міські меблі з рекламними вивісками."
    },
    {
      id: "printing-3",
      title: "Світлова лаконічна реклама",
      imageUrl: "/images/printing-3.webp",
      images: ["/images/printing-3.webp"],
      description: [
        "💡 Енергоефективність",
        "🎯 Для невеликих вивісок",
        "🛠 Акрил, LED"
      ],
      fullDescription: "Світлова лаконічна реклама для привернення уваги."
    },
    {
      id: "design-1",
      title: "Оформлення АЗС",
      imageUrl: "/images/design-1.webp",
      images: ["/images/design-1.webp"],
      description: [
        "💡 Єдиний стиль",
        "🎯 Для брендування АЗС",
        "🛠 Алюміній, LED"
      ],
      fullDescription: "Оформлення АЗС для створення єдиного стилю."
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Наші послуги</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              imageUrl={service.imageUrl}
              description={service.description}
              onClick={() => openModal(service)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
      
      {modalOpen && selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};

export default ServicesSection;
