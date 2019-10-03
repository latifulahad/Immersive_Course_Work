/* jshint esversion: 6 */

function View($el) {
  this.$el = $el;
  this.setupEasel();
}

window._randomColorString = function(){
  return '#' + Math.random().toString(16).substr(-6);
};

View.prototype.exercise0 = function () {
  //Challenge: (example) remove the 'square' class from every li
  //Result: this should cause the grid to turn into a long list of undecorated lis
  //just a list of dots

  //this one completed as an example :) no additional code necessary
  $('li').removeClass("square");
};

View.prototype.exercise1 = function () {
  $("li").addClass('orange');
};

View.prototype.exercise2 = function () {
  $(".square").remove();
};

View.prototype.exercise3 = function () {  
  const $head = $("<h1></h1>").text("I love jquery");
  $("#easel").append($head);
};

View.prototype.exercise4 = function () {
  $(".square:nth-child(even)").text("Sabit");
};

View.prototype.exercise5 = function () {
  $(".square").on("click", event => {
    const $pos = event.currentTarget;
    alert($pos.data("pos"));
  })
};

View.prototype.exercise6 = function () {
  $('.square').each((el) => {
    const $sq = $(el);
    $sq.attr("style", "background-color: randomColorString()");
  })
};

View.prototype.exercise7 = function(){
  //Challenge: When your mouse goes over a square, console log its color.
  //Result: When the mouse goes over a square its color should appear in the
  //console. The color won't be the color's name, but its rbg value.
  //You should push the button for exercise 6 first to try it on the
  //rainbow.

  $("#easel").on("mouseenter", ".square", event => {
    const $ele = $(event.currentTarget);
    console.log($ele.css("background-color"));
  });
};



View.prototype.setupEasel = function() {
  const $addRowButton = $('<button>').html('Add a row');
  this.$el.append($addRowButton);
  $addRowButton.on("click", this.addRow.bind(this));

  for(let j = 0; j <= 7; j++){
    const $button = $("<button>").html("Exercise " + j);
    $button.on("click", this["exercise" + j]);
    this.$el.append($button);
  }

  for(let i = 0; i < 20; i ++) {
    this.addRow();
  }
};

View.prototype.addRow = function() {
  const rowIdx = this.$el.find(".row").length;
  const $row = $("<ul>").addClass("row").addClass("group");
  for(let colIdx = 0; colIdx < 20; colIdx++) {
    const $square = $("<li>").addClass("square").attr("data-pos", [rowIdx, colIdx]);
    $square.on("mouseenter", (e) => {
      const $square = $(e.currentTarget);
      $square.css("background-color", window._randomColorString());
    });
    $row.append($square);
  }
  this.$el.append($row);
};

module.exports = View;
