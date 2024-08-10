//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // Change the existing function to an arrow function.
    // Test to make sure it still works

function test(min, max) {
    let num = Math.floor(Math.random()*(max-min)) + min;
    return num;
}

//--------------Don't modify the code below--------------------------------------------------
console.log(`Random number is: ${test(21,5)}`);