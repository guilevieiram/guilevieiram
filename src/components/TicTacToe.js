import React, {useState} from 'react';
import '../styles/TicTacToe.css'

const checkWinner = (squares) => {
    let example = [   'X',      'O',      'O',
                        null,   'X',      null,
                        'O',      null,   'X'
    ];

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const getPositions = (piece, squareList) => (
        squareList.reduce((reduced, value, index) => (
                reduced.concat(value === piece ? index : [])
            ),
            []
        )
    );

    const includes = (array, element) => {
        let returnValue = false
        array.forEach(line => {
            if ( line.every(value => element.includes(value)) ){
                returnValue = true;
            };
        })
        return returnValue;
    };


    if (includes(lines, getPositions('X', squares))){
        return 'X'
    }
    else if (includes(lines, getPositions('O', squares))){
        return 'O'
    }
    else {
        return null
    }

}


function Square({value, onClick}) {
    return (
        <button 
            className={'ttt-square'}
            onClick={onClick}
        >
            {value}
        </button>
    )
}

function Board({squares, onClick}) {
    return (
        <div className='Board'>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)} />
            ))}
        </div>
    )
}

function TicTacToe () {

    const [history, setHistory] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');
    const [showWinner, setShowWinner] = useState(false);
    const [winner, setWinner] = useState('');

    const resetGame = () => {
        setHistory(Array(9).fill(null));
        setWinner('');
        setShowWinner(false);
    }

    const handleTurn = () => setTurn(turn === 'X' ? 'O' : 'X');

    const handlePlay = (squareNumber) => {
        let winner;
        if(winner = checkWinner(history)){
            setWinner(winner)
            setShowWinner(true);
        }
        else if(!history[squareNumber]){
            history[squareNumber] = turn;
            handleTurn();
        };
    }


    return (
        <div className='TicTacToe'>
            <Board squares={history} onClick={(squareNumber) => handlePlay(squareNumber)} />
            <button className='reset-button' onClick={resetGame}>Reset</button>
            <h1 className={'winner-text' + (showWinner ? ' show' : '')}>The Winner Is: {winner}</h1>
        </div>
    )
}

export default TicTacToe