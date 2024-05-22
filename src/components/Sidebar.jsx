import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faBook, faUserGraduate, faChalkboardTeacher, faClipboardList, faPollH, faVideo } from '@fortawesome/free-solid-svg-icons'; // Import icons

const Sidebar = ({ isMobile  }) => {
  return (
    <nav className="bg-white w-64 min-h-screen shadow-xl shadow-black my-2">
      <ul className=" py-2 text-black">
        <li className="py-1 flex items-center transition duration-300 ease-in-out hover:bg-customPurple transform hover:-translate-y-1 hover:scale-105"><Link to="/home" className=" block px-7 py-2 "><FontAwesomeIcon icon={faHome} className="mr-2" />Home</Link></li>
        <li className="py-1 flex items-center transition duration-300 ease-in-out hover:bg-customPurple transform hover:-translate-y-1 hover:scale-105"><Link to="/overview" className="block px-7 py-2 "><FontAwesomeIcon icon={faChartBar} className="mr-2" />Overview</Link></li>
        <li className="py-1 flex items-center transition duration-300 ease-in-out hover:bg-customPurple transform hover:-translate-y-1 hover:scale-105"><Link to="/courses" className="block px-7 py-2"><FontAwesomeIcon icon={faBook} className="mr-2" />Courses</Link></li>
        <li className="py-1 flex items-center transition duration-300 ease-in-out hover:bg-customPurple transform hover:-translate-y-1 hover:scale-105"><Link to="/students" className="block px-7 py-2"><FontAwesomeIcon icon={faUserGraduate} className="mr-2" />Students</Link></li>
        <li className="py-1 flex items-center transition duration-300 ease-in-out hover:bg-customPurple transform hover:-translate-y-1 hover:scale-105"><Link to="/teachers" className="block px-7 py-2"><FontAwesomeIcon icon={faChalkboardTeacher} className="mr-2" />Teachers</Link></li>
        <li className="py-1 flex items-center transition duration-300 ease-in-out hover:bg-customPurple transform hover:-translate-y-1 hover:scale-105"><Link to="/exam" className="block px-7 py-2"><FontAwesomeIcon icon={faClipboardList} className="mr-2" />Exam</Link></li>
        <li className="py-1 flex items-center transition duration-300 ease-in-out hover:bg-customPurple transform hover:-translate-y-1 hover:scale-105"><Link to="/result" className="block px-7 py-2"><FontAwesomeIcon icon={faPollH} className="mr-2" />Result</Link></li>
        <li className="py-1 flex items-center transition duration-300 ease-in-out hover:bg-customPurple transform hover:-translate-y-1 hover:scale-105"><Link to="/videos" className="block px-7 py-2"><FontAwesomeIcon icon={faVideo} className="mr-2" />Videos</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;