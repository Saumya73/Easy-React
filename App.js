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

const restroObjList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "526236",
      "name": "Starbucks Coffee",
      "uuid": "8c4034d2-8f5a-4053-9d56-cbf954e01f4d",
      "city": "63",
      "area": "Miramar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "e902c6a9f81d35d2a347f2e6666a6462",
      "cuisines": [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 6.099999904632568,
      "slugs": {
        "restaurant": "starbucks-coffee-miramar-panaji",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "Unit No. G2, Ground floor, Magsons Towers, Dayanand Bandodkar Marg, Miramar, Panaji, Goa 403001",
      "locality": "Magsons Towers",
      "parentId": 195515,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 5000,
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
        "totalFees": 5000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "5000",
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
      "adTrackingID": "cid=6456688~p=1~eid=00000187-6ab7-f061-23ee-2a6700c40175",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "526236",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 6.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
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
      "deliveryTime": 42,
      "minDeliveryTime": 42,
      "maxDeliveryTime": 42,
      "slaString": "42 MINS",
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
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
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
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "75854",
      "name": "KFC",
      "uuid": "8222e1cc-c2aa-45e0-a49f-531cadc2db2a",
      "city": "63",
      "area": "Porvorim",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 2.4000000953674316,
      "slugs": {
        "restaurant": "kfc-mall-de-goa-test-goa",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "KFC counter No.7 food court 3rd Mall De Goa Survey No. 73/1 Nova  Cdade Complex NH-17 Alto Porvorim Bardez Goa 403521",
      "locality": "Mall De Goa",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
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
        "restaurantId": "75854",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 2.4000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "77888",
      "name": "Cremeux",
      "uuid": "f04688ba-4375-4139-9512-7bdeaa1e5a88",
      "city": "63",
      "area": "Panjim",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "wqrrevwr7peimbiqr21n",
      "cuisines": [
        "Pizzas",
        "Italian-American",
        "Desserts",
        "Italian",
        "Bakery"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 26,
      "minDeliveryTime": 26,
      "maxDeliveryTime": 26,
      "slaString": "26 MINS",
      "lastMileTravel": 4.5,
      "slugs": {
        "restaurant": "cremeux-cafe-bistro-panaji-panaji",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "Cremeux Cafe & Bistro, Opposite Customs House, Menezes Building, MG Road, Panaji, Goa",
      "locality": "",
      "parentId": 7256,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3500,
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
        "totalFees": 3500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3500",
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
      "adTrackingID": "cid=6307804~p=31~eid=00000187-6ab7-f061-23ee-2a7100c41f06",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "77888",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 4.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "530105",
      "name": "Frankies Family Restaurant",
      "uuid": "aba6ec97-2d5d-4da9-afca-f5578f22340c",
      "city": "63",
      "area": "Betim",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "irlmzdfv4ieb5hdaw5ke",
      "cuisines": [
        "North Indian",
        "Seafood",
        "Chinese",
        "Biryani",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 1.399999976158142,
      "slugs": {
        "restaurant": "frankies-family-restaurant-bambolim-bambolim",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "H NO 558/1,MALIM-BETIM,BARDEZ,GOA, Betim, Bardez, North Goa , Goa, 403101",
      "locality": "Panaji",
      "parentId": 325929,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
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
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "530105",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "457471",
      "name": "La Pino'z Pizza",
      "uuid": "77b99d18-1826-495f-9e31-cbfbeeb477b1",
      "city": "63",
      "area": "Panaji",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "yu8lksmcuknfgesh8puj",
      "cuisines": [
        "Italian",
        "Pizzas",
        "Mexican",
        "Snacks",
        "Indian"
      ],
      "tags": [
        
      ],
      "costForTwo": 70000,
      "costForTwoString": "₹700 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "lapinoz-pizza-panaji-panaji",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "GROUND FLOOR, SHOP NO - 03 / 04, MANGUIRISH APARTMENT, 18TH JUNE ROAD, PANAJI, North Goa, Goa, 403001",
      "locality": "Manguirish Apartment",
      "parentId": 4961,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "25% off",
        "shortDescriptionList": [
          {
            "meta": "25% off | Use PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "25% off | Use code PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "25% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "25% off | Use code PARTY",
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
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "457471",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "588273",
      "name": "The Outpost By Sly Granny",
      "uuid": "04c9992a-b60b-4e3f-ad3d-472fb7945ca2",
      "city": "63",
      "area": "Panjim",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "xjd4bzh0h4xyge9tkaw4",
      "cuisines": [
        "Burgers",
        "Salads",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2.9000000953674316,
      "slugs": {
        "restaurant": "the-outpost-by-sly-granny-nerul-nor_baga-calangute",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "ground floor, MG road, old patto bridge, patto colony, panaji, goa 403001",
      "locality": "Panjim",
      "parentId": 351943,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
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
      "adTrackingID": "cid=6388728~p=7~eid=00000187-6ab7-f061-23ee-2a6900c4075c",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "2.9 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "588273",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.2",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "283089",
      "name": "Navaratna Udupi Pure Veg (NR)",
      "uuid": "e1bf8d24-eaeb-4f21-91c2-d093e7bea920",
      "city": "63",
      "area": "Porvorim",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "rnenjljwcwh240sjif9z",
      "cuisines": [
        "South Indian",
        "Indian",
        "Goan",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "yamuna-restaurant-by-navratna-porvorim-porvorim",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "H  no  818 1  Teen Building  Alto Betim  Porvorim Bardez Goa",
      "locality": "Alto Betim",
      "parentId": 393156,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
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
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "283089",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "480634",
      "name": "Babaji's Bakes N Juice",
      "uuid": "431aea33-b31d-417b-9c8b-b65cb4989115",
      "city": "63",
      "area": "Porvorim",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "chy5tdmy1xn0kpdsspwa",
      "cuisines": [
        "Bakery",
        "Juices"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "babaji's-bakes-n-juice-porvorim-porvorim",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "H. No M33, SHOP NO. 2 WARD IX ALTO BETIM,",
      "locality": "Ward Ix Alto Betim",
      "parentId": 288722,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
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
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "480634",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "266114",
      "name": "Wow! Momo",
      "uuid": "39e34985-a762-4a2e-8406-8a5b3d659856",
      "city": "63",
      "area": "Panjim",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "sz7widgnl3ommzw976q7",
      "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 3,
      "slugs": {
        "restaurant": "wow-momo-18th-june-road-panaji",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "Shop no. 10, Durga Chambers, 18th June Road, Panjim, Panjim 403001",
      "locality": "Panjim",
      "parentId": 1776,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 on select items | Use code SPECIALS",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3000,
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
        "totalFees": 3000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3000",
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
      "adTrackingID": "cid=6398330~p=10~eid=00000187-6ab7-f061-23ee-2a6a00c40a0f",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "266114",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 3,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "593010",
      "name": "Foodyffin",
      "uuid": "5fadafbb-330e-4e24-bb7d-a64930d74c75",
      "city": "63",
      "area": "Bardez",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "kghhkautxipm6h0jrmic",
      "cuisines": [
        "Chinese",
        "Goan",
        "Indian",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "foodyfin-by-sunil-verlekar-porvorim-porvorim",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "818/8 Teen Bldg, NH 66, Porvorim, Bardez, North Goa 403516",
      "locality": "Porvorim",
      "parentId": 354587,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "10% off",
        "shortDescriptionList": [
          {
            "meta": "10% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "10% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "10% off up to ₹40 | Use code TRYNEW",
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
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "593010",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "178669",
      "name": "Smokin' Joe's",
      "uuid": "fff3682c-e7fd-4e51-83c1-8239972c653c",
      "city": "63",
      "area": "Porvorim",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "s28ew9srvncrank7kotc",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 60000,
      "costForTwoString": "₹600 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "smokin-joes-porvorim-porvorim",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "Delfinos Mega Mart Food Court, next to Delfinos Pharmacy, Porvorim, Aradi Socorro, Goa 403501",
      "locality": "PDA Colony",
      "parentId": 189887,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
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
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "178669",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "340052",
      "name": "NIYAAZ PORVORIM",
      "uuid": "2036a3df-9888-4bea-8745-b5cce7ed2dbe",
      "city": "63",
      "area": "Porvorim",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "kentw8jyc0dyk9vffumi",
      "cuisines": [
        "North Indian",
        "Biryani",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 4,
      "slugs": {
        "restaurant": "b,-r.-enterprises-porvorim-porvorim",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "Chogm Rd, Porvorim, Sangolda, Goa 403501",
      "locality": "Sangolda",
      "parentId": 149532,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3500,
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
        "totalFees": 3500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3500",
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
      "adTrackingID": "cid=6307850~p=13~eid=00000187-6ab7-f061-23ee-2a6b00c40d21",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "340052",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "534645",
      "name": "Eat Me Home Cafe",
      "uuid": "7360a127-7fd2-44b0-9dfb-32c33baaa9c6",
      "city": "63",
      "area": "Porvorim",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "hnuhbyuu3yjk2ummdjwu",
      "cuisines": [
        "Indian",
        "Hyderabadi"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "mohammed-farid-ali-porvorim-porvorim",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "H.No. 851-7, Town Planners Colony,Alto-Porvorim, Bardez, North Goa",
      "locality": "Alto-Porvorim",
      "parentId": 336723,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "FLAT125 off",
        "shortDescriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
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
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "534645",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "389826",
      "name": "Areal Fast Food And Chaat Centre",
      "uuid": "70a74b1e-5ca4-4264-8990-b0ceeec0145a",
      "city": "63",
      "area": "Panaji",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "qlm1ccvjfympebikdjqj",
      "cuisines": [
        "Chinese",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 2.299999952316284,
      "slugs": {
        "restaurant": "areal-fast-food-and-chaat-centre-panaji-panaji",
        "city": "central-goa"
      },
      "cityState": "63",
      "address": "Shop No. 28, KTCL Bus Stand Terminus, tiswadi , north goa",
      "locality": "Ktcl Bus Stand Terminus",
      "parentId": 241206,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
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
      "lastMileTravelString": "2.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "389826",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 2.299999952316284,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  }
];
  


const RestaurantCard = (props) => {     
  
  const {restroData} = props;
    // console.log(props);
    const {name, cuisines, avgRating, deliveryTime, costForTwo} = restroData?.data          //  optional chaining
    return(
      <div className='restro-card' style={stylecard}>
      <div>
        <img className='restro-logo' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+restroData.data.cloudinaryImageId} />
      </div>
         <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}stars</h4>
         <h4>{deliveryTime}min</h4>
         <h4>Rs.{costForTwo/100} for two</h4>
        
      </div>
    )
}

const Body = () => {
    return(
        <div className='body'>
        <div className='search'>Search</div>
        <div className='restro-container'>
        
        {
          restroObjList.map((restaurant) =>(
          <RestaurantCard restroData={restaurant}/>
          ))
        }
      
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