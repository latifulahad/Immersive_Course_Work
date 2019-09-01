//     Instructions
function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
    console.log(`${this.owner} loves ${this.name}`)
};

Cat.prototype.cuteStatement = function() {
    console.log(`Everyone loves ${this.name}!`)
};

Cat.prototype.meow = function() {
    console.log(`${this.name} meows!!!`)
};

//Tests vvv
const sabit = new Cat("Latiful Ahad", "SPACE");
const suravi = new Cat("Suravi Ahmed", "SPACE");
// console.log(suravi.cuteStatement());
suravi.meow = function() {
    console.log(`TESTING SCOPE RELATED TECH`)
};
console.log(sabit.meow())
console.log(suravi.meow())
