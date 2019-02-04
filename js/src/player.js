class Player{

  constructor(startingXCoordinate, startingYCoordinate, up, left, right, color){
    this.xCoordinate = startingXCoordinate;
    this.yCoordinate = startingYCoordinate;
    this.arenaWidth = 0;
    this.arenaHeight = 0;
    this.width = 5;
    this.height = 5;
    this.speed = 3;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.friction = 0;
    this.gravity = 0;
    this.jumping = false;
    this.up = up;
    this.left = left;
    this.right = right;
    this.color = color;
  }

  action(keyArr){
    if(keyArr[this.up]){
    if(!this.jumping){
      this.jumping = true;
      this.yVelocity = -this.speed*2;
    }
    }
    if(keyArr[this.left]){
      if(this.xVelocity < this.speed){
        this.xVelocity++;
      }
    }
    if(keyArr[this.right]){
      if(this.xVelocity > -this.speed){
        this.xVelocity--;
      }
    }
    this.xVelocity *= this.friction;
    this.yVelocity += this.gravity;
    this.xCoordinate += this.xVelocity;
    this.yCoordinate += this.yVelocity;

    if(this.xCoordinate >= this.arenaWidth - this.width){
      this.xCoordinate = this.arenaWidth - this.width;
    }else if(this.xCoordinate <= 0){
      this.xCoordinate = 0;
    }
    if(this.yCoordinate >= this.arenaHeight - this.height){
      this.yCoordinate = this.arenaHeight - this.height;
      this.jumping = false;
    }
  }

  draw(ctx){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
  }

}