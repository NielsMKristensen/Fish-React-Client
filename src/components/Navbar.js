import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";                     // <== IMPORT 
import { AuthContext } from "../context/auth.context"; 
import navBarPic from "../assets/trout.jpg"

function Navbar() {

  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav className="Navbar">
      
      <NavLink to="/"><a href=""><img src={navBarPic} alt="home gif" className="navBarPic" /></a> </NavLink>
 
      
      {isLoggedIn && (
        <>
        {/* add is owner to display create lake */}
          <Link to="/CreateLake">
            <button>Create Lake</button>
          </Link> 

          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>     
        </>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;