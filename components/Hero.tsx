
// src/components/Hero.tsx
import React from 'react';
import { EXPERT_INFO } from '../constants';

interface HeroProps {
  expertEmail: string;
  expertPhone: string;
}

const Hero: React.FC<HeroProps> = ({ expertEmail, expertPhone }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-r from-blue-700 to-teal-500 text-white py-20 md:py-32 overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=chart')" }}
        aria-hidden="true"
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-down">
          Tu Éxito Académico, Nuestro Análisis Experto
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90 animate-fade-in-up">
          Asesoría estadística profesional para tesis de pregrado, maestría, posgrado y doctorado. Convierte tus datos en resultados sólidos y defendibles.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-in-left"
          >
            <span className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2.11c-5.46 0-9.91 4.45-9.91 9.91 0 1.63.4 3.2.98 4.6l-1.07 3.93 4.01-1.05c1.38.76 2.92 1.17 4.54 1.17 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.04c-1.48 0-2.92-.41-4.18-1.16l-.29-.17-3.03.79.8-2.96-.19-.3c-.8-.94-1.27-2.12-1.27-3.39 0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.08-.57.08-.18.25-.66.81-.8 1.05-.14.25-.29.27-.54.12-.25-.12-1.05-.39-1.99-1.23-.74-.65-1.24-1.46-1.39-1.71-.14-.25-.01-.39.11-.51.1-.1.25-.25.37-.39.12-.12.16-.25.25-.42.08-.18.04-.32-.01-.45-.05-.12-.4-.95-.54-1.23-.14-.27-.29-.23-.49-.23h-.49c-.21 0-.54.08-.81.35-.27.27-1.05 1.02-1.05 2.47 0 1.45 1.08 2.87 1.23 3.07.15.2.29.41.6.85.3 43.85 1.39 2.37 2.76 3.19.78.47 1.39.76 1.88.98.66.3.93.25 1.28.16.38-.08 1.48-.6 1.7-1.18.22-.59.22-1.09.15-1.23-.06-.14-.24-.23-.5-.35z"></path></svg>
              Contactar por WhatsApp
            </span>
          </a>
          <a
            href={`mailto:${expertEmail}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 animate-slide-in-right"
          >
            <span className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10.05 11.23a2.997 2.997 0 003.9 0l8.047-5.346C20.669 4.156 18.253 2 12 2 5.748 2 3.332 4.156 2.003 5.884zM22 8.001v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8.001l10 6.666L22 8.001z"></path></svg>
              Enviar Email
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

    