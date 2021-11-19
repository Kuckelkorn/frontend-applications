# Frontend Data

Frontend-data repo for Information Design tech track
author: [Remco Kuckelkorn](https://github.com/Kuckelkorn)

## Summary

My wiki for frontend-data is a course taught at the HvA. The course is part of Information Design. The goal of this course is to get familiar with SVGs and in turn make data visualisations using the d3 library. The concept of my application is to make visualisations based on the spoonacular API. The spoonacular API has many endpoints that convey all kinds of information. My goal for these two weeks was to make a visualisation that displayed how a dish tastes.

## Tech used

This application uses vanillaJS and the D3 library. I also initialised the svelte framework for the next course frontend-applications

## Installation

To use this application you can clone this repository to get the application working you'll have to make a seperate folder in scripts called helpers.

In this folder there need to be 2 files, each file for a different route from the spoonacular API. The names of the 2 files is `recipeAPI.js` and `tasteAPI.js`

```javascript
const recipeAPI = {
  endpoint: "https://api.spoonacular.com/recipes/complexSearch?apiKey=",
  apiKey: <YOUR API KEY>
}

export default recipeAPI
```

the code above let's you write down your credentials and the endpoint you want to use. The specific endpoint here is to look up recipes with a word in it. The endpoint here isn't fully complete the rest is already written down in `findRecipe.js`

The piece of code for finding similar recipes is:

```javascript
const tasteAPI = {
  endpoint: "https://api.spoonacular.com/recipes/",
  apiKey: <YOUR API KEY>
}

export default tasteAPI
```

Finally to run this application first install the necesarry modules with

```zsh
npm install
```

To run the application run in your terminal this command

```zsh
npm run dev
```

perform these last two code snippets in your terminal

## License

License MIT
