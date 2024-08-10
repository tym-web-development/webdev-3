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
    let x = parseInt(input);
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // x is an integer. Write a try-catch block to check if x is even or odd.
    // If x is even, throw "Even", otherwise print `${x} is Odd`
    // If an error is caught, print "Error: " and the error message
    try {
        let remain = x%2;
        if (remain === 0) {
            throw "Even";
        }
        else {
            console.log(x + " is Odd");
        }
    }
    catch(err) {
        console.log("Error: " + err);
    }   
    
//--------------Don't modify the code below--------------------------------------------------
   
}