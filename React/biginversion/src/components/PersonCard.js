import React from 'react';

 const PersonCard = props => {
    return (
        <div>
        <h>{props.firstName}{"  "}{props.lastName}  </h>
        <p> {props.age} </p>
        <p>{props.hairColor}</p>



            
        </div>
    )
}
export default PersonCard ;