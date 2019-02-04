

let canvas = $('#canvas')[0];

let ctx = canvas.getContext('2d');

let width = 500;

let height = 200;

let player = new Player(width / 2, height - 5);

canvas.width = width;
canvas.height = height;

let keys = [];
let friction = 0.9;
let gravity = 0.3;

$('body')[0].addEventListener('keydown', (e) =>{
  keys[e.keyCode] = true;
});

$('body')[0].addEventListener('keyup', (e) =>{
  keys[e.keyCode] = false;
});

let update = () =>{

  if(keys[38]){
    if(!player.jumping){
      player.jumping = true;
      player.yVelocity = -player.speed*2;
    }
  }
  if(keys[39]){
    if(player.xVelocity < player.speed){
      player.xVelocity++;
    }
  }
  if(keys[37]){
    if(player.xVelocity > -player.speed){
      player.xVelocity--;
    }
  }
  player.xVelocity *= friction;
  player.yVelocity += gravity;
  player.xCoordinate += player.xVelocity;
  player.yCoordinate += player.yVelocity;

  if(player.xCoordinate >= width - player.width){
    player.xCoordinate = width - player.width;
  }else if(player.xCoordinate <= 0){
    player.xCoordinate = 0;
  }
  if(player.yCoordinate >= height - player.height){
    player.yCoordinate = height - player.height;
    player.jumping = false;
  }
  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = 'red';
  ctx.fillRect(player.xCoordinate, player.yCoordinate, player.width, player.height);

  requestAnimationFrame(update);
  
}

window.addEventListener('load', () => {
  update();
})

