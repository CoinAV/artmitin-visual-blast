
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    title: "Світлова вивіска для кав'ярні",
    image: "/images/neon-sign-1.png",
    description: "Неонова вивіска з LED підсвічуванням"
  },
  {
    id: 2,
    title: "Об'ємні літери для ТРЦ",
    image: "/images/volume-sign-1.webp",
    description: "3D літери з внутрішнім підсвічуванням"
  },
  {
    id: 3,
    title: "LED екран для стадіону",
    image: "/images/led-screen-2.webp",
    description: "Повнокольоровий LED екран"
  },
  {
    id: 4,
    title: "Оформлення АЗС",
    image: "/images/design-1.webp",
    description: "Комплексне брендування АЗС"
  }
];

const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-4xl text-center mb-12 font-bold">Наші роботи</h2>
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
