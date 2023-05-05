import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
//import restroObjList from "./utils/mockdata";
import Shimmer from "./Shimmer";

function filterData(searchText, listofRestro) {
       const filterData =  listofRestro.filter((restaurant) => 
       restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
        ) ;
        return filterData;    
}

const Body = () => {
    
  const [alllistofRestro, setalllistofRestro] = useState([]);
    const [filterlistofRestro, setfilterlistofRestro] = useState([]);
    const [searchText, setsearchText] = useState("");
   // let searchText = "Goa"

 useEffect(() => {
  //API Call
     getRestaurants();
 } ,[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.5084466&lng=73.8389657&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
   setalllistofRestro(json?.data?.cards[2]?.data?.data?.cards);
   setfilterlistofRestro(json?.data?.cards[2]?.data?.data?.cards);
  }

 // console.log("render");



//not render component (early return)
if(!alllistofRestro) return null;


// if(filterlistofRestro?.length === 0)
//   return <h1>No restaurant of your choice found!!</h1>

// conditional Rendering
//  if restaurant is empty - shimmer ui
//  else, restaurant has data - actual data UI

    return (alllistofRestro.length === 0) ? (<Shimmer/>) :  (
        <div className='body'>
        <div className="search-container">
            <input className="search-input"
             type="text"
              placeholder="Search a restaurant.."
               value={searchText} 
               onChange={(e) => setsearchText(e.target.value)}
               ></input>
            
            <button className="search-btn" 
             onClick={() => {
           const data = filterData(searchText, alllistofRestro);
           setfilterlistofRestro(data);
            }}
            >
            Search
            </button>
        </div>

        <div className='restro-container'>        
        {
            filterlistofRestro.map((restaurant) =>{
            return(
          <RestaurantCard key={restaurant.data.id} restroData={restaurant}/>
            );
        })}
         </div>
           </div>
    );
};

export default Body;