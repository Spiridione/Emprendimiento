
// src/components/FAQ.tsx
import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { FAQ_ITEMS } from '../constants';

interface FAQProps {
  expertEmail: string;
}

const FAQ: React.FC<FAQProps> = ({ expertEmail }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Preguntas Frecuentes (FAQ)
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
          Encuentra respuestas rápidas a las dudas más comunes sobre nuestros servicios de asesoría estadística.
        </p>

        <div className="max-w-4xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <p className="text-gray-700 mb-6">
            Envíanos un correo electrónico con tu consulta y te responderemos a la brevedad.
          </p>
          <a
            href={`mailto:${expertEmail}?subject=Consulta sobre Asesoría Estadística`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10.05 11.23a2.997 2.997 0 003.9 0l8.047-5.346C20.669 4.156 18.253 2 12 2 5.748 2 3.332 4.156 2.003 5.884zM22 8.001v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8.001l10 6.666L22 8.001z"></path></svg>
            <span>Enviar Correo Electrónico</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
    