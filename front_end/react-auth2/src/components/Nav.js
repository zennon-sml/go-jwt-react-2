import React from "react";
import {Link} from "react-router-dom"

const Nav = () => {
    return (
      <div>
      <Link to="/login">login</Link>
      {/* // <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      //   <div className="container-fluid">
      //     <Link to="/" className="navbar-brand" >HOME</Link>

      //    <div>
      //       <ul className="navbar-nav me-auto mb-2 mb-md-0">
      //         <li className="nav-item">
      //           <Link className="nav-link active" aria-current="page">LOGIN</Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link active" aria-current="page">REGISTER</Link>
      //         </li>
      //       </ul>
      //    </div>
      //   </div>
      // </nav> */}
    </div>
    )
}

export default Nav;