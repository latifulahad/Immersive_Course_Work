// const MovingObject = require("./moving_object.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

document.addEventListener("DOMContentLoaded", function() {
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;
    
    const ctx = canvasEl.getContext("2d");
    const game = new Game();
    // new GameView(game, ctx).start();
})

// window.MovingObject = MovingObject; //scopeTestRun