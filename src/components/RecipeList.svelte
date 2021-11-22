<script>
  import {RecipeStore} from '../stores/recipeStore'
  import Recipe from "./Recipe.svelte"
</script>

<section>
  <ul>
    {#each $RecipeStore as dish (dish.id)}
      <li>
        <Recipe item={dish}/>
      </li>
    {/each}
  </ul>
</section>