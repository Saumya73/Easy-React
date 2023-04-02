import React from 'react';
import  ReactDOM  from 'react-dom/client';

/**
 * Header 
 *    logo
 *    navbar
 * BODY
 *    search
 *    resraurant container
 *    restaurant card
 * FOOTER
 *    Copyrights
 *    link
 *    address  
 *    contact
 * 
 *    
 */  

const Header = () => {
    return(
     <div className='header'>
      <div className='logo'>
        <img src='https://static.vecteezy.com/system/resources/thumbnails/002/285/940/small_2x/green-heeathy-food-with-spoon-fork-logo-free-vector.jpg'/>
      </div>
      <div className='nav-links'>
      <ul>
      <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>

      </div>
     </div>
    );
};

// const Body = () => {
//     return(
//         <div className='body'>
//         <div className='search'>Search</div>
//         <div className='restro-container'>

//         </div>

//         </div>
//     )
// }

const AppLayout = () => {
    return(
        <div className="app">
          <Header/>
        {/* <Body/> */}
        </div>
    )
}


  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);