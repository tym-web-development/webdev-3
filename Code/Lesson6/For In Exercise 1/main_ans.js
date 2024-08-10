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
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    //Make a for loop that iterates through the names array.
    //Print out the message: “[person] is here today!” for each iteration.
    for (let index in names){
        console.log(`${names[index]} is here today!`);
    }
    
    //--------------Don't modify the code below--------------------------------------------------
}