//                               String Methods
const name = "andrew";

//part 1
function capLow(str){
    let example1 = str;
    return example1.toUpperCase() + example1.toLowerCase();
};
console.log( capLow(name) );

//part 2
function halfOf(str){
    let example2 = str.length;
    return Math.floor((example2)/2);
};
console.log( halfOf(name) );

//part 3
function slicer(str){
    let example3 = str.length;
    let example3Sliced = str.slice(0, (Math.floor(example3))/2);
    return example3Sliced;
};
console.log( slicer(name) );

//part 4
function halfHalf(str){
    let example4 = str.length;
    let example4Half = Math.floor(example4)/2;
    let firstExample4 = str.slice( 0, example4Half );
    let secondExample4 = str.slice(example4Half, example4); 
    return firstExample4.toUpperCase() + secondExample4.toLowerCase();
};
console.log( halfHalf(name) );

//                             Array Methods
let fruit = ["banana", "appale", "orange", "watermelon"];
let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//part 1
function blender(){
    vegetables.pop();
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    fruit.shift();
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    let orangeIndex = fruit.indexOf("orange");
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    fruit.push(orangeIndex);
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    let vegetablesLength = vegetables.length;
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    vegetables.push(vegetablesLength);
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    let food = fruit.concat(vegetables);
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    food.splice(4, 2);
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    food.reverse();
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
    return food.join()
        //console.log("fruit: " + fruit)
        //console.log("vegetables: " + vegetables)
};

console.log("Inside the blender you will find: " + blender() );
console.log("fruit: " + fruit)
console.log("vegetables: " + vegetables)

