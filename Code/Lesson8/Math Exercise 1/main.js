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
    const r = parseInt(input);
    let v;
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // Use the Math properties and methods to implement the equation of volume of a sphere
    // v = 4/3∙𝜋∙r^3, where v is volume of sphere and r is radius of sphere
    

//--------------Don't modify the code below--------------------------------------------------
    console.log(`Volume of the sphere is: ${v}`);
}