Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const getPositions = (piece, squareList) => (
    squareList.reduce((reduced, value, index) => (
            reduced.concat(value === piece ? index : [])
        ),
        []
    )
);

export const getPlay = (board, easy) => {

    if(easy){
        // easy mode or dumb bot
        const emptyPositions = getPositions(null, board);
        return emptyPositions.sample(); 
    }
    else{
        // best plays bot
        return findBestSquare(board);
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  function isBoardFilled(squares) {
    for (let i = 0; i < squares.length; i++) {
      if (squares[i] === null) {
        return false;
      }
    }
    return true;
  }

function findBestSquare(squares) {
    // 'player' is the maximizing player
    // 'opponent' is the minimizing player
    const player = 'O';
    const opponent = player === 'X' ? 'O' : 'X';
    
    const minimax = (squares, isMax) => {
      const winner = calculateWinner(squares);
      
      // If player wins, score is +1
      if (winner === player) return { square: -1, score: 1 };
      
      // If opponent wins, score is -1
      if (winner === opponent) return { square: -1, score: -1 };
      
      // If Tie, score is 0
      if (isBoardFilled(squares)) return { square: -1, score: 0 };
      
      // Initialize 'best'. If isMax, we want to maximize score, and minimize otherwise.
      const best = { square: -1, score: isMax ? -1000 : 1000 };
      
      // Loop through every square on the board
      for (let i = 0; i < squares.length; i++) {
        // If square is already filled, it's not a valid move so skip it
        if (squares[i]) {
          continue;
        }
        
        // If square is unfilled, then it's a valid move. Play the square.
        squares[i] = isMax ? player : opponent;
        // Simulate the game until the end game and get the score,
        // by recursively calling minimax.
        const score = minimax(squares, !isMax).score;
        // Undo the move
        squares[i] = null;
  
        if (isMax) {
          // Maximizing player; track the largest score and move.
          if (score > best.score) {
            best.score = score;
            best.square = i;
          }
        } else {
          // Minimizing opponent; track the smallest score and move.
          if (score < best.score) {
            best.score = score;
            best.square = i;
          }
        }
      }
      
      // The move that leads to the best score at end game.
      return best;
    };
    
    // The best move for the 'player' given current board
    return minimax(squares, true).square;
  }