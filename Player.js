class Player {
    constructor(currentPiece, pieceInHold, score){
        this.currentPiece = currentPiece;
        this.pieceInHold = pieceInHold;
        this. score = score;

    }

    getScore(){

    }

    addToScore(){

    }

    getHeldPiece(){
        return this.pieceInHold;
    }

    setCurrentPiece(){

    }

    keyPressed(){
        if(keyCode == 67){
            this.pieceInHold = this.currentPiece;
        }

        if(keyCode == Enter){
            randomShape = Math.floor(Math.random() * 7);
        }
    }

    
}