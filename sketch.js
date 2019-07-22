let shapes = ["J", "L" , "O" , "I" , "S", "Z" , "T"];
let userShape = "";
let x = 0;
let y = 0;

function setup(){
    createCanvas(300, 600);  
}

function draw(){
    board();
    //OShape();
    //LShape();
    //JShape();
    //IShape();
    //TShape();
    //SShape();
    //ZShape();
    console.log(userShape);
}

function TShape(){
    userShape = "T";
    fill("purple");
    rect(x,y, 30, 30);
    rect(x +30, y, 30, 30);
    rect(x +60, y, 30, 30);
    rect(x +30, y + 30, 30, 30);
}

function IShape(){
    userShape = "I";
    fill("blue");
    rect(x , y , 30 , 30);
    rect(x, y + 30, 30 ,30);
    rect(x, y + 60, 30 ,30);
    rect(x, y + 90, 30 ,30);
}

function ZShape(){
    userShape = "Z";
    fill("green");
    rect(x, y, 30, 30);
    rect(x +30, y, 30, 30);
    rect(x +30, y + 30, 30, 30);
    rect(x +60, y + 30, 30, 30);
}

function SShape(){
    userShape = "S";
    fill("red");
    rect(x, y+ 30, 30 , 30);
    rect(x + 30, y + 30, 30, 30);
    rect(x + 30, y, 30 ,30);
    rect(x + 60 , y , 30 , 30);
}

function JShape(){
    userShape = "J";
    fill("pink");
    rect(x + 30, y, 30, 30);
    rect(x + 30, y +30, 30, 30);
    rect(x + 30, y + 60, 30, 30);
    rect(x , y + 60, 30, 30);
}

function OShape(){
    userShape = "O";
    fill("yellow");
    square(x ,y, 60);
    line(x, y+30 , x+60, y+30);
    line(x+30, y , x+30, y+60);
}

function LShape(){
    userShape = "L";
    fill("orange");
    rect(x, y, 30, 30);
    rect(x, y +30, 30, 30);
    rect(x, y + 60, 30, 30);
    rect(x + 30, y + 60, 30, 30);
}

function keyPressed(){
    if(keyCode == DOWN_ARROW){
        if((userShape == "O"  || userShape == "T" || userShape == "S" || userShape == "Z") && y < 540){
            y +=30;
        }
        if((userShape == "L" || userShape == "J") && y < 510){
            y +=30;
        }
        if(userShape == "I" && y < 480){
            y +=30;     
        }
    }
    if(keyCode == RIGHT_ARROW){
        if((userShape == "O" || userShape == "J" || userShape == "L") && x < 240){
            x +=30;     
        }
        if(userShape == "I" && x < 270){
            x +=30;      
        }
        if((userShape == "T" || userShape == "Z" || userShape == "S")&& x < 210){
            x +=30;     
            console.log(x); 
        }
    }
    if(keyCode == LEFT_ARROW){
        if(userShape == "O","L", "I", "J", "S", "Z" , "T" && x > 0){
            x -=30;
        }
    }
}

function randomShape(){
    let randomIndex = random(shapes.length);
}

function board(){
    for(let i = 0; i <= 300; i+=30){
        for(let j = 0; j <= 600; j+=30){
            rect(i, j , 30 , 30);
            fill("white");
       }
    }
    rect(0, 0, 30, 30);
    fill("white");
}