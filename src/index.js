import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './pages/App';
// import reportWebVitals from './reportWebVitals';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
      <App />
    <Footer/>
  </React.StrictMode>
);