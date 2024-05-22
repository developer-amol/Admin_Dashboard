import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Navbar from './components/headerfooter/Navbar';
import Footer from './components/headerfooter/Footer'
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Overview from './components/pages/Overview';
import Courses from './components/pages/Courses';
import Students from './components/pages/Students';
import Teachers from './components/pages/Teachers';
import Exam from './components/pages/Exam';
import Result from './components/pages/Result';
import Videos from './components/pages/Videos';



const App = () => {
  
  
  return (
    <Router>   
      <Navbar />  
      <div className='bg-gray-200'>
        <div className='ml-10 flex'>
        <Sidebar className='' />
          <Routes> 
            <Route path='/home' element={<Home />}/>
            <Route path='/overview' element={<Overview />}/>
            <Route path='/courses' element={<Courses />}/>
            <Route path='/Students' element={<Students />}/>
            <Route path='/Teachers' element={<Teachers />}/>
            <Route path='/Exam' element={<Exam />}/>
            <Route path='/Result' element={<Result />}/>
            <Route path='/Videos' element={<Videos />}/>
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
