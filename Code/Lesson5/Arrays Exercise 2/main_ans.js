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
    let myPets = ["dog", "cat"];
    let johnPets = ["fish", "rabbit"];
    let jimmyPets = ["bird", "snake"];
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here.
    //Join the three arrays into one array called "allPets" 
    let allPets = myPets.concat(johnPets, jimmyPets);
    //Arrange the pets in "allPets" in descending order
    allPets.sort().reverse();
     
    //--------------Don't modify the code below--------------------------------------------------
    console.log(allPets);
}