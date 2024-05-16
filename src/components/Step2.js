import React from 'react';
import { useLocation } from 'react-router-dom';
import Progress from './Progress';

const Step2 = () => {
  const location = useLocation();
  const { role } = location.state;

  const getDiscount = () => {
    switch (role) {
      case 'Visitor':
        return '10% Off for ABP Visitors';
      case 'Member':
        return '15% Off for ABP Members';
      case 'Staff':
        return '20% Off for ABP Staff';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <Progress step={2} />
      <img src="https://images.squarespace-cdn.com/content/v1/63a4d3707740015574350bc7/94581086-8179-4c95-a8ed-0113960580d4/sbc-master-logo-full-color.png" alt="St. Benedict Coffee Logo" className="blue-stroke h-20 w-20 mb-4" />
      <h1 className="text-2xl font-bold mb-4 text-center">{getDiscount()}</h1>
      <img src="https://us1-photo.nextdoor.com/business_logo/5f/61/5f6169857324388c03d5e288500b4910.jpg" alt="ABP Logo" className="rounded-full h-20 w-20 mb-4" />
      <button className="bg-blue-500 text-white py-2 px-4 mb-4 rounded w-full max-w-xs shadow-lg">
        Enjoy Deal
      </button>
      <button className="bg-gray-300 text-gray-500 py-2 px-4 rounded w-full max-w-xs shadow-lg">
        Save for Later
      </button>
    </div>
  );
};

export default Step2;
