var Numbers = ["Delhi", "Pune", "Mumbai", "Goa", "Punjab"];
var newNumbers = ["Delhi", "Pune", "Mumbai", "Goa", "Punjab"];


//fill method
console.log(Numbers.fill("Hyderabad",0,3));

// filter Method
var result = newNumbers.filter((e) => (e != "Delhi"))
console.log(result);