const obj1 = {
    fname:"Rahul",
    lname:"Thakur",
    getFullname: function()
    {
        return `${this.fname} ${this.lname}`;

    },

}; 
const obj2 = {
    fname:"Arka",
    lname:"Biswas",
    // getFullname: function()
    // {
    //     return `${this.fname} ${this.lname}`;

    // },
};
// obj2.__proto__ = obj1; -> Internal Things 
// obj1.__proto__.__proto__ = null;
//  obj1.__proto__ = null; //-> Object ka reference ura diya hai humne
console.log(obj1.getFullname());// error aa jayega agar getFullname nahi define kare toh 
console.log(obj2.getFullname()); 
console.log(obj2.toString());
// There is a coding principle of DRY -> Don't Repeat Yourself which is violating.

