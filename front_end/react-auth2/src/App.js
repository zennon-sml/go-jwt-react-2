import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
