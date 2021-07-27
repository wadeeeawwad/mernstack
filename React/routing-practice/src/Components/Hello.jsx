import React from 'react'
import { Link ,navigate} from '@reach/router';


const Hello = (props) => {
    const handleHello=(e)=>{
        e.preventDefault();
        navigate('/home');
    }
    return (
        
        <div>
        you are inHello page
        <Link to="/home">Home </Link>
        <button onClick={handleHello}>go to Home</button>
            
        </div>
    )
}

export default Hello
