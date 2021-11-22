<script>
  import Dish from "./Dish.svelte"
  export let item
</script>

<Dish>
  <h2>{item.title}</h2>
  <img src={item.image} alt={item.title}>
</Dish>