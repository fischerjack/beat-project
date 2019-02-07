class Player{


  /**
   * Represents a player.
   * @constructor
   * @param {number} startingXCoordinate - starting x coordinate of the player (top-left corner)
   * @param {number} startingYCoordinate - starting y coordinate of the player (top-left corner)
   * @param {number} up                  - keycode used for jumping (positive y-direction)
   * @param {number} left                - keycode used for moving left (negative x-direction)
   * @param {number} right               - keycode used for moving right (positive x-direction)
   */
  constructor(startingXCoordinate, startingYCoordinate, up, left, right, kick, spriteSrc){
    this.xCoordinate = startingXCoordinate;                   //The x coordinate of the player (top-left corner)
    this.yCoordinate = startingYCoordinate;                   //The y coordinate of the player (top-left corner)
    this.width = 40;
    this.height = 50;
    this.speed = 3;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.friction = 0;
    this.gravity = 0;
    this.jumping = false;
    this.grounded = false;
    this.collisionDirection = '';

    //playerDirection is either 0 or 50, which will move vertically between the two symmetric levels in the sprite sheet
    this.playerDirection = 50;

    this.up = up;
    this.left = left;
    this.right = right;
    this.kick = kick;
    this.playerImage = new Image();
    this.playerImage.src = spriteSrc;
    this.frameIndex = 0;
    this.ticksCount = 0;
    this.ticksPerFrame = 15;
    this.numberOfFrames = 1;
    
    this.collisionWithPlayer = false;

    this.collidingPlayer = null;


  }
  /**
   * Represents the possible actions that the player can take (movement, attacking, blocking...)
   * @param {boolean[]} keyArr           - each index represents a keycode and the true/false value of that index represents the state of the key press
   */
  action(keyArr){
    if(keyArr[this.up]){
    if(!this.jumping && this.grounded){
      this.jumping = true;
      this.grounded = false;
      this.yVelocity = -this.speed*2;
    }
    }
    if(keyArr[this.left]){
      if(this.xVelocity < this.speed){
        this.xVelocity++;
      }
      this.playerDirection = 0;
    }
    if(keyArr[this.right]){
      if(this.xVelocity > -this.speed){
        this.xVelocity--;
      }
      this.playerDirection = 50;
    }
    

    this.xVelocity *= this.friction;
    this.yVelocity += this.gravity;

    if(this.grounded){
      this.yVelocity = 0;
    }

    this.xCoordinate += this.xVelocity;
    this.yCoordinate += this.yVelocity;
    this.grounded = false;
  }

  attack(keyArr, player){
    if(keyArr[this.kick]){
      if(this.xCoordinate === player.xCoordinate + 40){
        player.xVelocity -= 6;
        player.yVelocity -= 1;
      }
      if(this.xCoordinate === player.xCoordinate - 40){
        player.xVelocity -= 6;
        player.yVelocity -= 1;
      }
    }
  }

  collisionPrevention(){
    
    if (this.collisionDirection === "l" || this.collisionDirection === "r") {
      this.xVelocity = 0;
      this.jumping = false;
    } else if (this.collisionDirection === "b") {
      this.grounded = true;
      this.jumping = false;
    } else if (this.collisionDirection === "t") {
      this.yVelocity *= -1;
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
    ctx.drawImage(this.playerImage, this.frameIndex * this.width, this.playerDirection, 40, 50, this.xCoordinate, this.yCoordinate , 40, 50);
    this.spriteUpdate();
  }

}