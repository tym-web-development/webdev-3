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
    let array = ["first", "third", "third", "fourth", "fifth","fifth"];
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    //change the item at index 1 to "second"
    
    //remove the last item in the array
    
    //add a new item at the end of the array called "sixth"
    
    //--------------Don't modify the code below--------------------------------------------------
    console.log(array);
}