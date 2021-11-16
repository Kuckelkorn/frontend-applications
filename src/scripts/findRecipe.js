// import findSimiliar from "./findSimiliar.js";
import findTaste from "./findTaste.js";
import recipeAPI from "./helpers/recipeAPI.js";

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
        const element = document.createElement("div")
        element.addEventListener("click", findTaste)
        element.id = obj.id
        element.innerHTML = `<p> ${obj.title} </p> <img src=${obj.image}>`
        document.body.appendChild(element)
      })
    })
}

export default findRecipes
