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
    const marks = parseInt(input);
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here.
    //apply if, else if and else here
    if (marks < 50){
        console.log("Fail");
    } 
    else if (marks < 65){
        console.log("Good");
    }
    else if (marks < 85){
        console.log("Very Good");
    }
    else{
        console.log("Excellent");
    }
    //--------------Don't modify the code below--------------------------------------------------
}