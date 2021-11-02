const button = document.querySelector("button")

function substitutes () {
  let ingredient = document.querySelector("#ingredient").value
  console.log(ingredient);
  const spoonacular = fetch(`https://api.spoonacular.com/food/ingredients/substitutes?apiKey&ingredientName=${ingredient}`)

  spoonacular
    .then(response => response.json())
    .then(data => {
      data.substitutes.map((obj) => {
        obj = obj.split("= ")
        // obj = obj.filter(x => isNaN(x))
        // obj = obj.filter( x => x !== "cup")
        // obj = obj.filter( x => x !== "oz")
        console.log(obj)
      })
    })
}

button.addEventListener("click", substitutes)
