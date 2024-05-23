import React from 'react';

const Progress = ({ step }) => {
  return (
    <div className="flex w-full max-w-xs mb-4 justify-center items-center px-2">
      {[1, 2,'% OFF'].map((s, index) => (
        <div
          key={index}
          className={`flex-1 h-8 mx-1 ${index + 1 <= step ? 'bg-[#FF4713]' : 'bg-gray-200'} rounded flex justify-center items-center`}
          style={{ flex: '1 1 25%' }}
        >
          <div className="text-center text-white text-xl font-bold">{s}</div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
