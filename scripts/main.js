const eyecolorArr = []

function changeKey(oldKey, newKey, obj) {
    delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey];
}

const rawJSON = fetch("./data.json")

rawJSON
    .then(response => response.json())
    .then(json => json.map((item, index, array) => {
        changeKey("Wat is je oogkleur?", "eyecolor", item)
        changeKey("Wat is je favoriete soort huisdier?", "favAnimal", item)
        changeKey("Wat is je favoriete windrichting?", "favDirection", item)
        changeKey("Op een schaal van 1 tot 10, hoeveel zin heb je in de Tech Track?", "mood", item)
        changeKey("Kies zelf of je deze vraag beantwoord.", "ownChoice", item)
        changeKey("Wat is je favoriete datum?", "favDate", item)
        changeKey("Wat is je favoriete datum, maar nu in tekst!", "writtenDate", item)
        changeKey("Wat is je favoriete zuivelproduct?", "favDairy", item)
        changeKey("Welke kleur kledingstukken heb je aan vandaag? (Meerdere antwoorden mogelijk natuurlijk...)", "clothesColor", item)
        changeKey("Op welke verdieping van het TTH studeer je het liefst?", "favFloor", item)
        changeKey("Wat wil je worden als je groot bent?", "profession", item)
        changeKey("Wat wilde je later worden als je groot bent, maar nu toen je zelf 8 jaar was.", "childProfession", item)
        changeKey("Kaas is ook een zoogdier?", "cheese", item)
        changeKey("Als je later een auto zou kopen, van welk merk zou deze dan zijn?", "car", item)
        eyecolorArr.push(item.eyecolor.toLowerCase())
        eyecolorArr.sort()
        console.log(item);
    }))

// console.log(eyecolorArr)
