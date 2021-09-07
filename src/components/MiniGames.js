import React, {useState} from 'react';
import '../styles/MiniGames.css';
import '../styles/animations.css'

import TicTacToe from './TicTacToe'

function MiniGames ({display, setDisplay}) {

    const [points, setPoints] = useState(0)

    const handlePoints = () => setPoints(points + 1)

    return (
        <div className={'MiniGames' + (display ? ' show-mini-games' : '')}>
            <div className='exit-button' onClick={() => setDisplay(false)}>
                <div className='first-line'></div>
                <div className='second-line'></div>
            </div>
            <div className='game-window'>
                {/* GAMES GO IN HERE!!!! */}

                <TicTacToe winFunction={handlePoints}/>
            </div>
            <div className='game-info'>
                <p>You're playing Tic Tac Toe!</p>
                <p>Score: {points}</p>
            </div>
        </div>
    )
}

export default MiniGames
