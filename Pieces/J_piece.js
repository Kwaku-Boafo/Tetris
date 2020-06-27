class J_Piece extends Piece {
    constructor(movementSpaces, x, y, xBarrier, yBarrier){
        super(movementSpaces, x , y, xBarrier, yBarrier);
    }

    drawPiece(){
        fill("pink");
        rect(x + this.movementSpaces, y, this.movementSpaces, this.movementSpaces);
        rect(x + this.movementSpaces, y + this.movementSpaces, this.movementSpaces, this.movementSpaces);
        rect(x + this.movementSpaces, y + (2 * this.movementSpaces), this.movementSpaces, this.movementSpaces);
        rect(x , y + (2 * this.movementSpaces), this.movementSpaces, this.movementSpaces);
    }
}