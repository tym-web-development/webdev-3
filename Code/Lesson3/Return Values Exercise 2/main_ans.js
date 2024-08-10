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
    const days = parseInt(input);
    const years = daysCalculator(days);
    console.log(`Years: ${years}`);
}
//--------------Don't modify the code above--------------------------------------------------
// Write your code here.
// Define a function named daysCalculator which takes in a number parameter named days
// The function should calculate the number of years from the days parameter
// The function should return the number of years.
function daysCalculator(days){
    let years = Math.floor(days/365);
    return years;
}