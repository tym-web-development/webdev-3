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
    const fruits = new Map([
        ['apples', 10],
        ['oranges', 15],
        ['bananas', 20],
        ['watermelons', 30]
    ]);
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // fruits is a Map of the number of each type of fruits in a stall.
    // Use the forEach method to iterate over the fruits Map and print the following message for each entry:
    // 'There are 10 apples.'
    // 'There are 15 oranges.' etc.
    fruits.forEach((value, key) => {
        console.log(`There are ${value} ${key}.`);
    });

    
//----------------Don't modify the code below--------------------------------------------------
}


