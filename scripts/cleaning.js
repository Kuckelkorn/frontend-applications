const rawJSON = fetch("./assets/data.json")

rawJSON
  .then(response => response.json())
  .then(items => {
    items.map((obj) => {
      changeKey("Wat is je oogkleur?", "eyecolor", obj)
      changeKey("Wat is je favoriete soort huisdier?", "favAnimal", obj)
      changeKey("Wat is je favoriete windrichting?", "favDirection", obj)
      changeKey("Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?", "excitement", obj)
      changeKey("Kies zelf of je deze vraag beantwoord.", "ownChoice", obj)
      changeKey("Wat is je favoriete datum?", "favDate", obj)
      changeKey("Wat is je favoriete datum, maar nu in tekst!", "writtenDate", obj)
      changeKey("Wat is je favoriete zuivelproduct?", "favDairy", obj)
      changeKey("Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)", "clothesColor", obj)
      changeKey("Op welke verdieping van het TTH studeer je het liefst?", "favFloor", obj)
      changeKey("Wat wil je worden als je groot bent?", "profession", obj)
      changeKey("Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.", "childProfession", obj)
      changeKey("Kaas is ook een zoogdier?", "cheese", obj)
      changeKey("Als je later een auto zou kopen, van welk merk zou deze dan zijn?", "car", obj)
      toString(obj)
      LowercaseAnswers(obj)
      checkEmpty(obj)
      obj.favDate = changeDate(obj.favDate)
      obj.clothesColor = obj.clothesColor.split(", ")
      return items;
    })
    const data = delObject(items)
    return data
  })
  .then((data) => {
    console.table(data)
    console.log(data)
  })

// FUNCTIONS FOR CLEANING UP JSON DATA
// function countDups(arr) {
//   const duplicates = {}
//   arr.forEach(x => {
//     duplicates[x] = (duplicates[x] || 0) + 1
//   })
//   return duplicates
// }

// Changing the key name
function changeKey(oldKey, newKey, obj) {
  delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey]
}

// Changing all answers to strings
function toString(obj) {
  Object.keys(obj).forEach(key => {
    obj[key] = "" + obj[key]
  })
  return obj
}

// changing all answers to a lowercase answer
function LowercaseAnswers(obj) {
  Object.keys(obj).forEach(key => {
    obj[key] = obj[key].toLowerCase()
  })
  return obj
}

function checkEmpty(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] < 1) {
      delete obj[key]
    }
    return obj
  })
}

function changeDate(string) {
  const arr = string.split("/")
  string = new Date(arr[2] + "-" + arr[1] + "-" + arr[0])
  return string
}

// Delete object when a key is not there
// check for each object if they have enough values
// if they dont remove it
function delObject(arr){
  arr  = arr.filter( 
    obj => Object.values(obj).length > 13
  )
  return arr
}


