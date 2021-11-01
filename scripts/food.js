const button = document.querySelector("button")

async function substitutes () {
  let ingredient = document.querySelector("#ingredient").value
  console.log(ingredient);
  const spoonacular = fetch(`https://api.spoonacular.com/food/ingredients/substitutes?<apiKey=>&ingredientName=${ingredient}`)

  spoonacular
    .then(response => response.json())
    .then(data => {
      data.substitutes.map((obj) => {
        obj = obj.split(" ")
        obj = obj.filter(x => isNaN(x))
        obj = obj.filter( x => x !== "cup")
        obj = obj.filter( x => x !== "=")
        console.log(obj[0])
      })
    })
}

button.addEventListener("click", substitutes)