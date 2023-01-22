import React, { useState } from "react";
import { Link } from "react-router-dom";

// const Nav = (props: {username: string, setName: (userName: string) => void}) => {
//     const logout = async () => {
//       await fetch('http://localhost:8000/v1/logout',{
//         method: 'POST',
//         headers: {'Content-Type': 'application-json'},
//         credentials: 'include'
//       })
//       props.setName('');
//     }

//     let menu;
//     if(props.username === ''){
//       menu = (
//         <ul className="navbar-nav me-auto mb-2 mb-md-0">
//           <li className="nav-item">
//             <Link to="/login" className="nav-link active" aria-current="page" >LOGIN</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/register" className="nav-link active" aria-current="page" >REGISTER</Link>
//           </li>
//         </ul>
//       )
//     }else{
//       menu = (
//         <ul className="navbar-nav me-auto mb-2 mb-md-0">
//           <li className="nav-item">
//             <Link to="/login" className="nav-link active" aria-current="page" onClick={logout}>LOGOUT</Link>
//           </li>
//         </ul>
//       )
//     }  
const Nav = (props: { name: string, setName: (name: string) => void }) => {
  const logout = async () => {
      await fetch('http://localhost:8000/api/logout', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
      });

      props.setName('');
  }

  let menu;

  if (props.name === '') {
      menu = (
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item active">
                  <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item active">
                  <Link to="/register" className="nav-link">Register</Link>
              </li>
          </ul>
      )
  } else {
      menu = (
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item active">
                  <Link to="/login" className="nav-link" onClick={logout}>Logout</Link>
              </li>
          </ul>
      )
  }

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >HOME</Link>

         <div>
          {menu}
         </div>
        </div>
      </nav>
    )
}

export default Nav;