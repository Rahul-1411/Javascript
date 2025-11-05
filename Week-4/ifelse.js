/**function prepareChai(type)
{
    // Check atfirst whether it is string or not and then convert into
    //  uppercase or lowercase as per the user requirement.
    if(type === "Masala Chai")
    {
        console.log("Adding spices to the chai");
    }
    else{
        console.log("Tumhara chai ban raha hai");
    }
}
prepareChai("Masala Chai");
prepareChai("Ginger Chai");
**/


// Check if a user buy some football and their net payment is more than 1000 then give him 10% discount 
// otherwise take the full payment with a small message

function CheckNetPayment(Payment) // parameter
{
    // convert into Number 
    Payment = Number(Payment);
    // let totalpayment = Payment;
    if(Payment >1000){
        // totalpayment =(Payment *0.9);
        // console.log(`Total Payment is  ${totalpayment}`);
        return Payment *0.9;
         
    }
     return Payment;

}
let finalBill = CheckNetPayment("1500");
console.log(finalBill);