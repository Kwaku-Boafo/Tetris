class Piece {
    constructor(movementSpaces , x , y , xBarrier, yBarrier){
         this.movementSpaces = movementSpaces;
         this.x = x;
         this.y = y
         this.xBarrier = xBarrier;
         this.yBarrier = yBarrier;
    }
    
    keyPressed(){
      
      if(keyCode == DOWN_ARROW && y < this.yBarrier){
        y += this.movementSpaces;
      } 
 
      if(keyCode == RIGHT_ARROW && x < this.xBarrier){
        x += this.movementSpaces;
      } 

      if(keyCode == LEFT_ARROW && x > 0){
        x -= this.movementSpaces;
      }

    }

    stopPiece(){
      
    }

    defaultFall(){
      setInterval(() => {
        if(y < this.yBarrier){
          y += this.movementSpaces;
        }
      }, 2000);
     }
 }
