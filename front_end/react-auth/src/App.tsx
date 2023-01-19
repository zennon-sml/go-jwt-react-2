import React from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import WrongRoute from './pages/WrongRoute';
function App() {
  return (
    
    <div className="App">
        
        <BrowserRouter>
        <Nav />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<WrongRoute />} />
        </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
