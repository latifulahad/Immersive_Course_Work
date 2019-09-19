const readline = require('readline')

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.close(); //comment out during testing

class Game {
    constructor(stacks) {
        this.stacks = stacks;
        this.runCond = true;
    }

    reorientBoard() {
        let ans = [[], [], []];
    
        for(let i = 0; i < this.stacks.length; i++) {
            for(let j = 0; j < 3; j++) {
               if(this.stacks[i][j] === undefined) {
                ans[j][i] = 0;
               } else {
                ans[j][i] = this.stacks[i][j];
                }
            }
        }
        return ans;
    }  

    printStack() {
        let transposedBoard = this.reorientBoard();
        console.log(transposedBoard[0]);
        console.log(transposedBoard[1]);
        console.log(transposedBoard[2]);
    }

    promptMv() {
        if(this.runCond === false) { 
            this.printStack();
            console.log("You\'ve WON!!!");
            return;
         }

        this.printStack();

        reader.question("Whats ur mv? e.g. 0 1 ", (frm) => {
            let ans = [];
            frm.split(" ").forEach(n => ans.push(parseInt(n)))
            
            if(this.isMvValid(ans[0], ans[1])) {
                this.move(ans[0], ans[1])

                if(this.isWon()) { 
                    reader.close(); 
                    this.runCond = false;
                }
                
                this.promptMv();
            } else {
                console.log("Invalid move bud");
                this.promptMv();
            }
        }) 
    }

    isMvValid(start, end) {
        let stPos = this.stacks[start];
        let edPos = this.stacks[end];
        if(stPos[0] === undefined) { return false; }
        if(edPos[0] === undefined) { return true; }
        
        if(stPos[0] < edPos[0]) { 
            return true;
        } else {
            return false;
        }
    }

    move(st, ed) {
        let checker = this.stacks[st][0];
        let runC = this.isMvValid(st, ed);
        if(runC) {
            let pc = this.stacks[st].shift();
            this.stacks[ed].unshift(pc);
        } else {
            console.log("Invalid Move");
        }

        // this.printStack();
    //    console.log(checker === this.stacks[ed][0]); //4testing
    }

    isWon() {
        if(this.stacks[0].length > 0) { return false; }
        if (this.stacks[1].length === 3 || this.stacks[2].length === 3) { return true; }
    }
    
}

// TESTS vvv
// const a = new Game([[1],[2],[3]]);
const a = new Game([[1, 2, 3], [], []]);
// a.printStack(); //WORKS
// console.log(a.isWon()) //WORKS
// console.log(a.printStack()); //WORKS
// a.promptMv(); //WORKS
// console.log(a.isMvValid(0, 1)); //WORKS

// a.move(0, 1);
// a.move(0, 2);
// a.move(1, 2);
// a.move(0, 1);
// a.move(2, 0);
// a.move(2, 1);
// a.move(0, 1);