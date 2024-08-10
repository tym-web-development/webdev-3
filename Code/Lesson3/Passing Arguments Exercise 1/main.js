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
    daysCalculator(days);
}

//--------------Don't modify the code above--------------------------------------------------
// Write your code here.
// Define a function named daysCalculator which takes in a number parameter named days
// The function should calculate the number of years, months and days from the days parameter
// The function print in the following format: "Years: x, Months: y, Days: z"
