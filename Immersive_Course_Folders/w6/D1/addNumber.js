const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

    if(numsLeft > 0) {
        reader.question("Please provide a number for addition: ", function(providedN) { 
            const numbr = parseInt(providedN);
            sum += numbr;
            console.log("Partial sum = " + sum);

            addNumbers(sum, numsLeft - 1, completionCallback);
        });
    } else {
        completionCallback(sum);
    }
}

addNumbers(0, 3, function(sum) {
    console.log("Sum: " + sum);
    reader.close();
}); //WORKS