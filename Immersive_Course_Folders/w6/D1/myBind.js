Function.prototype.myBind = function(wntObj, ...args) {
        return this.apply(wntObj, [...args]);
    }

class Cat {
    constructor(name) {
        this.name = name;
    }
    
    runNow(adj) {
        console.log(this.name + " is RUNNING " + adj + "!!!");
    }
}
const tony = new Cat("Tony Hassan");
const mimi = new Cat("Mimi Ahmed");
mimi.runNow.myBind(tony, "fast"); //WORKS
// tony.runNow.myBind(mimi);
