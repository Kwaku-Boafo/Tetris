class Z_Piece extends Piece {
    constructor(movementSpaces , x, y, xBarrier, yBarrier){
        super(movementSpaces , x , y, xBarrier, yBarrier);
    }

    drawPiece(){
        fill("green");
        rect(x, y, movementSpaces, movementSpaces);
        rect(x + movementSpaces, y, movementSpaces, movementSpaces);
        rect(x + movementSpaces, y + movementSpaces, movementSpaces, movementSpaces);
        rect(x + (2 * movementSpaces), y + movementSpaces, movementSpaces, movementSpaces);
    }
}