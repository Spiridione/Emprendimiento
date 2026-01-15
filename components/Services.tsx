
// src/components/Services.tsx
import React from 'react';
import ServiceCard from './ServiceCard';
import { SERVICES_BY_LEVEL } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Nuestros Servicios por Nivel Académico
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Ofrecemos asesoría estadística especializada y adaptada a las exigencias de cada etapa de tu formación, desde los fundamentos hasta los análisis más complejos.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_BY_LEVEL.map((service, index) => (
            <ServiceCard
              key={index}
              level={service.level}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
    