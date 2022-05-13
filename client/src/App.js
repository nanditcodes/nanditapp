import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios'

function App() {

  const [userName, setUsername]= useState("");
  const [passWord, setPassword]= useState("");
  const  submituserpass = () => {
    Axios.post("http://localhost:3001/api/insert", {
      username: userName, 
      password: passWord,
    }).then(()=> {
      alert("successful insert");
    });
  };

  return (
    <div className="App">
    <h1>Login Portal</h1>
      <div className="form">
        <label>Username</label>
        <input type="text" name="Username" onChange={(e)=>{
        setUsername(e.target.value);
        }}/>
        <label>Password</label>
        <input type="text" name="Password" onChange={(e)=>{
        setPassword(e.target.value);
        }} /> 
        <button onClick={submituserpass}>Submit</button>
    </div>
    </div>
  );
}

export default App;
