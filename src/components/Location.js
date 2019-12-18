import React from 'react';

//conts Location = (props) => {
const Location = ({city}) => {

    //Destructuring

   //const { city }= props;
    return (
        <div>
            <h1>{ city }</h1>
        </div>
    );
};
export default Location;