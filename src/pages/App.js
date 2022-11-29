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
          <Route exact path='/' element={ <Homepage/> } />
          <Route exact path='/Home' element={ <Homepage/> } />
          <Route exact path='/ViewMore' element={ <ViewMore/> } />
          <Route exact path='/VideoCourse' element={ <VideoCourse /> } />
          <Route exact path='/Login' element={ <Login /> } />
          <Route exact path='/Register' element={ <DangKi /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
