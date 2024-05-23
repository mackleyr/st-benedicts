import React from 'react';
import { useNavigate } from 'react-router-dom';
import Progress from './Progress';  // Ensure the import path is correct

function SelectRole() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between py-4">
      <div className="pt-4 w-full flex justify-center items-center px-4">
        <Progress step={1} />
      </div>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-center text-3xl font-extrabold mt-2">
          <span className="text-primary">Step 1:</span> I am an...
        </h2>
        <div className="flex items-center mb-4">
          <div className="relative w-24 h-12">
            <img
              src="https://example.com/path/to/austin-bouldering-project-logo.png"
              alt="Austin Bouldering Project"
              className="w-12 h-12 rounded-full absolute left-0 top-0 border-2 border-white"
            />
            <img
              src="https://example.com/path/to/st-benedict-coffee-logo.png"
              alt="St Benedict Coffee"
              className="w-12 h-12 rounded-full absolute left-6 top-0 border-2 border-white"
            />
          </div>
          <h1 className="text-center text-l font-bold ml-1">Austin Bouldering Project</h1>
        </div>
      </div>

      <div className="w-full flex flex-col items-center space-y-4 mb-20">
        <button
          className="bg-primary text-secondary py-6 w-2/3 rounded-xl text-xl font-bold shadow-xl hover:bg-hoverPrimary active:bg-activePrimary"
          onClick={() => navigate('/use-deal/visitor')}
        >
          Visitor
        </button>
        <button
          className="bg-primary text-secondary py-6 w-2/3 rounded-xl text-xl font-bold shadow-xl hover:bg-hoverPrimary active:bg-activePrimary"
          onClick={() => navigate('/use-deal/member')}
        >
          Member
        </button>
        <button
          className="bg-primary text-secondary py-6 w-2/3 rounded-xl text-xl font-bold shadow-xl hover:bg-hoverPrimary active:bg-activePrimary"
          onClick={() => navigate('/use-deal/staff')}
        >
          Staff
        </button>
      </div>

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

export default SelectRole;
