import React from 'react'
import { Link } from '@reach/router'
import { Header } from '../styles/Style'
import PlayerList from '../components/PlayerList'
import ListHeader from '../components/ListHeader'

const Main = () => {
  return (
    <>
      <Header>
        <Link to="/players/list"><h2>Manage Players</h2></Link>
        <h2> | </h2>
        <Link to="/status/game/1"><h2>Manage Player Status</h2></Link>

      </Header>
      <ListHeader/>
      <PlayerList />
    </>
  )
}

export default Main
