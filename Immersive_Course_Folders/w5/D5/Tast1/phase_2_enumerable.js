Array.prototype.myEach = function(callback) {
   let num = this.length;
    for (i = 0; i < num; i++) { callback(this[i]) };
};

// console.log(["Sabit", "Suravi"].myEach((el) => { console.log(el) })) WORKS

Array.prototype.myMap = function (callB) {
    let ansArr = [];

    this.myEach(el => { ansArr.push(callB(el)) });

    return ansArr;
};

// const NUMS = [1, 2, 3];
// console.log(NUMS.myMap(num => num * num));
// console.log(["sabit", "suravi"].myMap(name => name.toUpperCase())) WORKS

Array.prototype.myReduce = function (callB, gvn) {
    let ans = 0;
    if( gvn !== undefined) {
        ans = gvn;
    }

    this.myEach(el => ans = callB(ans, el) );
    
    return ans;
}

console.log([1, 2, 3].myReduce((acc, el) => acc + (el * 2) ));
