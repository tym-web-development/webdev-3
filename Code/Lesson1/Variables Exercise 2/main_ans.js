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
    const name = input;
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. Input has already been taken and assigned to variable name.
    //Use console.log to print out the greeting message. 'Hi [name], nice to meet you!'
    console.log('Hi '+ name + ', nice to meet you!');

//--------------Don't modify the code below--------------------------------------------------
}