var sellingPrice = 199;
var actualPrice = 799;

var discountPrice = (actualPrice - sellingPrice)/actualPrice * 100;

console.log(discountPrice);

 var displayDiscountPrice = Math.round(discountPrice);

console.log(displayDiscountPrice);