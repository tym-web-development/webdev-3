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
    console.log("Hi there, " + name + "!");
    //console.log("Hi there,".concat(" ", name, "!"));
    console.log("Your name has " + name.length + " characters!");

//--------------Don't modify the code below--------------------------------------------------
}