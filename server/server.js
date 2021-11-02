import dotenv from 'dotenv'
import fetch from 'node-fetch'
import express from 'express'

dotenv.config()

const app = express()
const port = 5555
const APIKey = process.env.API_KEY
const url = `https://api.spoonacular.com/food/ingredients/substitutes?apiKey=${APIKey}&ingredientName=`

app
  .get('/', getData)

app.listen(port, () => {
  console.log(`Server started at port ${port}`)
})



async function  getData(req, res) {
  const ingredient = req.body.ingredient
  const response = await fetch(url + ingredient)
  const data = await response.json()
  res.json(data.substitutes)
}