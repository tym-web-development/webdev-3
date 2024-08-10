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
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // This tuition centre has two classes, English and French
    // Some students are in both classes
    // Use a Set to find out how many unique students are in both classes
    // Print the number of unique students
    
    
//--------------Don't modify the code below--------------------------------------------------
   
}