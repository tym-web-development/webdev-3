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
    const animal = input;
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. Print the type of animal
    //apply switch and case here, possible animals are Parrot, Dog, Cat, Shark, Goldfish, Eagle
    
    //--------------Don't modify the code below--------------------------------------------------
}