<script>
  import * as d3 from 'd3';
  import {TasteStore} from '../stores/tasteStore'
  import Recipe from "./Recipe.svelte"
</script>

{#each $TasteStore as data}
  <svg>

  </svg>
{/each}