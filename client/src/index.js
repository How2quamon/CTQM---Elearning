import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './pages/App';
// import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import {UserContextProvider} from './components/Context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <Navbar/>
        <App />
      <Footer/>
    </UserContextProvider>
  </React.StrictMode>
);