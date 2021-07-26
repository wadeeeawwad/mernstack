import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Axiospokimon = () => {
    const [pokemons, setPokemons] = useState(["hello", "hello"]);

    //     useEffect(() => {  axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    //     .then(response => response.json())
    //     .then(response => setPokemons(response.results))
    //     .catch(error => console.log(error))
    // }, []);

    const handleAxios = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        
        .then(response=>{setPokemons(response.data.results)})
        .catch(error=>console.log(error))
    }

return (
    <>
    <button onClick={handleAxios}>axios pokemon</button>
    <div>
        {pokemons.length > 0 && pokemons.map((pokemon, index) => {
            return (<div key={index}>{pokemon.name}</div>)
        })}
    </div>
    </>
);
}

export default Axiospokimon;
