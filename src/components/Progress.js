import React from 'react';

const Progress = ({ step }) => {
  return (
    <div className="flex justify-center mb-4 w-full max-w-xs">
      {[1, 2, 3].map(num => (
        <div key={num} className={`w-8 h-8 flex items-center justify-center border ${step === num ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
          {num}
        </div>
      ))}
    </div>
  );
};

export default Progress;
