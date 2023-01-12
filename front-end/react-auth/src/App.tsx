import React from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
function App() {
  return (
    
    <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />1
          <Route path="/register" element={<Register/>} />
       </Routes>

    </div>
  );
}

export default App;
