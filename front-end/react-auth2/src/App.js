import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login'
import {createBrowserRouter,Router, Routes } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);


function App() {
  return (
    <div className="App">
      
      {/* <Router>
        <Routes path="/" component={<Nav />} />

      </Router> */}
    </div>
  );
}

export default App;
