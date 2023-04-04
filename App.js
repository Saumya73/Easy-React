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
 *         -img
 *         - restro name, star rating, cuisine , delivery time
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

const stylecard = {
    backgroundColor: "#D3D3D3"
}

const RestaurantCard = ({resName,cuisine,rating}) => {                              // Destructure 
    console.log(props);
    return(
      <div className='restro-card' style={stylecard}>
      <div>
        <img className='restro-logo' src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/dpqcjrxwruipnt1wyqnh' />
      </div>
         <h3>{resName}</h3>
         <h4>{cuisine}</h4>
         <h4>{rating}</h4>
         <h4>25min</h4>
      </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
        <div className='search'>Search</div>
        <div className='restro-container'>
         {/* //RestaurantCard */}
         <RestaurantCard resName="YO China" cuisine="Chinese,Goa,Asia" rating="4.4"/>
         <RestaurantCard resName="KFC" cuisine="Burger,Goa,Asia" rating="4.3" />
      
        </div>
            
        </div>
    )
}

const AppLayout = () => {
    return(
        <div className="app">
          <Header/>
        <Body/>
        </div>
    )
}


  

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);