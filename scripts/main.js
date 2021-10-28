const duplicates = {}

const rawJSON = fetch("./data.json")

rawJSON
    .then(response => response.json())
    .then(json => {
        const objects = []
        const clothesArr = []
        const eyeColors = []
        json.map((obj) => {
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
            console.log(toString(obj));
            console.log(valsToLowercase(obj));
            // console.log(data)
            objects.push(obj);
            // obj.clothesColor = obj.clothesColor.split(", ")
            // obj.eyecolor = obj.eyecolor.toLowerCase()
            // clothesArr.push(obj.clothesColor);
            // eyeColors.push(obj.eyecolor);
        })
        return objects
    })
    .then(objects => console.log(objects))

// FUNCTIONS FOR CLEANING UP JSON DATA
// Counting Duplicates, doesn't work yet
function countDups(arr) {
    arr.forEach(x => {
        duplicates[x] = (duplicates[x] || 0) + 1;
    });
    return duplicates;
}

// Changing the key name
function changeKey(oldKey, newKey, obj) {
    delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey];
}

function toString(obj) {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object') {
            return toString(obj[key]);
        }
        obj[key] = "" + obj[key]
    });
    return obj;

}

function valsToLowercase(object) {
    Object.keys(object).reduce((n, k) => { (n[k] = object[k].toLowerCase(), n), {} }
    )
    return object
}



