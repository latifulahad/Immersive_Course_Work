function mysteryScoping1() {
    var x = 'out of block';
    if (true) {
        var x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping2() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping3() {
    const x = 'out of block';
    if (true) {
        const x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping4() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    console.log(x);
}

function mysteryScoping5() {
    let x = 'out of block';
    if (true) {
        let x = 'in block';
        console.log(x);
    }
    let y = 'out of block again';
    console.log(x);
    console.log(y);
}

function madLib(verb, adj, noun) {
    return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`
}

function isSubstring(str, wrd) {
    return str.includes(wrd);
}

function fizzbuzz(arr) {
    const answer = [];

    arr.forEach(el => {
        if ((el % 3 === 0) ^ (el % 5 === 0)) {
            answer.push(el);
        }
      });

    return answer;
}

function isPrime(num) {
    if (num < 2) { return false; }

    for (i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }

    return true;
}

function sumOfPrimes(n) {
    if (n < 1) { return 0; }
    let sum = 2;
    let count = 1;
    let i = 3;
    
    while(count !== n) {
        if (isPrime(i)) { 
            sum += i; 
            count++;
        }
        i++;
    }

    return sum;
}

// Tests
//mysteryScoping1() due to x being an obj
//mysteryScoping2() due to x being a variable
//mysteryScoping3() error thrown due to 1 variable having 2 dif prefixes in 2 dif scopes....
//mysteryScoping4() same as case 2 with the dif in prefix...which would cause issues if data-struc. were dif.
//mysteryScoping5() precedence of naming concept.
//console.log(madLib('make', 'best', 'guac')) WORKS
// console.log(isSubstring("Jump for joy", "joys")) WORKS
// console.log(isSubstring("time to program", "time")) WORKS
// console.log(fizzbuzz([3, 5, 15])) WORKS
// console.log(isPrime(20)) WORKS
// console.log(sumOfPrimes(4)) WORKS

// Lvl II Tasks
//Phase1
function titleize(arr, cBack) {
    let new_arr = arr.map(el => `Mx. ${el} Jingleheimer Schmidt`);
    cBack(new_arr)
}
/*
titleize(["Sabit", "Suravi"], (wateva) => {
    wateva.forEach(wrd => console.log(wrd));
});
*/
function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function() {
    this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
}

Elephant.prototype.play = function() {
    let idx = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} ${this.tricks[idx]}`);
}
//TESTS
let sabit = new Elephant("Sabit", 69, ["likes to be appreciated :(", "scares cats for fun!"]);
// sabit.trumpet() WORKS
// sabit.grow() WORKS
// console.log(sabit.height)
sabit.addTrick("likes to kiss the sky :)") 
// console.log(sabit.tricks)
// sabit.play() WORKS

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah, sabit];

//Phase2
Elephant.paraHelper = function(eleName) {
    console.log(`${eleName.name} is trotting by!`);
}
// herd.forEach(el => console.log(Elephant.paraHelper(el)));

//Phase3
function dinBrkFast(meal) {
     let order = "I'd like cheesy scrambled eggs please";
     
     if (meal === undefined) {
        console.log(order);
     } else {
    order = `${order.slice(0, order.length - 8)} and ${meal} please.`;  
    console.log(order);
    }
}
//FYI instructions unclear on Bx of function....
// dinBrkFast()
// dinBrkFast("some fries")
// dinBrkFast()