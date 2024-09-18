import React from 'react';

const DynamicBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-black animate-gradient-x"></div>
    </div>
  );
};

export default DynamicBackground;