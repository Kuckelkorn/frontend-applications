import tasteAPI from "./helpers/tasteAPI.js";
import update from "./d3"

let data

function findTaste (recipeID) {
  // const recipeID = document.querySelector("div").id
  console.log(recipeID)
  const taste = fetch(tasteAPI.endpoint + recipeID + "/tasteWidget.json?apiKey=" + tasteAPI.apiKey)
  
  taste
    .then(response => response.json())
    .then(data => {
      return data
    })
    .then((data) => {
      data = newObject(data, recipeID)
      update(data.flavour)
    })
}

// rewrite the json data so that d3 can read it

function newObject(obj,id){
  // declare a new object
  const data = {}
  // empty array to push to
  const flavour = []
  // for every entry in the object create a new object in the array
  for (const [key,value] of Object.entries(obj)) {
    flavour.push({taste:key , value: value})
  }
  Object.assign(data, {id:id, flavour:flavour})
  return data
}

export default findTaste
