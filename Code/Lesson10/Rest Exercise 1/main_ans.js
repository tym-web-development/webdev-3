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
    const groceries = [10.2,8.1,7.5,6.2,5.5,6.7];
    console.log(sum(...groceries));
}


//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // groceries is an array of the prices of groceries bought. 
    // Use the Rest operator to define a function sum
    // sum should take as many arguments as needed and return the total sum
    // The code to call sum on the groceries array has already been written
function sum(...numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total += numbers[i];
    }
    return total;
}