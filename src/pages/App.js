import React from 'react';
import '../css/App.css';
import Homepage from './Homepage';
import Login from './Login';
import DangKi from './DangKi';
import ViewMore from './ViewMore';
function App() {
  return (
    <div className="App">
       {/* <Login/> */}
       <Homepage/>
       <ViewMore/>
    </div>
  );
}

export default App;
