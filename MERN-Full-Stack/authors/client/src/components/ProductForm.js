import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
  //keep track of what is being typed via useState hook
  const { initialName, onSubmitProp } = props;
  const [name, setName] = useState(initialName); 
   //handler when the form is submitted
  const onSubmitHandler = e => {
      //prevent default behavior of the submit
      e.preventDefault();
      onSubmitProp({name});

  }
  //onChange to update firstName and lastName
  return (
      <form onSubmit={onSubmitHandler}>
          <p>
              <label> Name</label><br/>
              <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
          </p>
    
          <input type="submit"/>
      </form>
  )
}

export default ProductForm
