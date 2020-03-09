var readlineSync = require('readline-sync');

function add(num1, num2){
    return num1 + num2;
};

function sub(num1, num2){
    return num1 - num2;
};

function mul(num1, num2){
    return num1 * num2;
};

function div(num1, num2){
    return num1 / num2;
};

 
//imput from user
let num1 = readlineSync.questionInt(`Please enter your first number: `);
let enteredOperation = readlineSync.question(`Please enter the operation to perform: add, sub, mul, div: `);
let num2 = readlineSync.questionInt(`Please enter your second number: `);

//function
if(enteredOperation == `add`){
    console.log(`The result is: ${+ add(num1, num2)}`)
}else if(enteredOperation == `sub`){
    console.log(`The result is: ${+ sub(numb1, num2)}`)
}else if(enteredOperation == `mul`){
    console.log(`The result is: ${+ mul(num1, num2)}`)
}else if(enteredOperation == `div`){
    console.log(`The result is:" ${+ div(num1, num2)}`)
}else{
    console.log(`You have selected an operation that does not exist.`)
};

