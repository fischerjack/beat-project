
let players = [new Player(250, 180, 38, 39, 37), new Player(310, 100, 87, 68, 65)];

let arena = new Arena(700, 300, 0.9, 0.3, players);

window.addEventListener('load', () => {
  arena.update();
});

