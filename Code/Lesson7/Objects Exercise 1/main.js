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
    //Make an object person
    // Give the object a property, name: "John"
    // Also create a method sayHello, which prints the greeting:
    // `Hello, my name is ${this.name}!`
    // You may add more properties and methods too if you wish
    const person = {
        
    };

    person.sayHello();
    //--------------Don't modify the code below--------------------------------------------------
}