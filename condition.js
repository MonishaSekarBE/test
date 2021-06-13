//login email google facebook
//adding one mroe line
//new line here for sample
var email = true;
var google = false;
var faceBook = true;

if (email || faceBook || google){
    console.log("login success");
}
if(email && google && faceBook){
    console.log("allow user to make a purchase");
} else {
    console.log("you are not allwed")
}