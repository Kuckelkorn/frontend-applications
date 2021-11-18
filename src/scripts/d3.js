import * as d3 from 'd3'

///////////////
// // BAR CHART
///////////////


// declare width height and margin of the svg
const margin = {top: 40, bottom: 10, left: 120, right: 20}
const width = 800 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom

// Create the svg in the body
const svg = d3.select('body').append('svg')
.attr('width', width+margin.left+margin.right)
.attr('height', height+margin.top+margin.bottom)


// Create groups in the svg and make sure that the margins are the same this is necessary otherwise the legend is not there
const g = svg.append('g')
.attr('transform', `translate(${margin.left},${margin.top})`)

// Define the x and y axes and their size
const xScale = d3.scaleLinear().range([0, width])
const yScale = d3.scaleBand().range([0, height]).padding(0.1)

const yAxis = d3.axisLeft().scale(yScale)
const g_yAxis = g.append('g').attr('class','y axis')

function update(data){
  // Defining how to display the data in the dom
  xScale.domain([0, d3.max(data, (d) => d.value)])
  yScale.domain(data.map((d) => d.taste))

  g_yAxis.transition().call(yAxis)

  // making the individual bars
  const rect = g.selectAll('rect').data(data).join(
    (enter) => { enter = enter.append('rect').attr('x', 0)
    enter.append('title')
    return enter
    },
    (update) => update,
    (exit) => exit.remove()
  )
  
  // Defining the individual bars what data to display
  rect
    .transition()
    .attr('height', yScale.bandwidth())
    .attr('width', (data) => xScale(data.value))
    .attr('y', (data) => yScale(data.taste))
    .select('title').text((data) => `${data.value}`)
}


// /////////////
// // DONUT CHART
// /////////////

// const margin = 10
// const radius =250

// const svg = d3.select('body main').append('svg')
//   .attr('width', radius *2 + margin*2)
//   .attr('height', radius *2 + margin*2)

// const g = svg.append('g')
//   .attr('transform', `translate(${radius+margin},${radius+margin})`)

// function update (data){
//   const pie = d3.pie().value((data) => data.flavour.length).sortValues(null).sort(null)
//   const arc = d3.arc().outerRadius(radius).innerRadius(radius - 200)
//   const cScale = d3.scaleOrdinal(d3.schemeSet2)

//   const pied = pie(data)
//   cScale.domain()
// }

export default update