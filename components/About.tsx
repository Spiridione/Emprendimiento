
// src/components/About.tsx
import React from 'react';

interface AboutProps {
  expertName: string;
  specialty: string;
}

const About: React.FC<AboutProps> = ({ expertName, specialty }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Sobre {expertName}
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Placeholder image for the expert or a related concept */}
            <img
              src="https://picsum.photos/600/400?random=expert"
              alt="MV Spiridione Puzzar, experto en estadística"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Con una trayectoria destacada y profunda experiencia en el campo de la estadística, {expertName} es un {specialty} comprometido con el éxito académico y profesional de sus clientes.
            </p>
            <p className="mb-4">
              Mi misión es simplificar la complejidad de los datos, transformándolos en información clara y valiosa que impulse tus proyectos de investigación, tesis y publicaciones científicas. Mi enfoque es riguroso, personalizado y siempre orientado a resultados.
            </p>
            <p className="mb-4">
              He asesorado a numerosos estudiantes y profesionales en distintos niveles académicos, desde pregrado hasta doctorado, en una amplia variedad de disciplinas, utilizando las herramientas y metodologías estadísticas más avanzadas.
            </p>
            <p>
              Confía en mi expertise para asegurar la solidez metodológica y la correcta interpretación de tus análisis, llevando tu trabajo al siguiente nivel de excelencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
    