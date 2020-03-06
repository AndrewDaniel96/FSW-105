//part 1
var officeItems=["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
function countItem(arrayName, itemToSearch){
    var numItem = 0;
    for(i=0; i < arrayName.length; i ++){
        if(arrayName[i] == itemToSearch){
            numItem = numItem + 1
        }
    }
    console.log("There are " + numItem + " " + itemToSearch + "s in the office.")
}

countItem(officeItems, "computer");
//part 2
var peopleWhoWantToSeeMadMaxFuryRoad = [
{
    name: "Mike",
    age: 12,
    gender: "male"
},{
    name: "Madeline",
    age: 80,
    gender:"female"
},{
    name: "Cheryl",
    age: 22,
    gender: "female"
},{
    name: "Sam",
    age: 30,
    sam: "male"
},{
    name: "Suzzy",
    age: 4,
    gender: "female"
}
]
//part 3 and part 4
for(i = 0; i <peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name}, IS OLD ENOUGH to see Mad Max, let ${peopleWhoWantToSeeMadMaxFuryRoad[i].gender} in`)
    }else{
        console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} IS NOT OLD ENOUGH to see Mad Max, DO NOT let ${peopleWhoWantToSeeMadMaxFuryRoad[i].gender} in`)
    }
}
//part 5 
for (i = 0; i < 101; i ++){
    if(i % 2 == 0) {
        console.log("is even")
    }else{
        console.log("is odd")
    }
}