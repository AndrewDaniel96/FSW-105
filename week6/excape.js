const readline = require("redline-sync");

//Set up
const name = readline.question(`Greeting player, what is your name?`);
let keyInv = false; //dictates player does not have key

//Game start
function chosenPath(num){
    console.log( `1: Put hand in the hole.` );
    console.log( `2: Find the key.` );
    console.log( `3: Open the door.` );
    let option = readline.questionInt( `What would you like to do? Enter numer: ` )
    return option
};
console.log( `Greetings ${name}, and welcome to the room. You must escape before the room fills with posion gas. Before you is a door, how do you proceed?` );

//Outcomes
function winOrLose(){
    console.log(`   `)
    let outcome = chosenPath(choice)
    if(choice == 1){
        console.log( `As you place your hand in the hole, you feel a prick. As your vision fades you relize that you have made a grave mistake...` )
        console.log( `GAME OVER, ${name} DID NOT ESCAPE THE ROOM` )
    } else if(choice == 2 && keyInv === false){
        console.log( `   ` );
        console.log( `You search under the table and notice a key taped to the bottom` );
        console.log( `KEY ACQUIRED!` );
        keyInv = true;
        winOrLose()
    } else if(choice == 2 && keyInv === true){
        console.log( `  ` )
        console.log( `You already have the key...` )
        winOrLose()
    } else if(choice == 3 && keyInv === fale){
        console.log( `  ` )
        console.log( `you try to open the door, but nothing happens. You notice a keyhole in the door.` )
        winOrLose()
    } else if(choice == 3 && keyInv === true){
        console.log( `  ` )
        console.log( `as you sline in the key, you hear a click. The door slowly slides and you see sunshine on the comeing entering the dark room.` )
        console.log( `VICTORY! ${name} HAS EXCAPED THE ROOM!` )
    } else{
        console.log( `  ` )
        console.log( `You have entered an incorrect option, please type either 1, 2, or 3.` )
    }
};