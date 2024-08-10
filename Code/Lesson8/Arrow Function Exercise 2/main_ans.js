//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. 
    // Change the existing function to an arrow function.
    // Test to make sure it still works

test = (min, max) =>  Math.floor(Math.random()*(max-min)) + min;


//--------------Don't modify the code below--------------------------------------------------
console.log(`Random number is: ${test(21,5)}`);