// Problem: Create an object representing a type of tea with properties for name, type and caffeine content.
const teas={
    name:"Lemon Tea",
    type:"Green Tea",   // tea type : 
    caffine:"Low"
}
// Problem: Acess and Print the name and Type properties of the tea object.
console.log(teas.name);
console.log(teas["type"]);
// Problem: Add a new property origin to the tea object.
teas.origin = "China";
// Problem: Change the caffiene level of the tea object to "Medium"
teas.caffine = "Medium";

// Problem: Remove the type property from the tea object.
delete teas.type;
// Problem: Check if the tea object has a property origin.
console.log("origin" in teas);

// Problem: Use a for .. in loop to print all the properties of the tea object.
for(let key in teas){
    console.log(key + ": "+teas[key])
}

// Problem: Create a nested object Representing different types of teas and their properties
const myTeas ={
    greenTea:{
        name:"Green Tea",
        cups:{
            one:"1",
            two:"2"
        }

    },
    blackTea:{
        name:"Black chai"

    }
}
// Problem: Create a copy of the tea object.
const teaCopy = {...myTeas} // Shallow Copy 1st level ka key ko copy karega nested copy ka reference hoga
teaCopy.greenTea.cups.one = "4";
// const newObj =  new Object(myTeas);
console.log(newObj)
console.log(myTeas);
const anotherCopy = myTeas; // reference 
console.log(teaCopy);