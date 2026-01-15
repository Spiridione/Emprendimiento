
// src/components/ServiceCard.tsx
import React from 'react';

interface ServiceCardProps {
  level: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ level, title, description, image, imageAlt }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={imageAlt} className="w-full h-48 object-cover object-center" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="inline-block bg-teal-100 text-teal-800 text-xs font-semibold px-3 py-1 rounded-full uppercase">
          Nivel: {level}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
    