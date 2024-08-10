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
    //Make a While or Do-While loop that prints the value from 10 to 0 in descending order. 
    //For each iteration just print the correct number.
    // Ensure it is in descending order, from 10 to 0.
    let counter = 10;
    while (counter >= 0) {
        console.log(counter);
        counter--;
    }
    //OR
    // do {
    //     console.log(counter);
    //     counter--;
    // } while (counter >= 0);
    //--------------Don't modify the code below--------------------------------------------------
}