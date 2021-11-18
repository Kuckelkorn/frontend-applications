import findTaste from "../findTaste.js";

function createCard(obj) {
  const element = document.createElement("div")
  element.addEventListener("click", () => findTaste(obj.id))
  element.classList.add("card")
  element.id = obj.id
  element.innerHTML = `<p> ${obj.title} </p> <img src=${obj.image}>`
  document.body.appendChild(element)
}

export default createCard