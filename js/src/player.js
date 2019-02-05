class Player{

  constructor(startingXCoordinate, startingYCoordinate, up, left, right,){
    this.xCoordinate = startingXCoordinate;
    this.yCoordinate = startingYCoordinate;
    this.arenaWidth = 0;
    this.arenaHeight = 0;
    this.width = 40;
    this.height = 50;
    this.speed = 3;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.friction = 0;
    this.gravity = 0;
    this.jumping = false;
    this.up = up;
    this.left = left;
    this.right = right;
    // this.color = color;
    this.playerImage = new Image();
    this.playerImage.src = 'img/goten-sprite.png';
    this.frameIndex = 0;
    this.ticksCount = 0;
    this.ticksPerFrame = 15;
    this.numberOfFrames = 10;
    this.health = 50;
    this.damage = 5;

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

  spriteUpdate(){
    this.ticksCount++;
    if(this.ticksCount > this.ticksPerFrame){
      this.ticksCount = 0;
      if(this.frameIndex <  this.numberOfFrames){
        this.frameIndex++;
      } else{
        this.frameIndex = 0;
      }
    }
  }

  draw(ctx){
    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.xCoordinate, this.yCoordinate, this.width, this.height);
    
    ctx.drawImage(this.playerImage, this.frameIndex * this.width, 0, 40, 50, this.xCoordinate, this.yCoordinate , 40, 50);
    this.spriteUpdate();
  }

}