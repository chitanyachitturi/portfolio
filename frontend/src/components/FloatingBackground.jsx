import React from 'react';

const FloatingBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Floating circles */}
      <div 
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl animate-float-slow"
        style={{ backgroundColor: 'rgba(59, 130, 246, 0.08)' }}
      ></div>
      <div 
        className="absolute top-40 right-20 w-96 h-96 rounded-full blur-3xl animate-float-slower"
        style={{ backgroundColor: 'rgba(6, 182, 212, 0.08)' }}
      ></div>
      <div 
        className="absolute bottom-32 left-1/4 w-80 h-80 rounded-full blur-3xl animate-float-medium"
        style={{ backgroundColor: 'rgba(168, 85, 247, 0.08)' }}
      ></div>
      <div 
        className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full blur-3xl animate-float-slow"
        style={{ backgroundColor: 'rgba(99, 102, 241, 0.08)' }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-float-slower"
        style={{ backgroundColor: 'rgba(236, 72, 153, 0.08)' }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl animate-float-medium"
        style={{ backgroundColor: 'rgba(20, 184, 166, 0.08)' }}
      ></div>
    </div>
  );
};

export default FloatingBackground;
