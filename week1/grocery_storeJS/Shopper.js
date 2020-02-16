var shopper = {
    firstName:"Andrew",
    lastName: "Daniel",
    family: true,
    money: 50,
    budget: 35,
    groceryCart: ["banana", "apple", "orange"],
    fullName: function() {
        return this.firstName + this.lastName;
    }
};
console.log(shopper);