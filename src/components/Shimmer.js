const Shimmer = () => {
   return (
    <div className='restro-container'> 
    {
        Array(20).fill("").map((e,index) => (<div className="shimmer-ui" key={index}></div>) )
    }
    </div>
   );
};

export default Shimmer;