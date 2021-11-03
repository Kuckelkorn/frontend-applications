const button = document.querySelector("button")

function findRecipes () {
  let ingredient = document.querySelector("#ingredient").value
  console.log(ingredient);
  const spoonacular = fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=apiKey&query=${ingredient}&number=4`)

  spoonacular
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      data = data.results
      return data
    })
    .then(data => 
      data.map((obj) => {
        document.write(`<p> ${obj.title} </p>`)
        document.write(`<img id=${obj.id} src=${obj.image}>`)
      })
    )
}

button.addEventListener("click", findRecipes)
