import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios'
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index.js');
var usersRouter = require('./routes/App.js');


function App() {

  const [ user, setUser] = useState({
    Username:"",
    Password:""
})
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(session({ 
    secret: '123458cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
 
app.use(flash());
 

app.use('/', usersRouter);
 

app.use(function(req, res, next) {
  next(createError(404));
 
});
 

app.use(function(err, req, res, next) {
  
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; 
  res.status(err.status || 500);
  res.render('error');
   
});
 
app.listen(4000, function () {
    console.log('Node app is running on port 4000');
});
const handleChange = e => {
    const { name, value } = e.target
    setUser({
        ...user,
        [name]: value
    });
}
  
  const  submituserpass = () => {
	const { Username, Password} = user
    Axios.post("http://localhost:3001/api/insert",user)
	.then(()=> {
      alert("successful insert");
    });
  };

  return (
    <div className="App">
    <h1>Login Portal</h1>
      <div className="form">
        <label>Username</label>
        <input type="text" name="Username" onChange={ handleChange } />
        <label>Password</label>
        <input type="text" name="Password" onChange={ handleChange } /> 
        <button onClick={submituserpass}>Submit</button>
        <button>Forgot Password</button>
        <button>Update Password</button>
        
    </div>
    </div>
  );
}
export default App;
