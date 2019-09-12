const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askIfGreaterThan = (ele1, ele2, callback) => {
    reader.question(`Is ${ele1} > ${ele2}, type t || f ? : `, (opinion) => {
        opinion === "t" ? callback(true) : callback(false);
    })

}
// askIfGreaterThan(1, 2, function(inp) { 
//     console.log(inp);
//     reader.close(); 
// }) //WORKS

function innerBubbleSortLoop(arr, i, swapDetail, callback) {
    if(i === arr.length - 1) { 
        callback(swapDetail);
        return;
     }

    if(i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], (opi) => {
            if(opi) { 
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapDetail = true;
            }
            innerBubbleSortLoop(arr, i + 1, swapDetail, callback);
        })
    }
}

function absurdBubbleSort(arr) {
    function outerBubbleSortLoop(buleon) {
        if(buleon) { 
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            console.log(arr);
            reader.close();
        }
    }

    outerBubbleSortLoop(true); //4 iteration 0
}

absurdBubbleSort([3, 7, 1, 10, 2]); //WORKS
