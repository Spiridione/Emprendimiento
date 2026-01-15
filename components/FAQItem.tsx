
// src/components/FAQItem.tsx
import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none rounded-t-lg"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <svg
          className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-5 border-t border-gray-200 bg-white rounded-b-lg">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
    