import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Progress from './Progress';
import RedeemNow from './RedeemNow';

function UseDeal() {
  const { role } = useParams();
  const navigate = useNavigate();
  const [showRedeemNow, setShowRedeemNow] = useState(false);
  const [step, setStep] = useState(2);

  const getDiscount = (role) => {
    switch (role) {
      case 'visitor':
        return '15%';
      case 'member':
        return '20%';
      case 'staff':
        return '30%';
      default:
        return '0%';
    }
  };

  const discount = getDiscount(role);
  const roleCapitalized = role.charAt(0).toUpperCase() + role.slice(1); // Remove this if not used
  const dealTitle = `Step 3: ${discount} off any purchase`;
  const imageUrl = "https://www.simplyrecipes.com/thmb/t9ZeQC3Nb2YUoQTnxUJrjJbnKEA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Cold-Brew-Coffee-LEAD-16-428691bcdd594281b2f5dc6dbc8235e4.jpg";

  const handleRedeem = () => {
    setStep(3);
    setTimeout(() => {
      navigate('/enter-phone'); // Navigate to EnterPhone
    }, 1000); // Redirect after a short delay
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between py-4">
      <Progress step={step} />
      <div className="w-full flex flex-col items-center">
        <h2 className="text-center text-3xl font-extrabold mt-2">
          <span className="text-primary">Step 2:</span> {discount} off <span className="text-black">any purchase</span>
        </h2>
        <div className="flex items-center justify-center w-full px-4 mb-2"> {/* Center-aligned the content horizontally */}
          <img
            src={imageUrl}
            alt="St Benedict Coffee"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-center text-l ml-2">at <span className="font-bold">St Benedict Coffee</span></p> {/* Center-aligned the text */}
        </div>
      </div>

      <button
        className="bg-primary text-secondary py-6 w-2/3 rounded-xl text-xl font-bold shadow-xl hover:bg-hoverPrimary active:bg-activePrimary mb-20" // Adjusted margin-bottom here
        onClick={() => setShowRedeemNow(true)}
      >
        Use Now
      </button>

      <RedeemNow show={showRedeemNow} onClose={() => setShowRedeemNow(false)} imageUrl={imageUrl} dealTitle={dealTitle} onRedeem={handleRedeem}>
        <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', textAlign: 'center' }}>
          <div className="flex items-center justify-center w-full px-4 mb-2"> {/* Center-aligned the content horizontally */}
            <img
              src={imageUrl}
              alt="St Benedict Coffee"
              className="w-12 h-12 rounded-full"
            />
            <p className="text-center text-l ml-2">at <span className="font-bold">St Benedict Coffee</span></p> {/* Center-aligned the text */}
          </div>
          <p style={{ margin: '20px 0', textAlign: 'center' }}>
            How it works:<br />
            1. Visit shop,<br />
            2. Present this coupon,<br />
            3. Enjoy deal.
          </p>
        </div>
      </RedeemNow>

      <footer className="bg-primary text-secondary italic py-4 flex justify-center items-center w-full fixed bottom-0 left-0">
        <span>Powered by Friends & Family</span>
        <img
          src="placeholder-image.png"
          alt="Footer Logo 2"
          className="w-12 h-12 ml-4"
        />
      </footer>
    </div>
  );
}

export default UseDeal;
