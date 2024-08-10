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
    const heights = [1.2,1.65,1.75,1.62,1.40,1.9];
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // heights is an array of heights of individuals taking a rollercoaster ride. 
    // Only those between 1.5m (inclusive) and 1.8m (inclusive) are allowed to take the ride  
    // Use Array filter to filter out those who are not allowed to take the ride
    // Save the result in a new array called allowedHeights
    
//--------------Don't modify the code below--------------------------------------------------
   for (let i = 0; i < allowedHeights.length; i++) {
       console.log(allowedHeights[i]);
   }
}