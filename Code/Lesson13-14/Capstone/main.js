const readline = require('readline');

// Function to read input from the terminal and return it as a Promise
function readTerminalInput() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Enter your input: ', (input) => {
      rl.close();
      resolve(input);
    });
  });
}

// Using the function with async/await
async function main() {

  while (true) {
    let input = await readTerminalInput();
    //! ------------------- Add your code below for actions in the main loop -------------------------------
    console.log('You entered:', input);
    
  }  
}

//Array with people objects
let queue = [
    { name: 'John', age: 30},
    { name: 'Jane', age: 25},
    { name: 'Jack', age: 40},
    { name: 'Jill', age: 35},
    { name: 'James', age: 50}
  ]
//! ----------- Define your functions below this line -------------------------------



//This is the call for the main function to start the program
//Subfunctions and global variables should be above this
main();


