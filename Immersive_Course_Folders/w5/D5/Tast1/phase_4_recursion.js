 function range(start, end) {
     if (start === end) { return []; }
     
     let ans = range(start, end - 1);
     ans.push(end - 1);
     return ans;
};
// console.log(range(1, 10)) WORKS

function sumRec(arr) {
    if(arr.length === 0) { return 0 };
    
    let ans = arr[arr.length - 1]
    return sumRec(arr.slice(0, arr.length - 1)) + ans;
};
// console.log(sumRec([1, 2, 3])) WORKS

function exponent(n, exp) {
    return exp === 0 ? 1 : (n * exponent(n, exp - 1));
};
// console.log(exponent(2, 3)) WORKS

function fibo(n) {
    if(n <= 2) { return [1, 1] };
    let ans = [1, 1];

    while(ans.length !== n) {
        num = ans[ans.length - 1] + ans[ans.length - 2];
        ans.push(num);
    }

    return ans;
};
// console.log(fibo(5)) WORKS

function deepDup(arr) {
    let ans = [];

    arr.forEach((el, idx) => {
        if(el instanceof Array) {
            ans[idx] = [];
            el.forEach(pc => ans[idx].push(pc))
        } else {
            ans.push(el);
        }
    })
    return ans; 
}; 
// let a = [1, 2, [3, 4]];
// b = deepDup(a); WORKS!!!!!!!
// a[2].push(5);
// console.log(b)
// console.log(a)