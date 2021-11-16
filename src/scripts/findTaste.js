import tasteAPI from "./helpers/tasteAPI.js";
import update from "./d3"
import * as d3 from 'd3'

let data

function findTaste () {
  const recipeID = document.querySelector("div").id
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
    // .then(data => {
    //   const div = document.querySelectorAll("div")
    //   for ( let i = 0; i < div.length; i++){
    //     div[i].remove()
    //   }
    //   data.map((obj) => {
    //     const element = document.createElement("div")
    //     element.addEventListener("click", findSimiliar)
    //     element.id = obj.id
    //     element.innerHTML = `<p> ${obj.title} </p> <img src=${obj.image}>`
    //     document.body.appendChild(element)
    //   })
    // })
}

function newObject(obj,id){
  const data = {}
  const flavour = []
  for (const [key,value] of Object.entries(obj)) {
    flavour.push({taste:key , value: value})
  }
  Object.assign(data, {id:id, flavour:flavour})
  return data
}

export default findTaste
