
// src/components/ProcessAndPayments.tsx
import React from 'react';
import PaymentStep from './PaymentStep';
import { WORK_PROCESS_STEPS, PAYMENT_SCHEMA, EXPERT_INFO } from '../constants';

const ProcessAndPayments: React.FC = () => {
  return (
    <section id="process-payments" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-16">
          Nuestro Proceso y Esquema de Pagos
        </h2>

        {/* Proceso de Trabajo */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-teal-700 mb-10">
            ¿Cómo Trabajamos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {WORK_PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white text-3xl font-bold mb-4">
                  {index + 1}
                </div>
                <h4 className="text-xl font-semibold text-blue-800 mb-2">{step.title}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sistema de Seguimiento */}
        <div className="mb-16 bg-gray-100 p-8 rounded-lg shadow-inner">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-teal-700 mb-8">
            Seguimiento del Progreso
          </h3>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-6">
            Te mantendremos siempre informado sobre el avance de tu proyecto. Ofrecemos un sistema de seguimiento transparente y adaptable a tus preferencias:
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-3 text-lg text-gray-800 font-medium">
              <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10.05 11.23a2.997 2.997 0 003.9 0l8.047-5.346C20.669 4.156 18.253 2 12 2 5.748 2 3.332 4.156 2.003 5.884zM22 8.001v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8.001l10 6.666L22 8.001z"></path></svg>
              <span>Vía Email</span>
            </div>
            <div className="flex items-center space-x-3 text-lg text-gray-800 font-medium">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2.11c-5.46 0-9.91 4.45-9.91 9.91 0 1.63.4 3.2.98 4.6l-1.07 3.93 4.01-1.05c1.38.76 2.92 1.17 4.54 1.17 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.04c-1.48 0-2.92-.41-4.18-1.16l-.29-.17-3.03.79.8-2.96-.19-.3c-.8-.94-1.27-2.12-1.27-3.39 0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.08-.57.08-.18.25-.66.81-.8 1.05-.14.25-.29.27-.54.12-.25-.12-1.05-.39-1.99-1.23-.74-.65-1.24-1.46-1.39-1.71-.14-.25-.01-.39.11-.51.1-.1.25-.25.37-.39.12-.12.16-.25.25-.42.08-.18.04-.32-.01-.45-.05-.12-.4-.95-.54-1.23-.14-.27-.29-.23-.49-.23h-.49c-.21 0-.54.08-.81.35-.27.27-1.05 1.02-1.05 2.47 0 1.45 1.08 2.87 1.23 3.07.15.2.29.41.6.85.3 43.85 1.39 2.37 2.76 3.19.78.47 1.39.76 1.88.98.66.3.93.25 1.28.16.38-.08 1.48-.6 1.7-1.18.22-.59.22-1.09.15-1.23-.06-.14-.24-.23-.5-.35z"></path></svg>
              <span>Por WhatsApp</span>
            </div>
          </div>
          <p className="text-center mt-6">
            Siempre podrás contactarnos directamente para cualquier consulta.
          </p>
        </div>


        {/* Esquema de Pagos */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-teal-700 mb-10">
            Esquema de Pagos Flexible
          </h3>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Hemos diseñado un esquema de pagos que facilita tu inversión y se ajusta al progreso de tu tesis, brindando tranquilidad y confianza.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {PAYMENT_SCHEMA.map((payment, index) => (
              <PaymentStep
                key={index}
                step={payment.step}
                percentage={payment.percentage}
                description={payment.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessAndPayments;
    