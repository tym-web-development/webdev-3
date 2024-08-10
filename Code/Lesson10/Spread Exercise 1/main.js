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
    const walmart = [10.2,8.1,7.5,6.2,5.5,6.7];
    const bestbuy = [11.2,12.5,8.3];
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // walmart and bestbuy are arrays of the prices of toilet paper in the 2 shops. 
    // Use the Spread operator to join the arrays together into a new array called total
    // Use the Spread operator to feed the array values into Math.min to get the lowest price
    // Save this lowest value as a variable called cheapest

    
//--------------Don't modify the code below--------------------------------------------------
   console.log(cheapest);
}