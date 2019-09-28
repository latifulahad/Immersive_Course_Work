/*An obj of this class ought to maintain the visual aspect of client-end inputs 
relative to the autonomus movements of the other objects that are a part of the game obj. as well.
All activity is to be conducted from the Entrance file, using logic that resembles code from within the block of 
ruby's if __FILE__ == $PROGRAM_NAME { ___ } 
this obj's methods for visual representation.....
*/

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.MOVES = {
    w: [-1, 0],
    a: [0, -1],
    s: [1, 0],
    d: [0, 1]
}

GameView.prototype.bindKeyHandlers = function () {
    const ship = this.game.ship;

    Object.keys(GameView.MOVES).forEach(k => {
        const mvDir = GameView.MOVES[k];
        key(k, function() { ship.power(mvDir); })
    })

    key("f", function() { ship.fireBullet(); })
}

GameView.prototype.start = function() {
    setInterval(() => { 
        this.bindKeyHandlers();
        this.game.step();
        this.game.draw(this.ctx);
     }, 20);
}

module.exports = GameView;
