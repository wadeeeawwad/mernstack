import React from 'react'


const VarNumber = (props) => {
    const{variable}=props;


    return (
        <div>
      {  isNaN(variable)?<h1 style={{backgroundColor:props.color,color:props.color2}}>
      this is word {variable}</h1>:<h1>this is number {variable}</h1>}

        </div>
    )
}

export default VarNumber

