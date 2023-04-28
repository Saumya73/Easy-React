import { CDN_URL } from "./utils/constants";


const stylecard = {
    backgroundColor: "#D3D3D3"
}

const RestaurantCard = (props) => {     
  
    const {restroData} = props;
      // console.log(props);
      const {name, cuisines, avgRating, deliveryTime, costForTwo} = restroData?.data          //  optional chaining
      return(
        <div className='restro-card' style={stylecard}>
        <div>
          <img className='restro-logo' src={CDN_URL+restroData.data.cloudinaryImageId} />
        </div>
           <h3>{name}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating}stars</h4>
           <h4>{deliveryTime}min</h4>
           <h4>Rs.{costForTwo/100} for two</h4>
          
        </div>
      )
  }

export default RestaurantCard;