
// src/components/Software.tsx
import React from 'react';
import SoftwareIcon from './SoftwareIcon';

interface SoftwareProps {
  softwareList: string[];
}

const Software: React.FC<SoftwareProps> = ({ softwareList }) => {
  return (
    <section id="software" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Software que Manejamos
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-16">
          Nuestra experiencia abarca las herramientas estadísticas más potentes y demandadas en el ámbito académico y de investigación.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {softwareList.map((softwareName, index) => (
            <SoftwareIcon key={index} name={softwareName} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Software;
    