import React from 'react';
import '../styles/BallsBackground.css';

import balls from '../images/balls-background.png'

function BallsBackground() {
    return (
        <div className="BallsBackground">
            <img className='balls' src={balls} alt="" />
        </div>
    )
}

export default BallsBackground