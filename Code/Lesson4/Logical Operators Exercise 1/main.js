const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// rl.question('', (answer) => {
//     test(answer);
//     rl.close();
// });

let inputs = [];
rl.on('line', (input) => {
    inputs.push(input);
    if (inputs.length === 2) {
        test();
        rl.close();
    }
});

function test(input) {
    let subject = inputs[0].trim();
    let score = parseInt(inputs[1].trim());
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here.
    //apply Logical Operators with if, else if and else here
    
    //--------------Don't modify the code below--------------------------------------------------
}