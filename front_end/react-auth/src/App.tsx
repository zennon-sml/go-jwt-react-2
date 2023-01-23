import { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import WrongRoute from './pages/WrongRoute';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  useEffect(() => {
          (
              async () => {
                  const response = await fetch('http://localhost:8000/v1/userauth', {
                      headers: {'Content-Type': 'application/json'},
                      credentials: 'include',
                  });
                  const content = await response.json();
                  setUsername(content.username)
                  setEmail(content.email)
                  
              }
          )();
      }
  );

  return (
    
    <div className="App">
        
        <BrowserRouter>
        <Nav name={username} setName={setUsername}/>
        
        <Routes>
          <Route path='/' element={<Home username={username} email={email}/>} />
          <Route path='/login' element={<Login setName={setUsername}/>} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<WrongRoute />} />
        </Routes>
      </BrowserRouter> 

    </div>
  );
}

export default App;
