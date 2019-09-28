const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Ship = require("./ship.js");

const DEFAULTS = {
    COLOR: '#505050',
    RADIUS: 25,
    SPEED: 5
}

function Asteroid(options) {
    options = options || {};
    options.pos = options.pos;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);
    options.color = DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    options.game = options.game; 

    MovingObject.call(this, options);
}
Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.isCollidedWith = function(otherObj) {
    if(otherObj instanceof Ship) {
        otherObj.relocate();
    }
}
// const a = new Asteriod({ pos: [1, 2]}) //WORKS
// console.log(a.pos)

module.exports = Asteroid;
