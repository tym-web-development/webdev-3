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
    const eurosPrice = [10.2,8.1,7.5,6.2,5.5,6.7];
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // eurosPrice is an array of prices of coffee in euros
    // Use Array forEach to convert it to SGD (1 Euro is 1.45 SGD)
    // If the price is above 10 SGD, print 'Expensive', otherwise print 'Cheap'
    
    
//--------------Don't modify the code below--------------------------------------------------
   
}