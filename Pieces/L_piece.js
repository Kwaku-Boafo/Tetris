class L_Piece extends Piece {
    constructor(movementSpaces, x, y, xBarrier, yBarrier){
        super(movementSpaces , x , y, xBarrier, yBarrier);
    }

    drawPiece(){
        fill("orange");
        rect(x, y, 30, 30);
        rect(x, y +30, 30, 30);
        rect(x, y + 60, 30, 30);
        rect(x + 30, y + 60, 30, 30);
    }

    rotatePiece(){
        
    }
}