const Util = require("./util");
const MovingObject = require("./moving_object");
const Bullet = require("./bullet");

function randomColor() {
    const hexDigits = "0123456789ABCDEF";

    let color = "#";
    for (let i = 0; i < 3; i++) {
        color += hexDigits[Math.floor((Math.random() * 16))];
    }

    return color;
}

function Ship(options) {
    options = options || {};
    options.pos = options.pos;
    options.vel = options.vel || [0, 0];
    options.color = options.color || randomColor()
    options.radius = Ship.RADIUS;
    options.game = options.game;

    MovingObject.call(this, options);
}

Ship.radius = 15;
Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
}

Ship.prototype.power = function(impluse) {
    this.vel = [(this.vel[0] + impluse[0]), (this.vel[1] + impluse[1])];
}
// let a = new Ship({ pos: [1, 2]})
// a.power([2, 2]);
// console.log(a.vel);

Ship.prototype.fireBullet = function() {
    const blt = new Bullet({game: this.game, pos: this.pos, color: this.color, vel: this.vel}) 
    this.game.bullets.push(blt);
}

module.exports = Ship;
