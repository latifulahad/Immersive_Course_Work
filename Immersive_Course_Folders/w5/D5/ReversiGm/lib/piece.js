
function Piece (color) {
    this.color = color;
}

Piece.prototype.oppColor = function () {
    return (this.color === "W") ? "B" : "W";
};

Piece.prototype.flip = function () {
    this.color = this.oppColor();
};

Piece.prototype.toString = function () { 
    return (this.color === "W") ? "B" : "W";
};

module.exports = Piece;

//TESTS vvv
// const a = new Piece("B");
// a.oppColor //WORKS
// a.flip(); //WORKS
// console.log(a.color) 
