<script>
  import { TasteStore } from "../stores/tasteStore";
  import Dish from "./Dish.svelte"
  export let item

  function findTaste(recipeID){
    const apiKEY = API_KEY
    const taste = fetch("https://api.spoonacular.com/recipes/" + recipeID + "/tasteWidget.json?apiKey=" + apiKEY)
  
    taste
      .then(response => response.json())
      .then(data => {
        return data
      })
      .then(data => {
        TasteStore.update((currentData) => {
          currentData = newObject(data, recipeID)
          return currentData.flavour
        })
      });
  }

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

</script>

<Dish>
  <h2>{item.title}</h2>
  <img src={item.image} alt={item.title}>
  <button on:click={() => findTaste(item.id)}>Chart</button>
</Dish>