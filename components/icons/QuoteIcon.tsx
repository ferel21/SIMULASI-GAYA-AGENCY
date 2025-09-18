
import React from 'react';

const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}
  >
    <path d="M6 3C3.79 3 2 4.79 2 7v6c0 2.21 1.79 4 4 4h2v-2H6c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h2V3H6zm9 0c-2.21 0-4 1.79-4 4v6c0 2.21 1.79 4 4 4h2v-2h-2c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h2V3h-2z"></path>
  </svg>
);

export default QuoteIcon;
