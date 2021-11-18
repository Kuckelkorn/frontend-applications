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

function newObject(obj,id){
  const data = {}
  const flavour = []
  if (flavour.length === 0){
    for (const [key,value] of Object.entries(obj)) {
      flavour.push({taste:key , value: value})
    }
    Object.assign(data, {id:id, flavour:flavour})
    console.log(data)
    return data
  } else {
    flavour = []
    for (const [key,value] of Object.entries(obj)) {
      flavour.push({taste:key , value: value})
    }
    Object.assign(data, {id:id, flavour:flavour})
    console.log(data)
    return data
  }

}

export default findTaste
