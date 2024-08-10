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
    let string = "Dogs,Cats,Hamsters,Parrots,Fish";
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here.
    //Modify the string in the console.log to print out the correct message
    
    //get this line to print: "John likes Parrots!" , use slice()/substring() method
    console.log("John likes " + string + "!");

    //get this line to print: "P for PARROTS!" , use at()/charAt()/[] method, slice()/substring() method and toUpperCase() method
    console.log(string + " for " + string + "!");

//--------------Don't modify the code below--------------------------------------------------
}