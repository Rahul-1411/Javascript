function greet (name)
{
    console.log(`Hello ${name}`);
    
}
greet("Rahul");
greet ("Arka");

let globalVar = "I am global";
function modifyGlobalvar(){
    globalVar = "I am modified";
    let blockScopedVar = "I am blocked Scoped";
    console.log(blockScopedVar);
    
}
modifyGlobalvar();

// function
// let config = function()
// {

// }
// config()
 let config = function(){
    let settings ={
        theme : "dark"
    }
    return settings;
 }() // iiFe-> use and throw function 
// (()=>{})()


let person1 = {
    name:"ravi",
    greet:function()
    {
        console.log(`Hello ${this.name}`);
    }
}
// context -> Kisne call kiya 
let person2 = {
    name:"hitesh",

}
// bind bhi use kar sakte hai lekin bind return a new function 
person1.greet.call(person2);
const bindgreet = person1.greet.bind(person2);
bindgreet()
//console.log(bindgreet());

