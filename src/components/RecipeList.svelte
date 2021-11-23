<script>
  import {RecipeStore} from '../stores/recipeStore'
  import Recipe from "./Recipe.svelte"

  let show
  function checkStore(store){
    if (store.length === 0) {
      show = 'hidden'
      return show
    } else {
      show = 'show'
      return show
    }
  }
  $: checkStore($RecipeStore)
</script>

<section class={show}>
  <h2>Recipes</h2>
  <ul>
    {#each $RecipeStore as dish (dish.id)}
      <li>
        <Recipe item={dish}/>
      </li>
    {/each}
  </ul>
</section>