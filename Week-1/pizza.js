let numberOfGuest = -1;
let pizzaSizes;
// small <=2 medium <=5 large 5>

if (numberOfGuest <= 2) {
  pizzaSizes = "Small";
} else if (numberOfGuest <= 5) {
    pizzaSizes = "Medium";
} else {
    pizzaSizes = "Large";
}
console.log(pizzaSizes);
