import React from 'react';
import  ReactDOM  from 'react-dom/client';

const heading = React.createElement("h1", 
{
    id:"heading"
}, "Namastee React using React Create Element");

// console.log(heading);

const jsxHeading = <h1 id='jsxheading'>Namaste React using JSX</h1>;    //react element

// console.log(jsxHeading);



//React Functional Component

const HeadingComponent1 = () => {
    return <h2>Namste Functional Component 1</h2>;
};

const number = 100;

//Component composition - passing component inside component

//React Fragment
const HeadingComponent2 = () => (
    <>
    <div>
    <HeadingComponent1/>                                                   
    {heading}
    <h2>{number}</h2>
    {number}
  <h4>  {2+5+1+1+9+9+8} </h4>
  <h5>{console.log("ggddd")}</h5>
     <h2>Namste Functional Component 2</h2>    
     </div>   
     
     <div>
     <h2>{number}</h2>
    <HeadingComponent1/>                                                    
     </div> 
     </>  
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2/>);