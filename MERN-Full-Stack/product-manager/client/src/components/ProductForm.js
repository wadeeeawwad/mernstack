import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
  //keep track of what is being typed via useState hook
  const { initialTitle, initialPrice,initialDescription, onSubmitProp } = props;
  const [title, setTitle] = useState(initialTitle); 
  const [price, setPrice] = useState(initialPrice);
  const [description, setDescription] = useState(initialDescription);
  //handler when the form is submitted
  const onSubmitHandler = e => {
      //prevent default behavior of the submit
      e.preventDefault();
      onSubmitProp({title, price,description});

  }
  //onChange to update firstName and lastName
  return (
      <form onSubmit={onSubmitHandler}>
          <p>
              <label> title</label><br/>
              <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
          </p>
          <p>
              <label>price</label><br/>
              <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
          </p>
          <p>
          <label>description</label><br/>
          <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description}/>
      </p>
          <input type="submit"/>
      </form>
  )
}

export default ProductForm
