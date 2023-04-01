import React from 'react';
import  ReactDOM  from 'react-dom/client';

// const heading = React.createElement("h1", 
// {
//     id:"heading"
// }, "Namastee React using ReactcreateElement");

// console.log(heading);

const jsxHeading = <h1 id='jsxheading'>Namaste React using JSX</h1>;    //react element

// console.log(jsxHeading);



//React Functional Component

const HeadingComponent1 = () => {
    return <h2>Namste Functional Component</h2>;
};

const HeadingComponent2 = () => (
     <h2>Namste Functional Component</h2>                               //both function component are same
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1/>);