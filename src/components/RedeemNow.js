import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'; // Ensure you have installed react-confetti package

function RedeemNow({ show, onClose, imageUrl, dealTitle, onRedeem }) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  if (!show) {
    return null;
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleRedeemClick = () => {
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
      onRedeem();
    }, 5000); // Confetti will last for 5 seconds
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)', // Black with 80% opacity
      zIndex: 1000, // High z-index to cover everything
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: 'calc(100% - 2rem)', // Full width minus padding
        maxHeight: 'calc(100% - 2rem)', // Max height minus vertical padding
        overflowY: 'auto', // Allows scrolling
        backgroundColor: 'white',
        borderRadius: '10px',
        position: 'relative', // Adjusted to relative
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center content horizontally
        paddingBottom: '20px', // Add padding to the bottom
      }}>
        {confetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
        <img src={imageUrl} alt="St Benedict Coffee" style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
        }} />
        <h2 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
          <span style={{ color: '#FF4713' }}>Step 3:</span> 20% off any purchase
        </h2>
        <div className="flex items-center justify-center w-full px-4 mb-2">
          <img
            src={imageUrl}
            alt="St Benedict Coffee"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-center text-l ml-2">at <span className="font-bold">St Benedict Coffee</span></p>
        </div>
        <p style={{ margin: '20px 0', textAlign: 'center' }}>
          How it works:<br />
          1. Visit shop,<br />
          2. Present this coupon,<br />
          3. Enjoy deal.
        </p>
        <button onClick={timeLeft > 0 ? handleRedeemClick : null} style={{
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: timeLeft > 0 ? '#FF4713' : '#D1D3D9',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '5px'
        }}>
          {timeLeft > 0 ? `redeem: ${formatTime(timeLeft)}` : 'expired'}
        </button>
      </div>
    </div>
  );
}

export default RedeemNow;
