function payingFriend() {
    let friends = ["John", "Jimmy", "Jane", "Jack", "Jill", "Jimothy", "Jillian"];
    let friendPaying;
//--------------Don't modify the code above--------------------------------------------------
    // Write your code here.
    //Choose a random friend from the array and assign it to variable "friendPaying"
    //Use the Math.random() function, it gives a float between 0 and 1
    //Multiply the result by the length of the array to get a random index
    //Use Math.floor() to round down to the nearest whole number
    const randomIndex = Math.floor(Math.random() * friends.length);
    friendPaying = friends[randomIndex];
    //--------------Don't modify the code below--------------------------------------------------
    console.log("Today, " + friendPaying + " is paying for lunch.");
}

payingFriend();