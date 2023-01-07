import React from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
function App() {
  return (
    
    <div className="App">
<Nav/>
<BrowserRouter>
<Route path="/register" exact component={Register} />
</BrowserRouter>
        {/* <BrowserRouter>
          <Nav />
          <Route path="/about"> <Home/></Route>
          <Route path="/"> <Home /> </Route>
          <Route path="/login"> <Login /> </Route>
          <Route path="/register"> <Register/> </Route>
       </BrowserRouter> */}
    </div>
  );
}

export default App;
