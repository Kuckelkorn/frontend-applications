# Functional Programming

Functional programming repo for Information Design tech track
author: [Remco Kuckelkorn](https://github.com/Kuckelkorn)

## Summary

For the course [Information Design](https://github.com/cmda-tt/course-21-22) the goal was to write functional javascript. To clean a `.json` file and receive information from an external API. During the first week we received a dataset with answers from a questionnaire to clean. In the second week I used a the API from [spoonacular](https://spoonacular.com/food-api).

## Tech used

### Used languages

Only vanillaJS was used to receive and clean the datasets. A HTML file was used to load in the javascript

## Installation

To use this application you can clone this repository to get the application working you'll have to make a seperate folder in scripts called helpers.

In this folder there need to be 2 files, each file for a different route from the spoonacular API. The names of the 2 files is `recipeAPI.js` and `substituteAPI.js`

```javascript
const recipeAPI = {
  endpoint: "https://api.spoonacular.com/recipes/complexSearch?apiKey=",
  apiKey: <YOUR API KEY>
}

export default recipeAPI
```

the code above let's you write down your credentials and the endpoint you want to use. The specific endpoint here is to look up recipes with a word in it. The endpoint here isn't fully complete the rest is already written down in `findRecipe.js`

the first part of the endpoint for finding similar recipes is:
`endpoint: "https://api.spoonacular.com/recipes/"`

## License

License MIT