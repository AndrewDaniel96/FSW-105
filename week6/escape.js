const readline = require("readline-sync");

//Set up
const name = readline.question(`Greeting player, what is your name?`);
let keyInv = false; //dictates player does not have key
let isAlive = true;
let excaped = false;

//Game start
console.log( `${name}, you wake up in a dark room with no windows, a desk, and a door that appears locked. What would you like to do?` );

while (isAlive == true && excaped == false){
    const option = readline.questionInt( `Please select what you would like to do next?:  -1- Put your hand in the hole?  -2- Try to find the Key?  -3- Try to open the Door?`,);
    if (option == 1 ) {
        console.log( `As you stick your hand in the hole you feel a sharp poke. As your vision starts to fade, you relize you made a grave mistake... GAME OVER, ${name} HAS DIED!` );
       isAlive = false;         
    }else if (option == 2 && keyInv == false){
        console.log( `As you look around the room, you find a key taped to the bottom of the table. KEY ACQUIRED` );
       keyInv = true;
    } else if (option == 2 & keyInv == true){
        console.log( `You alread found the key...` );
    } else if (option == 3 && keyInv == false){
        console.log( `The door is stuck shut. As you look at the door you notice a keyhole.`);
    }else if (option == 3 && keyInv == true){
        console.log( `As you enter the key, you hear a click. AS the door opens up a ray of sunlight fills the dark room. VICTORY, ${name} HAS ESCAPED THE ROOM!` );
        isAlive = false;
        excaped = true;
    } else{
        console.log( `You have selected an option that is not valid. Please pick 1, 2, or 3` )
    };
};