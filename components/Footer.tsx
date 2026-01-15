
// src/components/Footer.tsx
import React from 'react';

interface FooterProps {
  expertName: string;
  expertEmail: string;
  expertPhone: string;
}

const Footer: React.FC<FooterProps> = ({ expertName, expertEmail, expertPhone }) => {
  const currentYear = new Date().getFullYear();
  const whatsappLink = `https://wa.me/58${expertPhone}`; // Assuming 58 is country code for Venezuela

  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Brand/Name */}
        <h3 className="text-2xl font-bold text-white mb-4">{expertName}</h3>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0 mb-6">
          <p className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <span>{expertEmail}</span>
          </p>
          <p className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
            <span>{expertPhone}</span>
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-6 space-x-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 shadow-md inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.04 2.11c-5.46 0-9.91 4.45-9.91 9.91 0 1.63.4 3.2.98 4.6l-1.07 3.93 4.01-1.05c1.38.76 2.92 1.17 4.54 1.17 5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zm0 18.04c-1.48 0-2.92-.41-4.18-1.16l-.29-.17-3.03.79.8-2.96-.19-.3c-.8-.94-1.27-2.12-1.27-3.39 0-4.54 3.7-8.24 8.24-8.24s8.24 3.7 8.24 8.24c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.48-.73-1.71-.81-.23-.08-.4-.08-.57.08-.18.25-.66.81-.8 1.05-.14.25-.29.27-.54.12-.25-.12-1.05-.39-1.99-1.23-.74-.65-1.24-1.46-1.39-1.71-.14-.25-.01-.39.11-.51.1-.1.25-.25.37-.39.12-.12.16-.25.25-.42.08-.18.04-.32-.01-.45-.05-.12-.4-.95-.54-1.23-.14-.27-.29-.23-.49-.23h-.49c-.21 0-.54.08-.81.35-.27.27-1.05 1.02-1.05 2.47 0 1.45 1.08 2.87 1.23 3.07.15.2.29.41.6.85.3 43.85 1.39 2.37 2.76 3.19.78.47 1.39.76 1.88.98.66.3.93.25 1.28.16.38-.08 1.48-.6 1.7-1.18.22-.59.22-1.09.15-1.23-.06-.14-.24-.23-.5-.35z"></path></svg>
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${expertEmail}`}
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-5 rounded-full transition-colors duration-300 shadow-md inline-flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10.05 11.23a2.997 2.997 0 003.9 0l8.047-5.346C20.669 4.156 18.253 2 12 2 5.748 2 3.332 4.156 2.003 5.884zM22 8.001v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8.001l10 6.666L22 8.001z"></path></svg>
            <span>Email</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {currentYear} {expertName}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
    