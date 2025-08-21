// const error 

// let fname = "Rahul";
// console.log(typeof(fname)); // string 
// let fname2= fname; // string -> assignment 
// console.log(fname);
// console.log(fname2);
// fname2= "Sourabh";
// console.log(fname);
// console.log(fname2);

let p1 = {
    fname:"Rahul",
    lname:"ch",
    address:{
        h:1,
        streetNo:1,
    }
}
const p1kaString = JSON.stringify(p1);
console.log(p1kaString);
let p2= JSON.parse(p1kaString);

// let p2 = {
//     // ...p1 ,// copy the variable of p1 with different address spread operator


// }

p2.fname= "Rohit Thakur";
p2.lname="SH";
p2.address.h="3";
console.log(p2);
console.log(p1);