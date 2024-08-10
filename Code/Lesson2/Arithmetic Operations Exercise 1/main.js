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
    const catAge = parseInt(input);
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here.
    //Key in the formula here to get the human age from the cat age
    let humanAge = 0;

    //--------------Don't modify the code below--------------------------------------------------
    console.log(`The cat is ${catAge} years old in cat years and ${humanAge} years old in human years.`);
}