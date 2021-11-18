// import findSimiliar from "./findSimiliar.js";
import recipeAPI from "./helpers/recipeAPI.js";
import createCard from "./helpers/render.js"

function findRecipes () {
  const ingredient = document.querySelector("#ingredient").value
  const recipe = fetch(recipeAPI.endpoint + recipeAPI.apiKey + "&query=" + ingredient + "&number=4")
  recipe
    .then(response => response.json())
    .then(data => {
      data = data.results
      return data
    })
    .then(data => {
      const div = document.querySelectorAll("div")
      for ( let i = 0; i < div.length; i++){
        div[i].remove()
      }
      data.map((obj) => {
        createCard(obj)
      })
    })
}

export default findRecipes
