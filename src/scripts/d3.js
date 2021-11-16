import * as d3 from 'd3'

const margin = {top: 40, bottom: 10, left: 120, right: 20}
const width = 800 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

const svg = d3.select('body').append('svg')
.attr('width', width+margin.left+margin.right)
.attr('height', height+margin.top+margin.bottom)

// Group used to enforce margin
const g = svg.append('g')
.attr('transform', `translate(${margin.left},${margin.top})`)

const xScale = d3.scaleLinear().range([0, width])
const yScale = d3.scaleBand().range([0, height]).padding(0.1)

// const xAxis = d3.axisTop().scale(xScale)
const yAxis = d3.axisLeft().scale(yScale)
// const g_xAxis = g.append('g').attr('class','x axis')
const g_yAxis = g.append('g').attr('class','y axis')

function update(data){
  xScale.domain([0, d3.max(data, (d) => d.value)])
  yScale.domain(data.map((d) => d.taste))

  // g_xAxis.transition().call(xAxis)
  g_yAxis.transition().call(yAxis)

  const rect = g.selectAll('rect').data(data).join(
    (enter) => { enter = enter.append('rect').attr('x', 0)
    enter.append('title')
    return enter
    },
    (update) => update,
    (exit) => exit.remove()
  )

  rect
    .transition()
    .attr('height', yScale.bandwidth())
    .attr('width', (data) => xScale(data.value))
    .attr('y', (data) => yScale(data.taste))
    .select('title').text((data) => `${data.value}`)
}

export default update