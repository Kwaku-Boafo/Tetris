class O_Piece extends Piece  {
    constructor(movementSpaces , x, y, xBarrier, yBarrier){
        super(movementSpaces , x , y, xBarrier, yBarrier);
    }

    drawPiece(){
        fill("yellow");
        square(x ,y, (2 * this.movementSpaces));
        line(x, y + this.movementSpaces , x + (2 * this.movementSpaces), y + this.movementSpaces);
        line(x + this.movementSpaces, y , x + this.movementSpaces, y + (2 * this.movementSpaces));
    }
}
