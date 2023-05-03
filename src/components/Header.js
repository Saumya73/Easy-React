import { LOGO_URL } from "./utils/constants";
import { useState } from "react";

const Header = () => {

   // use useState for user logged in or logged out
   const [isLoggedin, setIsLoggedin] = useState(true);

    return(
     <div className='header'>
      <div className='logo'>
        <img src={LOGO_URL}/>
      </div>

      <div className='nav-links'>
      <ul>
      <li>Home</li>
        <li>About</li>
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