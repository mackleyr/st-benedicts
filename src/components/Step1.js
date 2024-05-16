import React from 'react';
import { useNavigate } from 'react-router-dom';
import Progress from './Progress';

const Step1 = () => {
  const navigate = useNavigate();

  const handleSelection = (role) => {
    navigate('/step2', { state: { role } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <Progress step={1} />
      <img src="https://images.squarespace-cdn.com/content/v1/63a4d3707740015574350bc7/94581086-8179-4c95-a8ed-0113960580d4/sbc-master-logo-full-color.png" alt="St. Benedict Coffee Logo" className="blue-stroke h-20 w-20 mb-4" />
      <h1 className="text-2xl font-bold mb-4 text-center">I am an ABP...</h1>
      <img src="https://us1-photo.nextdoor.com/business_logo/5f/61/5f6169857324388c03d5e288500b4910.jpg" alt="ABP Logo" className="rounded-full h-20 w-20 mb-4" />
      <button onClick={() => handleSelection('Visitor')} className="bg-gray-300 text-gray-700 py-2 px-4 mb-4 rounded w-full max-w-xs shadow-lg">
        Visitor
      </button>
      <button onClick={() => handleSelection('Member')} className="bg-gray-300 text-gray-700 py-2 px-4 mb-4 rounded w-full max-w-xs shadow-lg">
        Member
      </button>
      <button onClick={() => handleSelection('Staff')} className="bg-gray-300 text-gray-700 py-2 px-4 mb-4 rounded w-full max-w-xs shadow-lg">
        Staff
      </button>
    </div>
  );
};

export default Step1;
