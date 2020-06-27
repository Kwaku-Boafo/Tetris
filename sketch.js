const BOARD_WIDTH = 300;
const BOARD_HEIGHT = 600
const CANVAS_WIDTH = 500;
const shift = 30;
let x = 0;
let y = 0;

// Game States for various menus and screens
const MAIN_MENU = "Main Menu";
const PLAY_STATE = "Play";
const PAUSE_STATE = "Pause";
const LEADERBOARD_STATE = "Leaderboard";
const GAMEOVER_STATE = "Game Over";

// Different Pieces in the game 
let l = new L_Piece(shift , x , y, 270 , 510);
let o = new O_Piece(shift , x , y, 260 , 540);
let i = new I_Piece(shift , x , y, 300 , 480);
let j = new J_Piece(shift , x , y, 270 , 510);
let s = new S_Piece(shift , x , y, 230 , 540);
let t = new T_Piece(shift , x , y, 240 , 540);
let z = new Z_Piece(shift , x , y, 240 , 540);

//Arrays and Randomizer needed to randomly generate pieces and save their position
let shapes = [j, l , o , i , s, z , t];
let boardSpots = [];
let userShape = "";
let randomShape = Math.floor(Math.random() * 7);
let player = new Player(shapes[randomShape], " ", 0);

// Sets up the canvas so the various UI elements can be visable
function setup(){
    createCanvas(CANVAS_WIDTH, BOARD_HEIGHT);  
}

//Controls the various game states and switches the screens 
function draw(){
    let gameStateManager = new GameStateManager(PLAY_STATE);
    if(gameStateManager.getState() == MAIN_MENU){
        gameStateManager.mainMenuState();
    }
    if(gameStateManager.getState() == PLAY_STATE){
        gameStateManager.playState();
    }
    if(gameStateManager.getState() == PAUSE_STATE){
        gameStateManager.pauseState();
    }
    if(gameStateManager.getState() == LEADERBOARD_STATE){
        gameStateManager.leaderBoadState();
    }
    if(gameStateManager.getState() == GAMEOVER_STATE){
        gameStateManager.gameOverState();
    }
    
}
    
shapes[randomShape].defaultFall();
//player.keyPressed();




