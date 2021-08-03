import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = () => {
    
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
    const createProduct = product2 => {
        axios.post('http://localhost:8000/api/product', product2)
            .then(res=>{
                console.log("hello")
                setProduct([...product, res.data]);
            })
    }
    return (
        <>
        <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
        <hr/>
            
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
       
        </>

    )
}

export default Main






