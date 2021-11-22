<script>
  import {RecipeStore} from '../stores/recipeStore'
  let ingredient = ''

  function findRecipes(){
    const apiKEY = API_KEY
    const recipe = fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=" + apiKEY + "&query=" + ingredient + "&number=4")
    
    recipe
      .then(response => response.json())
      .then(data => {
        data = data.results
        return data
      })
      .then(data => {
        RecipeStore.update((currentData) => {
          currentData = data
          return currentData
        })
      })
  }
</script>

<section>
  <form on:submit|preventDefault={findRecipes}>
    <input bind:value={ingredient} id="ingredient" type="text" name="ingredient">
    <button type="submit"> Find recipe</button>
  </form>
</section>