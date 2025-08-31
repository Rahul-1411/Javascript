class Person{
    constructor(fname , lname )
    {
        this.fname = fname;
        this.lname = lname;

    }
    getFullName(){
        return `${this.fname} ${this.lname}`;
    }
}


const p1 = new Person("Rahul","Thakur");
// Internally -> p1.__proto__ = Person.prototype hi hoga just like p1.__proto__ = p2 as object.js
const p2 =  new Person ("Aakash","Mehta");
console.log(p1.getFullName());
console.log(p2.getFullName());