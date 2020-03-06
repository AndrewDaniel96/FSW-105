//part 1
function sum(num1, num2){
    return num1 + num2
}
var result1 = sum(5, 4)
console.log(result1)
//part 2
function large(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
var result2 = large(5, 20, 12)
console.log(result2)
//part 3
function what(num1){
    if(num1 % 2 ==0){
        return "even"
    }else{
        return "odd"
    }
}
var result3 = what(5)
console.log(result3)
//part 4
function double(string){
    return string + string
}
var result4= double("Can")
console.log(result4)