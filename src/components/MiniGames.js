import React, {useState} from 'react';
import '../styles/MiniGames.css';

function MiniGames ({display, setDisplay}) {

    return (
        <div className='MiniGames' style={{display: display ? 'block' : 'none'}}>
            <div className='exit-button' onClick={() => setDisplay(false)}>
                <div className='first-line'></div>
                <div className='second-line'></div>
            </div>
            <div className='game-window'>
                {/* GAMES GO IN HERE!!!! */}
                <div style={{backgroundColor: 'blue', height: '100%', width: '100%'}}></div>
            </div>
            <div className='game-info'>
                <p>You're playing NOTHING</p>
                <p>Score:   0</p>
            </div>
        </div>
    )
}

export default MiniGames
