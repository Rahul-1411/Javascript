let expenses = [
  { description: "Electricity-Bill", amount: 500, category: "Online" },
  { description: "Pizza", amount: 1000, category: "Food" },
  { description: "Electricity-Bill", amount :400,category:"Online" },
  {description: "Pizza", amount : 1005,category: "Food"}
];

// sum their amount according to the categories
let expenseReport = expenses.reduce((report,expense)=>{
    //report [expense.category]  = 0 + expense.amount;
    // Not a dynamic approach.
    report[expense.category]+= expense.amount;
    // For a dynamic approach 
   // report[expense.category]= (report[expense.category]|| 0)+ expense.amount

    return report;
},{Online:0,Food:0})
console.log(expenseReport);
