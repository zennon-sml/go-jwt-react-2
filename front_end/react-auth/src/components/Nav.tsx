import { Link } from "react-router-dom";

const Nav = (props: { name: string, setName: (name: string) => void }) => {
  const logout = async () => {
  
    await fetch('http://localhost:8000/v1/logout', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
      });
      props.setName('')
  }

  let menu;
  //if the user is logedin it will show the logout option
  if (props.name) {
    menu = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
                <Link to="/login" className="nav-link" onClick={logout}>LOGOUT</Link>
            </li>
        </ul>
    )
  } else {  // and else it will show the login/register option
    menu = (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
                <Link to="/login" className="nav-link">LOGIN</Link>
            </li>
            <li className="nav-item active">
                <Link to="/register" className="nav-link">REGISTER</Link>
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