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
  }

  update(){
    // console.log(this);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // console.log(this);
    this.players.forEach(element => {
      // console.log(this);
      element.action(this.keys);
      // console.log(this);
      element.draw(this.ctx);
      // console.log(this);
    });
    // console.log(this);
    requestAnimationFrame(() => this.update());
  // console.log(this);
  }
}

