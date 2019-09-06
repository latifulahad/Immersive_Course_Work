let Piece = require("./piece");

function _makeGrid () {
  let ans = [];
  for(i = 0; i < 8; i++) {
    ans.push(new Array(8))
  }

  ans[3][4] = new Piece("B");
  ans[4][3] = new Piece("B");
  ans[3][3] = new Piece("W");
  ans[4][4] = new Piece("W");

  return ans
}


function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];


Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) { 
      throw new Error("Empty");
   }

  return this.grid[pos[0]][pos[1]];
};
// const a = new Board;
// console.log(a.grid[3][3]) //WORKS


Board.prototype.isMine = function (pos, color) {
  return this.grid[pos[0]][pos[1]].color === color;
};
// const a = new Board;
// console.log(a.isMine([3, 3], "W")) //WORKS


Board.prototype.isOccupied = function (pos) {
  return this.grid[pos[0]][pos[1]] instanceof Piece;
};
// const a = new Board;
// console.log(a.isOccupied([3, 3])) //WORKS


Board.prototype.isOver = function () {
  for(k = 0; k < 8; k++) {
    for(i = 0; i < 8; i++) {
      if(this.grid[k][i] === undefined) { return false; }
   }
  }
  return true; 
};
// const a = new Board;
// console.log(a.isOver()) //WORKS


Board.prototype.isValidPos = function (pos) {
  return (pos[0] >= 0 && pos[0] < 8) && (pos[1] >= 0 && pos[1] < 8);
};
// ^WORKS


function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  let runCond = true;
  let ansArr = [pos];

    while(runCond) {
      lastPos = ansArr[ansArr.length - 1];
      let nextPos = [lastPos[0] + dir[0], lastPos[1] + dir[1]];
      if(!board.isValidPos(nextPos)) { return ansArr.slice(1, ansArr.length); }
      
      if(board.isValidPos(nextPos)) { 
        if(board.grid[nextPos[0]][nextPos[1]] === undefined) { return ansArr.slice(1, ansArr.length); }
        if (board.grid[nextPos[0]][nextPos[1]].color === color) { return ansArr.slice(1, ansArr.length); }
        ansArr.push(nextPos);
      }
    }

  };
// const a = new Board;
// console.log(_positionsToFlip(a, [2, 3], "B", [1, 0], [])) //WORKS!!!!!!!!!!!!!!!


Board.prototype.placePiece = function (pos, color) {
  if(!this.isValidPos(pos)) { throw new Error("Move is invalid!"); }
  
  if (this.grid[pos[0]][pos[1]] instanceof Piece) {
    this.grid[pos[0]][pos[1]].flip();
  } else {
    this.grid[pos[0]][pos[1]] = new Piece(color);
  }
};
// const a = new Board;
// a.placePiece([3, 2], "B") //WORKS
// console.log(a.print())


Board.prototype.print = function () {
  console.log("Cl 0 1 2 3 4 5 6 7")

  this.grid.forEach((row, idx) => {
    let r = "";
    r += `R${idx}`;

    for(i = 0; i < 8; i++) {
      row[i] instanceof Piece ? r += ` ${row[i].color}` : r += " ." ;
      }
    
    console.log(r);
  })
};
// const a = new Board;
// console.log(a.print()) //WORKS


Board.prototype.validMove = function (pos, color) {
  if(this.grid[pos[0]][pos[1]] !== undefined) { return false; } 
  let potenMoves = [];

    Board.DIRS.forEach(dir => {
      let mvs = [];
       potenMoves.push(_positionsToFlip(this, pos, color, dir, mvs));
    })
    // console.log(potenMoves) //4testing
    for(i = 0; i < potenMoves.length; i++) {
      if(potenMoves[i].length >= 1 ) {
        return true; 
      }
    }

    return false;
};
// const a = new Board;
// console.log(a.validMove([3, 2], "B")) //WORKS


Board.prototype.validMoves = function (color) {
 let mvsArr = [];

  for(i = 0; i < 8; i++) {
    for(j = 0; j < 8; j++) {

      if (this.grid[i][j] !== undefined && this.grid[i][j].color === color) {       
        Board.DIRS.forEach(dr => {
          let mvs = _positionsToFlip(this, [i, j], color, dr, []);
          if (mvs.length > 0) { mvs.forEach(mv => mvsArr.push([mv[0] + dr[0], mv[1] + dr[1]])); } 
        })
      }

    }
  }
 return mvsArr
};
// const a = new Board;
// console.log(a.validMoves("B")) //WORKS EXCELLENT


Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length > 0;
};
// const a = new Board;
// console.log(a.hasMove("B")) //WORKS

module.exports = Board;
