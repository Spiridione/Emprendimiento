
// src/components/Header.tsx
import React, { useState } from 'react';
import { EXPERT_INFO } from '../constants';

interface HeaderProps {
  expertEmail: string;
  expertPhone: string;
}

const Header: React.FC<HeaderProps> = ({ expertEmail, expertPhone }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: "Inicio", href: "#hero" },
    { name: "Sobre Mí", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Software", href: "#software" },
    { name: "Proceso & Pagos", href: "#process-payments" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo/Name */}
        <a href="#hero" className="text-2xl font-bold text-blue-800 hover:text-blue-900 transition-colors duration-300">
          MV Spiridione Puzzar
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md pb-4">
          <nav className="flex flex-col items-center space-y-4 px-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 w-full text-center py-2"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-200 w-full flex flex-col items-center space-y-3">
              <a
                href={EXPERT_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md text-center w-4/5 sm:w-3/5"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${expertEmail}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md text-center w-4/5 sm:w-3/5"
              >
                Email
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
    