const sum = function() {
    let arr = Array.from(arguments);
    let ans = 0;

    arr.forEach(ele => { ans += ele; });
    return ans;
}
// console.log(sum(1, 2)) //WORKS

const otrSum = function(...args) {
    let ans = 0;
    args.forEach(ele => ans += ele)
    return ans;
}
// console.log(otrSum(1, 2)) //WORKS

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}
const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

Function.prototype.myBind = function () {
    let arr = Array.from(arguments);
    return this.apply(arr[0], arr.slice(1, arr.length))
}
// console.log(markov.says.myBind(pavlov, "meow", "Kush")) //WORKS

function curriedSum(num) {
    let numbers = [];

    function _curriedSum(ele) {
        numbers.push(ele);

        if(numbers.length === num) {
            let ans = 0;

            numbers.forEach(ele => { ans += ele; })
            
            return ans;
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

// let blah = curriedSum(4);
// console.log(blah(5)(30)(20)(1)); //WORKS

Function.prototype.funcPrgMthd = function(runC) {
    let manager = [];
    let wntedFunc = this;

    function _intrnMthd(el) {
        manager.push(el);

        if(manager.length === runC) {
            let ans = 0;
            manager.forEach(ele => { ans += wntedFunc(ele); })
            return ans;
        } else {
            return _intrnMthd;
        }
    }

    return _intrnMthd;
}
