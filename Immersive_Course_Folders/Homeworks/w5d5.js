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
