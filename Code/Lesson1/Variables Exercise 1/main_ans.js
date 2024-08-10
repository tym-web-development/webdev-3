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
    let a = 10;
    let b = 20;
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. It takes an input and prints out the correct response.
    let c = b;
    b = a;
    a = c;

//--------------Don't modify the code below--------------------------------------------------
    console.log(`a is ` + a);
    console.log(`b is ` + b);

}