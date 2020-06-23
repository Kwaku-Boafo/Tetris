const BOARD_WIDTH = 300;
const BOARD_HEIGHT = 600
const CANVAS_WIDTH = 500;
const MAIN_MENU = "Main Menu";
const PLAY_STATE = "Play";
const PAUSE_STATE = "Pause";
const LEADERBOARD_STATE = "Leaderboard";
const GAMEOVER_STATE = "GAME OVER";
let shift = 30;
let x = 0;
let y = 0;
let shapes = ["J", "L" , "O" , "I" , "S", "Z" , "T"];
let boardSpots = [];
let userShape = "";
let randomShape = Math.floor(Math.random() * 7);


function setup(){
    createCanvas(CANVAS_WIDTH, BOARD_HEIGHT);  
}

let o = new O_Piece(shift , x , y, 260 , 540);


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
    
    
    //o.defaultFall();
    o.drawPiece();
    o.keyPressed();
    
    
}


// function keyPressed(){
//     if(keyCode == DOWN_ARROW){
//         if(( (userShape == "O" && OControll == true)  || (userShape == "T" && TControll == true) || (userShape == "S" && SControll == true) || (userShape == "Z" && OControll == true)) && y < 540){
//             y +=30;
//         }
//         if(( (userShape == "L" && LControll == true) || (userShape == "J" && JControll == true)) && y < 510){
//             y +=30;
//         }
//         if( (userShape == "I" && IControll == true) && y < 480){
//             y +=30;     
//         }
//     }
//     if(keyCode == RIGHT_ARROW){
//         if((userShape == "O" || userShape == "J" || userShape == "L") && x < 240){
//             x +=30;     
//         }
//         if(userShape == "I" && x < 270){
//             x +=30;      
//         }
//         if((userShape == "T" || userShape == "Z" || userShape == "S")&& x < 210){
//             x +=30;     
//             console.log(x); 
//         }
//     }
//     if(keyCode == LEFT_ARROW){
//         if(userShape == "O","L", "I", "J", "S", "Z" , "T" && x > 0){
//             x -=30;
//         }
//     }

//     if(keyCode == ENTER){
//         randomShape = Math.floor(Math.random() * 7);
//     }
// }

