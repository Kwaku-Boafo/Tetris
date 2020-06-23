class J_Piece extends Piece {
    constructor(movementSpaces , x, y, xBarrier, yBarrier){
        super(movementSpaces , x , y, xBarrier, yBarrier);
    }

    drawPiece(){
        fill("pink");
        rect(x + movementSpaces, y, movementSpaces, movementSpaces);
        rect(x + movementSpaces, y + movementSpaces, movementSpaces, movementSpaces);
        rect(x + movementSpaces, y + (2 * movementSpaces), movementSpaces, movementSpaces);
        rect(x , y + (2 * movementSpaces), movementSpaces, movementSpaces);
    }
}