<script>
  import * as d3 from 'd3';
  import {TasteStore} from '../stores/tasteStore'

  const margin = {top: 40, bottom: 10, left:120, right: 20}
  const width = 800 - margin.left - margin.right
  const height = 600 - margin.top - margin.bottom

  $: xScale = d3.scaleLinear().range([0, width]).domain([0, d3.max($TasteStore, (d) => d.value)])
  $: yScale = d3.scaleBand().range([0, height]).domain($TasteStore.map((d) => d.taste)).padding(0.1)

</script>

<svg {width} {height}>
  {#each $TasteStore as data}
    <g>
      <rect
        x={0}
        y={yScale(data.taste)}
        width={xScale(data.value)}
        height={yScale.bandwidth()}
      />
    </g>
  {/each}
</svg>
