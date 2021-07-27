import React from 'react'
import { Link ,navigate} from '@reach/router';
const Home = (props) => {
    const handleHome=(e)=>{
        e.preventDefault();
        navigate('/hello');

    }
    return (
        <div>
        you are in Home
        <br/>
        <button onClick={handleHome}>go to hello</button>
        <Link to= "/hello" > hello </Link>
            
        </div>
    )
}

export default Home;
