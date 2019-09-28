const MovingObject = require("./moving_object");
const Util = require("./util");

function Bullet(options) {
    options = options || {};
    options.pos = options.pos;
    options.vel = options.vel;
    options.color = DEFAULTS.COLOR;
    options.radius = DEFAULTS.RADIUS;
    options.game = options.game;

    MovingObject.call(this, options);
}
    
Util.inherits(Bullet, MovingObject);
Bullet.prototype.isWrappable = false;

Bullet.prototype.collideWith = function(ast) {
    if(this.isCollidedWith(ast)) { this.game.remove(ast); }
}

module.exports = Bullet;