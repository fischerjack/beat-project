class Arena{

  constructor(canvasWidth, canvasHeight, friction, gravity, players){
    this.canvas = $('#canvas')[0];
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = canvasWidth;
    this.canvas.height = canvasHeight;
    this.players = players;
    this.keys = [];
    this.players.forEach(element => {
      element.arenaWidth = canvasWidth;
      element.arenaHeight = canvasHeight;
      element.friction = friction;
      element.gravity = gravity;
    });

    $('body')[0].addEventListener('keydown', (e) =>{
      this.keys[e.keyCode] = true;
    });
    $('body')[0].addEventListener('keyup', (e) =>{
      this.keys[e.keyCode] = false;
    });

    //Temporary code below this line
    this.boxes = [];
    this.boxes.push({
      xCoordinate: 0,
      yCoordinate: 0,
      width: 10,
      height: canvasHeight
    });
    this.boxes.push({
      xCoordinate: 0,
      yCoordinate: canvasHeight - 2,
      width: canvasWidth,
      height: 50
    });
    this.boxes.push({
      xCoordinate: canvasWidth - 10,
      yCoordinate: 0,
      width: 50,
      height: canvasHeight
    });
    this.boxes.push({
      xCoordinate: canvasWidth / 3,
      yCoordinate: canvasHeight - 60,
      width: canvasWidth / 3,
      height: 5
    });
    //Temporary code above this line
  }


  //Temporary code below this line
  collisionCheck(shapeA, shapeB){
    // get the vectors to check against
    let vX = (shapeA.xCoordinate + (shapeA.width / 2)) - (shapeB.xCoordinate + (shapeB.width / 2));
    let vY = (shapeA.yCoordinate + (shapeA.height / 2)) - (shapeB.yCoordinate + (shapeB.height / 2))
        // add the half widths and half heights of the objects
    let hWidths = (shapeA.width / 2) + (shapeB.width / 2);
    let hHeights = (shapeA.height / 2) + (shapeB.height / 2);
    let colDir = null;
 
    // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {         // figures out on which side we are colliding (top, bottom, left, or right)
        var oX = hWidths - Math.abs(vX);
        let oY = hHeights - Math.abs(vY);
        if (oX >= oY) {
            if (vY > 0) {
                colDir = "t";
                shapeA.yCoordinate += oY;
            } else {
                colDir = "b";
                shapeA.yCoordinate -= oY;
            }
        } else {
            if (vX > 0) {
                colDir = "l";
                shapeA.xCoordinate += oX;
            } else {
                colDir = "r";
                shapeA.xCoordinate -= oX;
            }
        }
    }
    return colDir;

  }
  //Temporary code above this line
  


  update(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    

    //Temporary code below this line
    this.ctx.fillStyle = "black";
    this.ctx.beginPath();
    for (let i = 0; i < this.boxes.length; i++) {
      this.ctx.rect(this.boxes[i].xCoordinate, this.boxes[i].yCoordinate, this.boxes[i].width, this.boxes[i].height);
    }
    this.ctx.fill();
    //Temporary code above this line

    this.players.forEach(element => {
      // element.grounded = false;
      for(let i = 0; i < this.boxes.length; i++){
        element.dir = this.collisionCheck(element, this.boxes[i]);
        element.collisionPrevention();
      }
      element.action(this.keys);
      element.draw(this.ctx);
    });
    
    requestAnimationFrame(() => this.update());
  }
}

