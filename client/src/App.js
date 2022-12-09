// import React, {useEffect, useState} from 'react'

// function App(){

//   const [backendData, setBackendData] = useState([{}])


//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])

//   return (
//     <div>

//       {(typeof backendData.users === 'undefined') ?(
//         <p>Loading...</p>
//       ): (
//         backendData.users.map((user, i) => (
//           <p key={i}>{user}</p>
//         ))
//       )}

//     </div>
//   )
// }

// export default App

import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from 'axios'

function App() {

const [name, setName]=useState('');

const submitName = () => {
  Axios.post("http://localhost:3000/api/insert", {name: name}).then(()=> {
    alert("successfull insert")
  })
};

  return(
    <div className="App">
      <h1>CRUD</h1>
      <div className="form">
        <label>Tên môn học</label>
        <input type= "text" name="name" onChange={(e) => {
          setName(e.target.value)
        }}></input>

        <button onClick={submitName}>Submit</button>
      </div>
    </div>
  );
}

export default App