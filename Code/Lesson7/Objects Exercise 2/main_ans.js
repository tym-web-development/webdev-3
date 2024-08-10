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
    const person = {
        name: 'John',
        age: 10,
        color: 'red',
        isAlive: true,
    };
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // Modify the object person
    // Change the property, name to be "Mr Bean"
    // Also delete the property isAlive because we know he is alive
    // Add a property : value pair, friend : "Teddy"
    // Iterate through the object with the For In loop, printing the property: value for each iteration
    person.name = 'Mr Bean';
    delete person.isAlive;
    person.friend = 'Teddy';
    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
    

//--------------Don't modify the code below--------------------------------------------------
}