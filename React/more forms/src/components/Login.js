import React, { useState } from "react";
import { Result } from "./Result"

const Login = (props) => {
    const [firstname, setFirstnanme] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstnameError, setfirstnameError] = useState("");
    const [lastnameError,setlastnameError]=useState("");
    const[emailError,setEmailError]=useState("");
    const[passwordError,setPasswordError]=useState("");

    // const inputChange=(e)=>{
    //     setFirstnamme(e.target.value)
    //     console.log(e); 
    // }


    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { firstname, lastname, password, ConfirmPassword };
    //     console.log("welcome", newUser);
    //     setHasBeenSubmitted(true);
    // };
    

    // const formMessage=()=>{
    //     if(hasBeenSubmitted){
    //         return"thank you"
    //     }else{
    //         return"re submit"
    //     }
    // };
    const handlefirstname = (e) => {
        setFirstnanme(e.target.value);
        if (e.target.value.length < 1) {
            setfirstnameError("you shoul enter firstname")
        } else if (e.target.value.length <= 3) {
            setfirstnameError("first name should be 3 characters or longer!")
        }else {
            setfirstnameError("");
        }
    }


    const handlelastname=(e)=>{
        setLastname(e.target.value);
        if(e.target.value.length<1){
            setlastnameError("you shoul enter lastname")
        } else if (e.target.value.length < 2) {
            setlastnameError("Last name should be 2 characters at least")
        }else {
            setfirstnameError("");
        }}

    const handleEmail=(e)=>{
        setEmail(e.target.value);
        if(e.target.value.length<1){
            setEmailError("you shoul enter Email")
        } else if (e.target.value.length < 5) {
            setEmailError("Email should be 5 characters at least")
        }else {
            setEmailError("");
        }}

    const handlePassword=(e)=>{
        setPassword(e.target.value);
        if(e.target.value.length<1){
            setPasswordError("you shoul enter Password")
        } else if (e.target.value.length < 8) {
            setPasswordError("Password should be 8 characters at least")
        }else {
            setPasswordError("");
        }}

    




    return (
        <div>
        <form onSubmit={ (e) => e.preventDefault() }>

                {
                    hasBeenSubmitted ?
                        <h3>thank you</h3> :
                        <h3>please submit</h3>
                }
                <div>
                    <label>First name: </label>
                    <input type="text" onChange={handlefirstname} />
                    {
                        firstnameError ?
                            <p>{firstnameError}</p> : ""
                    }



                </div>
                <div>
                    <label>Last name: </label>
                    <input type="text" onChange={handlelastname} />
                    {
                        lastnameError?
                        <p>{lastnameError}</p>:""
                        
                    }
                </div>

                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} />
                    {
                        emailError?
                        <p>{emailError}</p>:""


                    }
                </div>

                <div>
                    <label>Password: </label>
                    <input type="password" onChange={handlePassword} />
                    {
                        passwordError?
                        <p>{passwordError}</p>:""

                    }
                  
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <Result firstname={firstname} lastname={lastname} email={email} password={password} ConfirmPassword={ConfirmPassword} />

        </div >
    );
};

export default Login;
