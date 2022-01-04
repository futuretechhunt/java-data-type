// string data type

length 
toUpeerCase();
toLowerCase();
indexOf();
lastIndexOf();
replace();
slice();


let fname = "Misbahur";
let lname = "Rahman";

let fullName = fname + ' ' + lname;


let email = "misbahurbd@gmail.com";

let result = email.replace('gmail.com','yahoo.com');

let mailname = email.indexOf("@");
let ext = email.indexOf('.com');

let username = email.slice(0, mailname);

let data = email.slice(mailname + 1, email.length);
console.log("username :" + username);
console.log(" domain: " + data)

console.log(email)