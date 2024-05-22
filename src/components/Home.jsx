import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import { MdOutlinePeople } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { CiDollar } from "react-icons/ci";
import { Line } from 'react-chartjs-2';
import stud2 from '../assets/stud2.png';
import { PieChart as MuiPieChart } from '@mui/icons-material'; // Renamed MuiPieChart
import App from "./BarChart/Index";
import PieChart from './BarChart/piechart';


export default function Dashboard() {

  return (
    <>
    <div className="container mx-auto mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {/* First box of students */}
        <div className="flex bg-gradient-to-br from-pink-600 to-pink-400 p-1 rounded-lg shadow-md px-2">
          <div className="flex items-center px-1">
            <MdOutlinePeople size={60} className='text-white' />
          </div>
          <div className='font-bold text-white py-4'>
            <div>
              <h2>Total Students</h2>
              <h1 className='text-xl'>3000+</h1>
            </div>
            <div>
              <div className="progress">
                <div className="progress-bar bg-danger " role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className='text-white text-xs'>75% Increase in 20 Days</p>
            </div>
          </div>
        </div>
        {/* Second box of students */}
        <div className="flex bg-gradient-to-br from-blue-600 to-blue-400 p-1 rounded-lg shadow-md px-2">
          <div className="flex items-center px-1">
            <MdOutlinePersonOutline size={60} className='text-white' />
          </div>
          <div className='font-bold text-white py-4'>
            <div>
              <h2>New Students</h2>
              <h1 className='text-xl'>280+</h1>
            </div>
            <div>
              <div className="progress">
                <div className="progress-bar bg-danger " role="progressbar" style={{ width: '60%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className='text-white text-xs'>60% Increase in 20 Days</p>
            </div>
          </div>
        </div>
        {/* Third box of Courses */}
        <div className="flex bg-gradient-to-br from-yellow-600 to-yellow-400 p-1 rounded-lg shadow-md px-2">
          <div className="flex items-center px-1">
            <LiaGraduationCapSolid size={60} className='text-white' />
          </div>
          <div className='font-bold text-white py-4'>
            <div>
              <h2>Courses</h2>
              <h1 className='text-xl'>18+</h1>
            </div>
            <div>
              <div className="progress">
                <div className="progress-bar bg-danger " role="progressbar" style={{ width: '77%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className='text-white text-xs'>77% Increase in 20 Days</p>
            </div>
          </div>
        </div>
        {/* Fourth box of Collection */}
        <div className="flex bg-gradient-to-br from-orange-600 to-orange-400 p-1 rounded-lg shadow-md px-2">
          <div className="flex items-center px-1">
            <CiDollar size={60} className='text-white' />
          </div>
          <div className='font-bold text-white py-4'>
            <div>
              <h2>Fees Collection</h2>
              <h1 className='text-xl'>3500$+</h1>
            </div>
            <div>
              <div className="progress">
                <div className="progress-bar bg-danger " role="progressbar" style={{ width: '35%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <p className='text-white text-xs'>77% Increase in 20 Days</p>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other grid items */}
      </div>
        {/* Main content off BarChart */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 py-2">
        <div className="grid grid-cols-12 gap-3">
          <div className="sm:col-span-9 col-span-12">
            <App />
          </div>
          <div className="sm:col-span-3 col-span-12">
            <PieChart />
          </div>
        </div>
    </div>
  </div>  

    </>
  );
}
