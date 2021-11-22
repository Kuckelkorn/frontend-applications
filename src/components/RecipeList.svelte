<script>
  import {RecipeStore} from '../stores'
  import Recipe from "./Recipe.svelte"
</script>

{#each $RecipeStore as dish (dish.id)}
  <Recipe item={dish}/>
{/each}