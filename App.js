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

const restroObj = {
  "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "140915",
                  "name": "McDonald's",
                  "uuid": "09a18290-1ead-4987-a39e-0c8f3f7695e2",
                  "city": "63",
                  "area": "Porvorim",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "7bb739d7f6ae8b4ce8ed590765dffd2f",
                  "cuisines": [
                    "Burgers",
                    "Beverages",
                    "Cafe",
                    "Desserts"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 32,
                  "minDeliveryTime": 32,
                  "maxDeliveryTime": 32,
                  "slaString": "32 MINS",
                  "lastMileTravel": 2.4000000953674316,
                  "slugs": {
                    "restaurant": "mcdonalds-mall-de-goa-panaji",
                    "city": "central-goa"
                  },
                  "cityState": "63",
                  "address": "McDonalds Family Restaurants,3rd Floor, Food Court,624, Mall De Goa,NH 17, Near O Coquero Junction,Porvorim, Goa  403521 North Goa",
                  "locality": "Mall De goa",
                  "parentId": 630,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "aggregatedDiscountInfo": {
                    "header": "30% off",
                    "shortDescriptionList": [
                      {
                        "meta": "30% off | Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "aggregatedDiscountInfoV2": {
                    "header": "30% OFF",
                    "shortDescriptionList": [
                      {
                        "meta": "Use TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "30% off up to ₹75 | Use code TRYNEW",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "subHeader": "",
                    "headerType": 0,
                    "superFreedel": ""
                  },
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 2500,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 2500,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "2500",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "2.4 kms",
                  "hasSurge": false,
                  "sla": {
                    "restaurantId": "140915",
                    "deliveryTime": 32,
                    "minDeliveryTime": 32,
                    "maxDeliveryTime": 32,
                    "lastMileTravel": 2.4000000953674316,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": false,
                  "avgRating": "4.2",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
              }


const RestaurantCard = (props) => {     
  
  const {restroData} = props;
    console.log(props);
    return(
      <div className='restro-card' style={stylecard}>
      <div>
        <img className='restro-logo' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+restroData.data.cloudinaryImageId} />
      </div>
         <h3>{restroData.data.name}</h3>
         <h4>{restroData.data.cuisines.join(", ")}</h4>
         <h4>{restroData.data.avgRating}stars</h4>
         <h4>{restroData.data.deliveryTime}min</h4>
         <h4>Rs.{restroData.data.costForTwo/100} for two</h4>
        
      </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
        <div className='search'>Search</div>
        <div className='restro-container'>
         {/* //RestaurantCard */}
         <RestaurantCard restroData={restroObj}/>
        
      
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