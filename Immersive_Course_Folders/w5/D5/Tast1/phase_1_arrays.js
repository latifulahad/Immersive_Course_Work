Array.prototype.uniq = function() {
    let holder = [this[0]];

    for(i = 0; i < this.length; i++) {
        if(!holder.includes(this[i])) {
            holder.push(this[i]);
        }
    }

    return holder;
};
// console.log([5, 2, 2, 3, 2, 1, 5].uniq()) WORKS

Array.prototype.twoSum = function () {
    let holder = [];

    for(i = 0; i < this.length; i++) {
        for(i2 = i + 1; i2 < this.length; i2++) {
            if(this[i] + this[i2] === 0) {
                holder.push([i, i2]);
            }
        }
    }

    return holder;
};

//console.log([1, -1, 2, -2].twoSum()) WORKS

Array.prototype.transpose = function() {
    let ansArr = [];
        num = this.length;
        for(i = 0; i < num; i++) { ansArr.push([]) };

    for (i = 0; i < this.length; i++) {
        for (i2 = 0; i2 < this.length; i2++) {
            ansArr[i].push(this[i2][i]);
        }
    }

    return ansArr
};

// console.log([[1, 2, 3], [1, 2, 3], [1, 2, 3]].transpose()) WORKS
