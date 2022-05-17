var countries = ["India","USA","Japan","japan"];
console.log(countries);

//Using new #Object Approach
var States = new Array("Hyderabad","Delhi","goa","Mumbai");
console.log(States);

// assessing arrays with method
console.log(States.length);

//to replace an element
States[2] = "punjab";
console.log(States);

//to remove last element
States.pop();
console.log(States);

// to remove 1st Element
States.shift();
console.log(States);

// to add element at First
States.unshift("Hyderabad");
console.log(States);

//To find index of particular element
console.log(States.indexOf("punjab"));