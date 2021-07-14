import React,{Component}  from 'react';

class PersonCard extends Component{
    render(){
        var {firstName,age,hairColor,lastName}=this.props;
        return(
                    <div>

                    <>
                   <h1> {firstName},{lastName}</h1> 
                   <br> 
                   </br>
                   <> age: {age}  </>
                   <br> 
                   </br>
                   Hair Color :{hairColor}
            </>
            </div>













        );







    }




}







export default PersonCard ;