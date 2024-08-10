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
    const personJSON = `{"name": "John", "age": 31, "city": "New York"}`;
    //--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // personJSON is a JSON string
    // Convert it to a JS object string with parse
    // Save the object as person
    // Print the name of the person object
    const person = JSON.parse(personJSON);
    console.log(person.name);
    //----------------Don't modify the code below--------------------------------------------------
}



