const Asteroid = require("./asteroid.js");
const Ship = require("./ship.js")

function Game() {
    this.asteroids = [];
    this.ship = new Ship({ pos: this.randomPosition(), game: this });
    this.bullets = [];
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

Game.prototype.randomPosition = function() {
    return [ Math.floor(Game.DIM_X * Math.random()), Math.floor(Game.DIM_Y * Math.random()) ];
}
// let a = new Game();
// console.log(a.randomPosition()) //WORKS

Game.prototype.addAsteroids = function() {
    let loca = this.randomPosition();
    const ast = new Asteroid({ pos: loca, game: this });
    this.asteroids.push(ast);
}

Game.prototype.allObjects = function() {
    return [].concat(this.asteroids, this.ship, this.bullets);
}

Game.prototype.moveObjects = function() {
    this.allObjects().forEach(ele => { ele.move(); } )
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.allObjects().forEach(ast => { ast.draw(ctx); } )
} 
//In theory draw shouldn't wrk on ast, due to having different prototypes...but due to recursiveness MAYBE!

Game.prototype.wrap = function(pos) {
    let newPos = [pos[0], pos[1]];

    for(let i = 0; i < 2; i++) {
        if(i === 0 && pos[i] > 1000) { newPos[i] = 1; }
        if(i === 0 && pos[i + 1] > 600) { newPos[i + 1] = 1; }
    }    
    return newPos;
}
// let a = new Game();
// console.log(a.wrap([1001, 601])) //WORKS

Game.prototype.checkCollisions = function() {
    let objects = this.allObjects();

    for(let i = 0; i < this.asteroids.length; i++) { 
        for(let j = i + 1; j < this.asteroids.length; j++) { 
            if(objects[i].isCollidedWith(objects[j])) { return "COLLISION"; }
        }
    }
    
}

Game.prototype.remove = function(ast) {
    if(ast instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(ast), 1);
    } else if(ast instanceof Asteroid) {
        this.asteroids.splice(this.asteroids.indexOf(ast), 1);
    } else if(ast instanceof Ship) {
        this.ship = undefined;
    }
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.isOutOfBounds = function(pos) {
    if(pos[0] > 1000 || pos[1] > 600) { return true; }
    return false;
}

module.exports = Game;
