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
    let sequence = [];
    let val0 = 0;
    let val1 = 1;
    sequence.push(val0);
    sequence.push(val1);
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    //Make a While or Do-While loop that prints the value from 10 to 0 in descending order. 
    //For each iteration just print the correct number.
    // Ensure it is in descending order, from 10 to 0.
    // The first 2 values, 0 and 1, are already given and inserted into the array.
    
//--------------Don't modify the code below--------------------------------------------------
    for (let i = 0; i < sequence.length; i++) {
        console.log(sequence[i]);
    }
}