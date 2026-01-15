
// src/components/PaymentStep.tsx
import React from 'react';

interface PaymentStepProps {
  step: string;
  percentage: string;
  description: string;
  index: number;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ step, percentage, description, index }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg">
        {index + 1}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-blue-800 mb-1">{step} - {percentage}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default PaymentStep;
    