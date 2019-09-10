// ASYNC FUNCTIONS PRAC.
const readline = require('readline');

// global.setTimeout(function() { console.log("HAMMERTIME!") }, 5000);

//ANSWER PROVIDED fyi ans is 4 browser-end hence the window........
// window.setTimeout(function () {
//     alert('HAMMER TIME!');
// }, 5000);

function hammerTime(time) {
    global.setTimeout(function () { console.log(`${time} is hammertime!`) }, 5000);
}
// hammerTime("Four O clock"); //WORKS

const reader = readline.createInterface({
input: process.stdin,
output: process.stdout
})

// reader.question("Would you like tea ?", function(teaRes) { 
//     reader.question("Also, how about cookies?", function (cookieRes) {
//         let teaAns = teaRes === "yes" ? "do" : "don\'t";
//         let cookieAns = cookieRes === "yes" ? "do" : "don\'t";
//         console.log(`So you ${teaAns} want tea and you ${cookieAns} want cookies.`)
//         reader.close();
//     })
// })
reader.close(); //4 testing

function Cat(name, age) {
    this.name = name;
    this.age = age;
}

class Dog {
    constructor(name, age) {
    this.name = name;
    this.age = age;
    }

    chase(cat) {
        console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
    }
}

const Tony = new Cat("Tony", 3);
const Milo = new Dog("Milo", 5);

// Milo.chase.call(Tony, Milo) //WORKS
// Milo.chase.apply(Tony, [Milo]) //WORKS