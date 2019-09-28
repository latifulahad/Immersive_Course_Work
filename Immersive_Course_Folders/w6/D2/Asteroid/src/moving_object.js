const Game = require("./game");
const Util = require("./util");

function MovingObject(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
    this.game = options.game;
}

MovingObject.prototype.isWrappable = true;

MovingObject.prototype.move = function() {
    const game = this.game;

    let newPos = [(this.pos[0] += this.vel[0]), (this.pos[1] += this.vel[1])];
    if(game.isOutOfBOunds(newPos)) {
        if(this.isWrappable) { 
            this.pos = game.wrap(newPos); 
        } else {
            game.remove(this);
        }
    }
}

MovingObject.prototype.isCollidedWith = function(otherObj) {
    let disBtw = Util.dist(this.pos, otherObj.pos);
    return disBtw < (this.radius + otherObj.radius);
    }

module.exports = MovingObject;
