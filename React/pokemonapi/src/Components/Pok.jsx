import React,{useState} from 'react'

const Pok = () => {
    const [pokemons,setPokemons] = useState(["Sdasd","asdasd"]);


    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    //     .then(response=>response.json)
    //     .then(response=>setPokemons(response.results))
    //     .catch(error=>console.log(error))

    // }, []);

    const handleFetch = () => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response=>response.json())
        .then(response=>setPokemons(response.results))
        .catch(error=>console.log(error))
    }

    return (
        <>
        <button onClick={handleFetch}> fetch pokemon</button>
        <div>
            {
                pokemons.length > 0 && pokemons.map((Pokemon, index)=>{
                return (<div key={index}>{Pokemon.name}</div>)
            })
        }
        </div>
        </>
    );
}
 
    

export default Pok
