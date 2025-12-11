
const obj = {
    personName: "Mukul",
    greet:function()
    {
        console.log(`Hello ${this.personName}`);
    },
};

console.log("Hello From Js");
// const a = 1;
// const b = 2;

// console.log("SUM", a+b);
// setTimeout(()=> console.log("I am delayed"),0);
setTimeout(obj.greet,10*1000); // Minimum toh 10 sec tak wait karo maximum pata nahi 
console.log("Bye - Bye ");

// settimeout() -> is a function that delays the execution that takes two parameter that take
// one callback function and a time that delays the execution which are in milliseconds i.e 1000 millisecond = 1 sec

