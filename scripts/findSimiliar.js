import substituteAPI from "./helpers/substituteAPI.js";

function findSimiliar () {
  const recipeID = document.querySelector("div").id
  const similiar = fetch(substituteAPI.endpoint + recipeID + "/similar?apiKey=" + substituteAPI.apiKey + "&number=4")
  
  similiar
    .then(response => response.json())
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
        element.innerHTML = `<p> ${obj.title} </p>`
        document.body.appendChild(element)
      })
    })
}
// <img src=${obj.image}>
export default findSimiliar