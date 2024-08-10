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
    const fruits = new Map();
    fruits.set('apple', 10);
    fruits.set('oranges', 15);
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // fruits is a Map of the number of each type of fruits in a stall. Originally, the store has 10 apples and 15 oranges.
    // The key is the name of the fruit and the value is the number of that fruit
     
    // The owner bought more fruits, so the store now has 20 bananas and 30 apples
    // The owner threw away all the oranges, so delete the oranges entry.
    // Ensure that the fruits Map is updated

    fruits.set('banana', 20);
    fruits.set('apple', 30);
    fruits.delete('oranges');
//----------------Don't modify the code below--------------------------------------------------
    console.log(fruits.get('apple'));
    console.log(fruits.get('banana'));
    console.log(fruits.get('oranges'));
}


