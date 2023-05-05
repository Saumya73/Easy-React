import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
import logo from "../assets/images/food_villa_logo.jpg";
import {Link} from "react-router-dom";

const Header = () => {

   // use useState for user logged in or logged out
   const [isLoggedin, setIsLoggedin] = useState(true);

    return(
     <div className='header'>
      <div className='logo'>
        <img src={logo}/>
      </div>

      <div className='nav-links'>
      <ul>
      <Link to="/"> <li>Home</li> </Link>
      <Link to="/about"> <li>About</li> </Link>
        
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
{/* conditional rendering for log-in and log-out */}
{isLoggedin ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedin(false)}
              >
                Logout
              </button>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedin(true)}>
                Login
              </button>
            )}
    
     </div>
    );
};

export default Header;