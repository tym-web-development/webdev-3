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
    const animal1 = "Dogs";
    const animal2 = "Cats";
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here.
    //Modify the string in the console.log to print out the correct message
    //get this line to print: "John likes Dogs but hates Cats." , use string templates
    console.log(`John likes ${} but hates ${}.`);


//--------------Don't modify the code below--------------------------------------------------
}