import React from 'react'


export const Result = (props) => {

        return (
            <div> 
                <h1>your form data </h1>
                <h4>First Name : {props.firstname} </h4>
                <h4>Last Name :  {props.lastname}</h4>
                <h4>Email : {props.email}</h4>
                <h4>Password : {props.password}</h4>
                <h4>Confirm Password : {props.ConfirmPassword}</h4>
            </div>
        );
    };
