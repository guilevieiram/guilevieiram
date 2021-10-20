import React, {useState, useEffect} from 'react';
import '../styles/TicTacToe.css'

import {getPlay} from './bot';

import texts from '../data/texts.json';


const checkWinner = (squares) => {
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
    else if (!squares.includes(null)){
        return 'tie'
    }
    else {
        return null
    }

}


function Square({value, onClick, gameState}) {

    return (
        <button 
            className={
                'ttt-square' 
                + (value==='X' ? ' X' : ' O')
                + (gameState ? ' on' : ' over')
            }
            onClick={onClick}
        >
            {value}
        </button>
    )
}

function Board({squares, onClick, gameState, blur, disableBoard, onDisable}) {

    if(disableBoard) {onClick = onDisable}


    return (
        <div className={'Board' + (blur ? ' blur opaque' : '')}>
            {squares.map((square, i) => (
                <Square 
                    key={i} 
                    value={square} 
                    onClick={() => onClick(i)} 
                    gameState={gameState}
                />
            ))}
        </div>
    )
}

function TicTacToe ({language, winFunction}) {

    const [history, setHistory] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState('X');
    const [showWinner, setShowWinner] = useState(false);
    const [winner, setWinner] = useState('');
    const [gameState, setGameState] = useState(true);
    const [easy, setEasy] = useState(true);


    const resetGame = () => {
        setHistory(Array(9).fill(null));
        setWinner('');
        setTurn('X');
        setShowWinner(false);
        setGameState(true);
    }

    const handleTurn = () => setTurn(turn === 'X' ? 'O' : 'X');

    const handlePlay = (squareNumber) => {

        if(!gameState){return}

        let winner;

        if(!history[squareNumber]){ //checks if its null
            history[squareNumber] = turn;
            handleTurn();
        };

        if(winner = checkWinner(history)){
            if(winner === 'X') {winFunction()}
            setWinner(winner)
            setShowWinner(true);
            setGameState(false);
        };

    }    
    
    useEffect(() => {
        if(turn === 'X'){return};
        setTimeout(() => {
            let botSquare = getPlay(history, easy);
            handlePlay(botSquare);
        }, 300)
    }, [turn])


    return (
        <div className='TicTacToe'>

            <Board 
                squares={history} 
                onClick={(squareNumber) => handlePlay(squareNumber)} 
                gameState={gameState}
                blur={showWinner}
                disableBoard={showWinner}
                onDisable={resetGame}
            />
            <div className="game-interface">
                <p className={'player-text ' + turn}>{turn}</p>
                <button className='difficulty-button' onClick={() => setEasy(!easy)}>
                    {easy ? '😄' : '💀'}
                </button>
                <button className='reset-button' onClick={resetGame}>
                    ↺
                </button>
            </div>

            <h1 
                className={'winner-text' + (showWinner ? ' show-winner' : '')}
                onClick={() => {
                    if(gameState === false){resetGame();};
                }} 
                >
                {(() => {
                        switch(winner){
                            case 'tie':
                                return texts.tictactoe[language.sign][0];
                            case 'X':
                                return texts.tictactoe[language.sign][1];
                            case 'O':
                                return texts.tictactoe[language.sign][2];
                            default:
                                return '';
                        }
                    })()
                }
            </h1>
        </div>
    )
}

export default TicTacToe