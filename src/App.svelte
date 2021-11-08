<script>
  import findRecipes from "./scripts/findRecipe"
</script>

<main>
  <input id="ingredient" type="text">
  <button on:click={findRecipes}> Find recipe</button>
</main>