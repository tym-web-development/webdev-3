const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    test(answer);
    rl.close();
});


function test(input) {
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    //Make a for loop that iterates 10 times.
    //Get the loop to print just the count value, followed by a newline character every iteration. 
    //The first iteration should print 1, the second iteration should print 2, and so on.
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
    //--------------Don't modify the code below--------------------------------------------------
}