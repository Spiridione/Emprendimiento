
// src/components/Contact.tsx
import React, { useState, FormEvent } from 'react';

interface ContactProps {
  expertEmail: string;
}

const Contact: React.FC<ContactProps> = ({ expertEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:${expertEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`De: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`)}`;

    window.location.href = mailtoLink;

    // Optionally clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    alert("Tu mensaje ha sido preparado para ser enviado. Por favor, completa el envío a través de tu cliente de correo.");
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-12">
          Contacta con Nosotros
        </h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
          ¿Tienes un proyecto en mente o necesitas más información? Envíanos un mensaje y te responderemos a la brevedad.
        </p>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Tu Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tu nombre completo"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Tu Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="tu.email@ejemplo.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 text-sm font-bold mb-2">
                Asunto:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Asunto de tu consulta"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                placeholder="Describe tu proyecto o consulta aquí..."
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
    