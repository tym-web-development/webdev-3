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
    let name = input;
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here.
    //Modify the string in the console.log to print out the correct message
    
    //get this line to print: "Hi there, John!" , if variable name is John
    console.log("");

    //get this line to print: "Your name has 4 characters!" , if variable name is 4 characters long
    console.log("");

//--------------Don't modify the code below--------------------------------------------------
}