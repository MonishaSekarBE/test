//+ - / * %
var num1 =3;      //variable  name don't start with number eg;2num
var num2 =6;
console.log(num1 + num2);
console.log(num1 * num2);
console.log(num1 % num2);

var ans = num1 > num2;     //boolean value

console.log(ans);
//calculate discount percentage
var sellingPrice = 500;
var listingPrice = 700;

discountPercentage = ((listingPrice - sellingPrice) / listingPrice) *100;
console.log("discountPercentage=", Math.round(discountPercentage),end="%");