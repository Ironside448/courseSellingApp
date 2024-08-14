// import { useState } from 'react'
import './App.css'
// import * as React from 'react';
import Navbar from './component/Navbar';
import Signin from './component/Signin';
import Signup from './component/Signup';
import AddCourse from './component/AddCourse';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import React, {useEffect} from 'react';

function App() {
  // useEffect(()=>{
  //   fetch('http://localhost:3000/admin')
  //   .then(response=>response.json())
  //   .then(data=>console.log(data));
  // },[]);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addCourse" element={<AddCourse />} />
        </Routes>
      </div>
    </Router> 
  )
}

export default App
