import React from 'react';
import '../css/App.css';
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
       {/* <Login/> */}
       <Homepage/>
       <ViewMore/>    
       <VideoCourse/>
    </div>
  );
}

export default App;
