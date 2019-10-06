const View = require("./ttt-view");
const Game = require("./game");

  $(() => {
    const el = $('.ttt');
    const g = new Game();
    new View(g, el);
  });
