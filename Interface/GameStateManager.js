class GameStateManager{
    constructor(currentState){
        this.currentState = currentState;
    }

    // This method returns what state (screen) the player is currently on
    getState(){
        return this.currentState;
    }

    setState(newState){
        this.currentState = newState;
    }

    // This is the first screen that the player will see 
    mainMenuState(){

    }

    //This is the screen in charge of the game
    playState(){
        let board = new Board(200, shift, BOARD_WIDTH, BOARD_HEIGHT);
        board.createBoard();
        board.drawBoard();
        board.drawHoldBox();
    }


    pauseState(){

    }

    gameOverState(){

    }

    //This method is in charge of the leader board scene 
    leaderBoardState(){

    }

    // This method will allow us to change the state once specific spots of the menu are clicked
    mouseClicked(){

    }

    // This method triggers the pause state on the 
    keyPressed(){

    }
}