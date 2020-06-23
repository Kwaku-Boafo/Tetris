class I_Piece extends Piece {
    constructor(movementSpaces , x, y, xBarrier, yBarrier){
        super(movementSpaces , x , y, xBarrier, yBarrier);
    }

    drawPiece(){
        fill("blue");
        rect(x , y , 30 , 30);
        rect(x, y + 30, 30 ,30);
        rect(x, y + 60, 30 ,30);
        rect(x, y + 90, 30 ,30);
    }
}