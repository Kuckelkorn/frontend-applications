<script>
  import * as d3 from 'd3';
  import {TasteStore} from '../stores/tasteStore'


  const margin = {top: 40, bottom: 40, left:120, right: 20}
  const width = 900 - margin.left - margin.right
  const height = 700 - margin.top - margin.bottom

  $: xScale = d3.scaleLinear().range([0, width]).domain([0, d3.max($TasteStore, (d) => d.value)])
  $: yScale = d3.scaleBand().range([0, height]).domain($TasteStore.map((d) => d.taste)).padding(0.1)

  $: xAxis = d3.axisTop().scale(xScale)
  $: yAxis = d3.axisLeft().scale(yScale)

  $: axisX = d3.select('svg')
      .append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .transition()
      .call(xAxis)
  
  $: axisY = d3.select('svg')
      .append('g')
      .attr('class', 'y-axis')
      .attr('transform', `translate(${margin.left}, ${margin.top})`)
      .transition()
      .call(yAxis)

</script>

<svg {width} {height}>
  {axisX}
  {axisY}
  {#each $TasteStore as data}
    <g transform=translate({margin.left},{margin.top})>
      <rect
        x={0}
        y={yScale(data.taste)}
        width={xScale(data.value)}
        height={yScale.bandwidth()}
      />
    </g>
  {/each}
</svg>
