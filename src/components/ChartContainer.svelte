<script>
  import Chart from "./Chart.svelte";
  import { TasteStore } from "../stores/tasteStore";

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
  $: checkStore($TasteStore)
  
</script>

<section class={show}>
  <Chart />
</section>
