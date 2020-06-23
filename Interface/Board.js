class Board {
    boardSpots = []; 
    holdBox_x = 380;
    holdBox_y = 100;
    holdBox_width= 100;
    holdBox_height = 100;

    constructor(size, pieceShift, boardWidth, boardHeight){
        this.size = size;
        this.pieceShift = pieceShift;
        this.boardWidth = boardWidth;
        this.boardHeight = boardHeight;
    }

    //creates an array that is the length of the board display
    //this array will be used to save and manage the loacation of other pieces 
    createBoard(){
        boardSpots.length = this.size;
    }

    //This draws all the rectangle spots on the board 
    drawBoard(boardWidth, boardHeight){
        for(let i = 0; i <= this.boardWidth; i+= this.pieceShift){
            for(let j = 0; j <= this.boardHeight; j+= this.pieceShift){
                fill("white");
                rect(i, j , this.pieceShift , this.pieceShift);
           }
        }
    }

    //This draws the box that will indicate what piece you are holding
    drawHoldBox(){
        rect(this.holdBox_x, this.holdBox_y, this.holdBox_width, this.holdBox_height);
    }

    // This method will change the piece in the holdBox each time a player holds a piece 
    updateHoldBox(){
        
    }

    //This will update the array so that we can track what spots are taken 
    updateBoardSpots(){

    }
}