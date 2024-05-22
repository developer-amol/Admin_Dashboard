import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'; 
import Ecg from '../assets/ecg.png';

export default function Dashboard() {
  return (
    <>
      <div className="p-1">
        {/* Main content goes here */}
        <div className="container mx-auto mt-2"> {/* Added value for mt- class */}
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gradient-to-br from-pink-600 to-pink-400 p-1 rounded-lg shadow-md">
              <div className='flex items-center mb-1'> {/* Added items-center class */}
                <div>
                  <label htmlFor="" ><AccountCircleRoundedIcon  className='text-white'/></label>
                </div>
                <div>
                  <span className='text-white font-bold'>People's</span> {/* Added text-white class */}
                </div>
              </div> 
              <hr />
              <div className='flex justify-center items-center p-2' style={{ maxWidth: '100px' }}> {/* Added items-center class and inline style */}
                <img src={Ecg} alt="" style={{ maxWidth: '100%', height: 'auto' }} /> {/* Corrected image source and added inline style */}
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-400 p-1 rounded-lg shadow-md">
              {/* Added space between icon and text */}
              <div className='flex items-center mb-1'> {/* Added items-center class */}
                <div>
                  <label htmlFor="" ><AccountCircleRoundedIcon  className='text-white'/></label>
                </div>
                <div>
                  <span className='text-white font-bold'>People's</span> {/* Added text-white class */}
                </div>
              </div> 
              <hr />
              <div className='flex justify-center items-center p-2' style={{ maxWidth: '100px' }}> {/* Added items-center class and inline style */}
                <img src={Ecg} alt="" style={{ maxWidth: '100%', height: 'auto' }} /> {/* Corrected image source and added inline style */}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-600 to-gray-400 p-4 rounded-lg shadow-md">
              Box 3
            </div>
            <div className="bg-gradient-to-br from-red-600 to-red-400 p-4 rounded-lg shadow-md">
              Box 4
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
