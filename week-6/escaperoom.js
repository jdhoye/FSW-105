var readlineSync = require(`readline-sync`);

const name = readlineSync.question("Who do I have the pleasure of gaming with?");

const welcomeMessage = `Welcome to your worst nightmare ${name}. Can you escape?`;
console.log(welcomeMessage);

let isAlive = true;
let foundKey = false;

while (isAlive == true){
    const menuID = readlineSync.keyIn(` Press 1 if you want to be a menace \n Press 2 to find key \n Press 3 to Escape!`, {limit: `$<1-3>`});
    if (menuID == 1){
        console.log(`You menace, you have DIED! Game Over ${name}`);
        isAlive = false;
    } 
    else if (menuID == 2 && foundKey == true){
        console.log(`You have found the key already ${name}, please proceed to the door!`);
    } 
    else if (menuID == 2 && foundKey == false){
        console.log(`${name}, You DID IT! You have found the key. Please find the door.`);
        foundKey = true;
    } 
    else if (menuID == 3 && foundKey == false){
        console.log(`${name}, you cant open the door because you have NOT found the key. Please find the key`);
    } 
    else if (menuID == 3 && foundKey == true){
        console.log(`${name}, You ESCAPED! Game is now Over. Thank you for playing!`);
        isAlive = false;
    }
}