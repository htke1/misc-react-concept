import React from 'react';

function Checkit({name}) {
    if(name==="Raju"){
        throw new Error("Tibetan name pls");
    }
    return (
        <div>
           <h2>{name}</h2> 
        </div>
    );
}

export default Checkit;