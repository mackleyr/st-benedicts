import React from 'react';
import Progress from './Progress';

function EnterPhone() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-between py-4">
      <Progress step={3} /> {/* Full progress bar */}
      <div className="w-full flex flex-col items-center justify-center flex-grow">
        <h2 className="text-center text-3xl font-extrabold mt-2">
          Want more nearby deals?
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-4 mb-8">
          <img src="https://example.com/path/to/image1.png" alt="Logo 1" className="w-16 h-16 mx-2 mb-4" />
          <img src="https://example.com/path/to/image2.png" alt="Logo 2" className="w-16 h-16 mx-2 mb-4" />
          <img src="https://example.com/path/to/image3.png" alt="Logo 3" className="w-16 h-16 mx-2 mb-4" />
          <img src="https://example.com/path/to/image4.png" alt="Logo 4" className="w-16 h-16 mx-2 mb-4" />
          <img src="https://example.com/path/to/image5.png" alt="Logo 5" className="w-16 h-16 mx-2 mb-4" />
          <img src="https://example.com/path/to/image6.png" alt="Logo 6" className="w-16 h-16 mx-2 mb-4" />
          <img src="https://example.com/path/to/image7.png" alt="Logo 7" className="w-16 h-16 mx-2 mb-4" />
          <img src="https://example.com/path/to/image8.png" alt="Logo 8" className="w-16 h-16 mx-2 mb-4" />
        </div>
        <div className="flex items-center justify-center w-11/12 max-w-md mb-8">
          <input
            type="text"
            className="border border-gray-300 rounded-l-full py-4 px-6 w-full"
            placeholder="Enter Phone Number"
          />
          <button className="bg-primary text-secondary py-4 px-6 rounded-r-full font-bold">
            ✓
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mb-8">
          We will not share your number with anyone
        </p>
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

export default EnterPhone;
