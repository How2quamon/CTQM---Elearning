import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Homepage from './Homepage';
import Login from './Login';
import DangKi from './DangKi';
import ViewMore from './ViewMore';
import VideoCourse from './VideoCourse';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Trang chủ */}
          <Route exact path='/' element={ <Homepage/> } />
          <Route exact path='/home' element={ <Homepage/> } />

          {/* Đăng nhập */}
          <Route exact path='/log-in' element={ <Login /> } />

          {/* Đăng ký */}
          <Route exact path='/register' element={ <DangKi /> } />

          {/* Hồ sơ */}

          {/* Instructor */}

          {/* Xem khoá học */}
          <Route exact path='/ViewMore' element={ <ViewMore/> } />

          {/* Trả phí */}
          <Route exact path='/VideoCourse' element={ <VideoCourse /> } />

          {/* Contact us */}
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;