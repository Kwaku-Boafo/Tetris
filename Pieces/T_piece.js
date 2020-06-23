class T_Piece extends Piece {
    constructor(movementSpaces, x, y, xBarrier, yBarrier){
        super(movementSpaces , x , y, xBarrier, yBarrier);
    }

    drawPiece(){
        fill("purple");
        rect(x,y, 30, 30);
        rect(x +30, y, 30, 30);
        rect(x +60, y, 30, 30);
        rect(x +30, y + 30, 30, 30);
    }
}