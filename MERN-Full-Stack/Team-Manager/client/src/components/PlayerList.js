import React, { useEffect, useState } from 'react'
import axios from "axios"
import DeleteButton from './DeleteButton';
const PlayerList = (props) => {
    const [player, setPlayer] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/player')
            .then(res => setPlayer(res.data));
    }, [])
    const removeFromDom = playerId => {
        setPlayer(player.filter(player => player._id !== playerId))
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><h2>Players</h2></td>
                        <td><h2>Preferred Position</h2></td>
                        <td><h2>Actions</h2></td>
                    </tr>
                    {player.map((players, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{players.name}</td>
                                <td>{players.position}</td>
                                <td> <DeleteButton playerId={players._id} successCallback={()=>removeFromDom(players._id)}/>  </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default PlayerList
