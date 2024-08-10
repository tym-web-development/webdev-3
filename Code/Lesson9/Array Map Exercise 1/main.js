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
    const nums = [1,2,4,8,9,22,51,100];
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // Use Array Map to determine if the number is a even number or odd number
    // If the number is even, return 'even', otherwise return 'odd'
    // Store the result in a new array called results
    
    

//--------------Don't modify the code below--------------------------------------------------
    for (let i = 0; i < results.length; i++) {
        console.log(results[i]);
    }    
}