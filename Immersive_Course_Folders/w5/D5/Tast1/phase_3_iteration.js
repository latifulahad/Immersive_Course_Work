// Array#bubbleSort - receives an array, 
// returns a sorted array by implementing bubble sort sorting algorithm

Array.prototype.bubbleSort = function () {
    let cond = true;
    
    while (cond) {
        cond = false;
        
        for (let i = 0; i < (this.length - 1); i++) {
            if (this[i] > this[i + 1]) {
                [this[i], this[i + 1]] = [this[i + 1], this[i]];
                cond = true;
            }
        } 
    }

    return this;
};
// console.log([1, 5, 3, 6, 7].bubbleSort()); WORKS

// String#substrings - receives a string, returns an array of all substrings
String.prototype.subString = function() {
    let ans = [];
    
    for(i = 0; i < this.length; i++) {
        for(e = i + 1; e <= this.length; e++) {
            ans.push(this.slice(i, e));  
        }
    }
    return ans;
}

console.log("abc".subString())
