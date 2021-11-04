import findSimiliar from "./findSimiliar.js";
import recipeAPI from "./helpers/recipeAPI.js";

function findRecipes () {
  const ingredient = document.querySelector("#ingredient").value
  console.log(ingredient);
  const recipe = fetch(recipeAPI.endpoint + recipeAPI.apiKey + "&query=" + ingredient + "&number=4")
  recipe
    .then(response => response.json())
    .then(data => {
      console.log(data.results)
      data = data.results
      return data
    })
    .then(data => {
      const div = document.querySelectorAll("div")
      for ( let i = 0; i < div.length; i++){
        div[i].remove()
      }
      data.map((obj) => {
        console.log(obj)
        const element = document.createElement("div")
        element.addEventListener("click", findSimiliar)
        element.id = obj.id
        element.innerHTML = `<p> ${obj.title} </p> <img src=${obj.image}>`
        document.body.appendChild(element)
      })
    })
}

export default findRecipes
