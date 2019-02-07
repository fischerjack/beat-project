
let map = new Map(700, 300);

let players = [new Player(250, 180, 38, 39, 37, 191), new Player(300, 180, 87, 68, 65, 70)];

let arena = new ArenaController(0.9, 0.25, players, map);

window.addEventListener('load', () => {
  arena.update();
});

