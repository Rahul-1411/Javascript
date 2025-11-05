let chaiRecipe = {
  name: "Masala chai",
  ingredients: {
    tealeaves:"Assam Tea",
    milk:"Full Cream Milk",
    sugar:" Brown Sugar",
  },
  instruction: "Rahul likes watching Cole Palmer Playing Football "
};
console.log(chaiRecipe.ingredients.milk);
let updatedChaiRecipe = {
    ...chaiRecipe,
    instruction:"Rahul likes to talk with friends who likes Football "

}
console.log(updatedChaiRecipe.instruction);