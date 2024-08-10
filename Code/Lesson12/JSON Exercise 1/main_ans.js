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
    const person = {name: "John", age: 31, city: "New York"};
    //--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // person is a JavaScript Object
    // Convert it to a JSON string with stringify
    // Save the string as myJSON
    const myJSON = JSON.stringify(person);
    //----------------Don't modify the code below--------------------------------------------------
    console.log(myJSON);
}



