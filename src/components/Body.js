import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restroObjList from "./utils/mockdata";

function filterData(searchText, listofRestro) {
       const filterData =  listofRestro.filter((restaurant) => 
       restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
        ) ;
        return filterData;    
}

const Body = () => {

    const [listofRestro, setlistofRestro] = useState(restroObjList);
    const [searchText, setsearchText] = useState("");
   // let searchText = "Goa"

 useEffect(() => {
  //API Call
     getRestaurants();
 } ,[]);

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.5084466&lng=73.8389657&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
   setlistofRestro(json?.data?.cards[2]?.data?.data?.cards);
  }

  console.log("render");

    return(
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
           const data = filterData(searchText, listofRestro);
           setlistofRestro(data);
            }}
            >
            Search
            </button>
        </div>

        <div className='restro-container'>        
        {
            listofRestro.map((restaurant) =>{
            return(
          <RestaurantCard key={restaurant.data.id} restroData={restaurant}/>
            );
        })}
         </div>
           </div>
    );
};

export default Body;