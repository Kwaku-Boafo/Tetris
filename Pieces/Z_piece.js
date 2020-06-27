class Z_Piece extends Piece {
    constructor(movementSpaces , x, y, xBarrier, yBarrier){
        super(movementSpaces , x , y, xBarrier, yBarrier);
    }

    drawPiece(){
        fill("green");
        rect(x, y, this.movementSpaces, this.movementSpaces);
        rect(x + this.movementSpaces, y, this.movementSpaces, this.movementSpaces);
        rect(x + this.movementSpaces, y + this.movementSpaces, this.movementSpaces, this.movementSpaces);
        rect(x + (2 * this.movementSpaces), y + this.movementSpaces, this.movementSpaces, this.movementSpaces);
    }
}