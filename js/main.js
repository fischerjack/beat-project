
// let keys = [];

let players = [new Player(250, 195, 38, 39, 37, 'red'), new Player(270, 195, 87, 68, 65, 'teal')];

let arena = new Arena(500, 200, 0.9, 0.3, players);

// $('body')[0].addEventListener('keydown', (e) =>{
//   keys[e.keyCode] = true;
// });

// $('body')[0].addEventListener('keyup', (e) =>{
//   keys[e.keyCode] = false;
// });

// let update = () =>{

//   arena.ctx.clearRect(0, 0, arena.width, arena.height);
//   player1.action(keys);
//   player2.action(keys);
//   player1.draw(arena.ctx);
//   player2.draw(arena.ctx);
  
//   requestAnimationFrame(update);
// }

window.addEventListener('load', () => {
  arena.update();
});

