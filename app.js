

let canvas = $('#canvas')[0];

let ctx = canvas.getContext('2d');

let width = 500;

let height = 200;

let player = {
  x: width / 2,
  y: height - 5,
  width: 5,
  height: 5,
  speed: 3,
  velX: 0,
  velY: 0
};

canvas.width = width;
canvas.height = height;

let keys = [];

$('body')[0].addEventListener('keydown', (e) =>{
  keys[e.keyCode] = true;
});

$('body')[0].addEventListener('keyup', (e) =>{
  keys[e.keyCode] = false;
});

let update = () =>{

  if(keys[38]){

  }
  if(keys[39]){
    if(player.velX < player.speed){
      player.velX++;
    }
  }
  if(keys[37]){
    if(player.velX > -player.speed){
      player.velX--;
    }
  }
  player.x += player.velX;
  player.y += player.velY;

  if(player.x >= width - player.width){
    player.x = width - player.width;
  }else if(player.x <= 0){
    player.x = 0;
  }
  ctx.clearRect(0,0,width,height);
  ctx.fillStyle = 'red';
  ctx.fillRect(player.x, player.y, player.width, player.height);

  requestAnimationFrame(update);
  
}

window.addEventListener('load', () => {
  update();
})

