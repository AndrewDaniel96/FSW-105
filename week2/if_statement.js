///preliminaries
if(5 > 3){
    console.log("is greater than")
};
if("cat" === 3){
    console.log("is the length")
};
if("cat" == "dog"){
    console.log("is the same")
} else{
    console.log("not the same")
};
//bronze medal
var person ={
    name: "Bobby",
    age: 12
};
if("Bobby" >= 18){
    console.log("<theNameOfThePersonInObject> is allowed to go to the movie.")
} else{
    console.log("Bobby is not allowed to go to the movies.")
};
if(person.name.startsWith("B")){
    console.log("Bobby is a B-boy and is allowed in to the movie.")
};
if("Bobby" > 18 && person.name.startsWith("B")){
    console.log("Bobby is a B-Boy and over 18, so is allowed in the movie.")
};
//Silver Medal
if(1 === "1"){
    console.log("strict")
} else if(1 == "1"){
    console.log("loose")
} else{
    console.log("not equal at all")
};
//Gold Medal
console.log(typeof "dog");
console.log(typeof true);
var firstName = "Andrew"
console.log(firstName); //This is how I would check if defined. 
if("s" > 12){
    console.log("s is greater than 12")
} else{
    console.log("s is not greater than 12")
};
if("a" < 13){
    console.log("a is less than 13")
} else{
    console.log("a is not less than 13")
};
var myNum = 33;
if(myNum % 2 == 0){
    console.log("33 is even")
} else{
    console.log("33 is odd")
};