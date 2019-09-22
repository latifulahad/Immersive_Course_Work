Function.prototype.inherit = function (parentCL) {
    function Surrogate() {
    }
    Surrogate.prototype = parentCL.prototype;
    this.prototype = new Surrogate();

    this.prototype.constructor = this;
}

function MovingObject(name) {
    this.name = name;
 }
MovingObject.prototype.talk = function() {
    console.log("hello");
}

function Ship(name) {
    MovingObject.call(this, name);
 }
Ship.inherit(MovingObject);
Ship.prototype.speak = function () {
    console.log("Yo");
}


function Asteroid(name) { 
    MovingObject.call(this, name);
}
Asteroid.inherit(MovingObject);
Asteroid.prototype.greet = function () {
    console.log("Sup");
}


//TESTS vvv WORKS
const a = new MovingObject("Sabit") 
const b = new Ship("Suravi") 
const c = new Asteroid("Sanam") 

a.talk()
console.log(a.name)
b.speak()
console.log(b.name)
console.log(b.__proto__.__proto__)
c.greet()
console.log(c.name)
c.talk()
