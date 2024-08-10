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
    const english = ['James', 'John', 'Robert', 'Thomas'];
    const french = ['John', 'Michel', 'Louis', 'David', 'Thomas'];
    const mySet = new Set([...english, ...french]);
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // mySet is a Set of unique students in a tuition centre
    // Print the students in mySet in the format:
    // 1: James
    // 2: John, etc.
    
    
    
//--------------Don't modify the code below--------------------------------------------------
   
}