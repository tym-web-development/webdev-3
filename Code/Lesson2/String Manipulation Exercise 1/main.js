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
    //Modify the string in the console.log to print out the correct message
    console.log('John's dog is cute. It kinda looks like this: /ᐠ._.ᐟ\');

//--------------Don't modify the code below--------------------------------------------------
}