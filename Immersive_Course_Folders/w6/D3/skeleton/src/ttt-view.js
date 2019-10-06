class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $sq = $(event.currentTarget);
      this.makeMove($sq);
    })); 
  }

  makeMove($square) {
    const cPlyr = this.game.currentPlayer;
    const bgClr = cPlyr === "x" ? "green" : "blue"; 
    $square.text(cPlyr);
    $square.attr("style", `background-color: ${bgClr}`);
  }

  setupBoard() {
    const $ul = $("<ul></ul>");

    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        const $cell = $("<li></li>");
        $cell.data("pos", [i, j]);
        
        $ul.append($cell);
      }
    }
    
    this.$el.append($ul);
  }
  
}
//INCOMPLETE PROJ. UNLCEAR INSTRUCTIONS 4 CLIENT-END logic 2 b written!
module.exports = View;