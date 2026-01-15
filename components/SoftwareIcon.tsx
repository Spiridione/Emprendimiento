
// src/components/SoftwareIcon.tsx
import React from 'react';

interface SoftwareIconProps {
  name: string;
  // In a real application, you might use a map for SVG imports or a specialized icon library.
  // For this exercise, we'll use a placeholder generic icon.
}

const SoftwareIcon: React.FC<SoftwareIconProps> = ({ name }) => {
  // A simple icon placeholder. For a real app, you'd use specific SVG icons or images.
  const getIcon = (softwareName: string) => {
    switch (softwareName.toLowerCase()) {
      case 'sas':
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SAS_logo.svg/1200px-SAS_logo.svg.png" alt="SAS logo" className="h-10 w-auto" />;
      case 'r':
        return <img src="https://www.r-project.org/Rlogo.svg" alt="R logo" className="h-10 w-auto" />;
      case 'spss':
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/IBM_SPSS_Statistics_logo.svg/1200px-IBM_SPSS_Statistics_logo.svg.png" alt="SPSS logo" className="h-10 w-auto" />;
      case 'stata':
        return <img src="https://www.stata.com/images/Stata_logo.svg" alt="Stata logo" className="h-10 w-auto" />;
      case 'statgraphics':
        return <img src="https://www.statgraphics.com/img/statgraphics-logo-white-on-transparent.png" alt="Statgraphics logo" className="h-10 w-auto bg-blue-700 p-1 rounded" />; // Added bg for visibility
      case 'python':
        return <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="Python logo" className="h-10 w-auto" />;
      default:
        // Generic icon for unknown software
        return (
          <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
        );
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
      <div className="mb-3">
        {getIcon(name)}
      </div>
      <p className="text-lg font-medium text-gray-700">{name}</p>
    </div>
  );
};

export default SoftwareIcon;
    