import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router'



const Luke = () => {
    // const[state,setState]=useState();
    const[responding,setResponding]=useState([]);
    const[searchFor,setSearchFor]=useState("");
    const[id,setId]=useState(0);

    
    const axioss=(e)=>{
        e.preventDefault();
        axios.get('https://swapi.dev/api/'+searchFor+'/'+id)
            .then(response=>{setResponding(response.data)})
            navigate("/"+searchFor+"/"+id);
    }
    return (
        <div  style={{
        height: '700px',
        backgroundColor: 'White',}}>
        <form onSubmit={axioss}>
        Search for :<select value={searchFor} onChange={(e)=>setSearchFor(e.target.value)} style={{marginRight: '200px', marginTop: '20px'}}>
        <option value="people">people</option>
        <option value="planets">planet</option>
        </select>

        ID:<input type="text" value={id} onChange={(e)=>setId(e.target.value)} style={{marginRight: '200px', marginTop: '20px'}}></input>
        <button type="submit" >search</button>
        </form>
        
        <h1>{responding.name}</h1>
        <h2>{responding.gender}</h2>
        </div>
    )
}

export default Luke
