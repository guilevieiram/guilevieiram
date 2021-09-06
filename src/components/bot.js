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

export const getPlay = (board) => {
    let emptyPositions = getPositions(null, board);
    return emptyPositions.sample();
}