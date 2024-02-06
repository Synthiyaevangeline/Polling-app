// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';




const App = () => {
  return (
    
    <Router>
      <div>
  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/home"
            element= {<Home />}/>
         
        </Routes>
       
      </div>
    </Router>
  );
};

export default App;
