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
    const animal = input;
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here. Print the type of animal
    //apply switch and case here, possible animals are Parrot, Dog, Cat, Shark, Goldfish, Eagle
    switch(animal){
        case "Parrot":
            console.log("Bird");
            break;
        case "Dog":
            console.log("Mammal");
            break;
        case "Cat":
            console.log("Mammal");
            break;
        case "Shark":
            console.log("Fish");
            break;
        case "Goldfish":
            console.log("Fish");
            break;
        case "Eagle":
            console.log("Bird");
            break;
        default:
            console.log("I don't know");
    }
    //--------------Don't modify the code below--------------------------------------------------
}