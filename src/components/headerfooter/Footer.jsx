import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto flex flex-wrap justify-center">
        {/* Logo and tagline */}
        <div className="md:w-1/3 w-full px-4 mb-8 md:mb-0">
          <div className="text-center">
            <h2 className="font-semibold text-white text-2xl">
              <span className="text-red-500 border-red-500 border-t-4 border-l-4 px-1">Ed</span>ucati
              <span className="text-red-500 border-red-500 border-b-4 border-r-4 px-1">on</span>
            </h2>
            <p className="text-white text-sm mt-2">A well-educated mind is the key that unlocks all chains</p>
          </div>
        </div>

        {/* Courses */}
        <div className="md:w-1/3 w-full px-4 mb-8 md:mb-0">
          <div className="text-center">
            <h1 className="font-bold text-white text-2xl mb-4">
              <span className="border-b-4 border-red-500">Courses</span>
            </h1>
            <ol className="text-white">
              <li>Full Stack Java developer</li>
              <li>Full stack Python developer</li>
              <li>MEAN Stack developer</li>
              <li>MERN Stack developer</li>
              <li>Data Analytics</li>
              <li>Automation/Manual Testing</li>
            </ol>
          </div>
        </div>

        {/* Branches */}
        <div className="md:w-1/3 w-full px-4">
          <div className="text-center">
            <h1 className="font-bold text-white text-2xl mb-4">
              <span className="border-b-4 border-red-500">Branches</span>
            </h1>
            <ol className="text-white">
              <li>Bangalore</li>
              <li>Hyderabad</li>
              <li>Pune</li>
              <li>Chennai</li>
              <li>Mumbai</li>
            </ol>
          </div>
        </div>
      </div>
    </footer>
  );
}
