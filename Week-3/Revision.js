Function.prototype.describe = function()
{
    console.log(`Function name is ${this.name}`);
}

function masalachai()
{

}
function gingerchai()
{

}
function greet(name){ // Parameter 
    return `Hello ${name}`;

}
greet.describe();// => "Rahul" => argument 
masalachai.describe(); // => output Function name will be coming 

function add(a,b)
{
    return a+b; // function declaration 
}
const subtract = function(a,b)
{
    return a-b; // function Expression
}

const multiply = (a,b) =>a*b;

// 1st class Function 
// Take a function as an argument and treat it like a parameter.
function applyOperation(a,b, Operation)
{
    return Operation(a,b); // Operation as  arrow function 
}
const result = applyOperation(5,4,(x,y)=>x/y);


// Tiffin Concept => Parent - child Concept 
function createCounter(){
    let count = 0;
    return function()
    {
        count++;
        return count;
    }
}

const Counter = createCounter(); // Const counter = function()
console.log(Counter());
// function Onef()
// {
//     let MyName = "hitesh";
// }
// console.log(MyName); // Out of Scope 



(function(){
    console.log("hitesh");
})()
()() // IIfe
(function ()
{
})()
