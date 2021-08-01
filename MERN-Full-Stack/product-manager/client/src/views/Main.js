import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import PersonList from '../components/ProductList';
const Main = () => {
    const [ message, setMessage ] = useState("Loading...")
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{
                setProduct(res.data);
                setLoaded(true);
            });
    },[product])
    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }
    return (
        <>
            <h2>Message from the backend: {message}</h2>
            <ProductForm/>
            <hr/>
            {loaded && <PersonList product={product} removeFromDom={removeFromDom}/>}
       
        </>

    )
}

export default Main






