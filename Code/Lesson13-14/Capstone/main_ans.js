const readline = require('readline');
const { PassThrough } = require('stream');

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
        const myArray = input.split(" ");
        if (myArray[0] === '+') {
            addPerson(myArray[1], parseInt(myArray[2]));
            console.table(queue);
        }
        else if (myArray[0] === '-') {
            removePerson(parseInt(myArray[1]));
            console.table(queue);
        }
        else if (myArray[0] === 'u') {
            updatePerson(parseInt(myArray[1]), myArray[2], parseInt(myArray[3]));
            console.table(queue);
        }
        else if (myArray[0] === 'a') {
            sortByAge();
            console.table(queue);
        }
        else if (myArray[0] === 'n') {
            sortByName();
            console.table(queue);
        }
        else if (myArray[0] === 'q') {
            break;
        }
        else {
            console.log('Invalid input');
        }
    }
}

//make me an array with people objects
let queue = [
    { name: 'John', age: 30},
    { name: 'Jane', age: 25},
    { name: 'Jack', age: 40},
    { name: 'Jill', age: 35},
    { name: 'James', age: 50}
  ]


function addPerson(name, age){
    //Add a new person to the array
    queue.push({name: name, age: age});
}

function removePerson(index){
    //Remove a person from the array
    queue.splice(index, 1);
}

function updatePerson(index, name, age){
    //Update a person in the array
    queue[index] = {name: name, age: age};
}

function sortByAge(){
    //Sort the array by age
    queue.sort(function(a, b){return a.age - b.age});
    // queue.sort();
}

function sortByName(){
    //Sort the array by name
    queue.sort(function(a, b){return a.name < b.name ? -1 : 1});
}



main();