import { Link } from '@reach/router'
import React from 'react'
import { Header } from '../styles/Style'

const ListHeader = () => {
    return (
        <div>
        <Header>
        <Link to="/players/addplayer" >Add Player</Link>
        <Link to="/" >List</Link>
        </Header>
        </div>
    )
}

export default ListHeader
