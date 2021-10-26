const oogkleurArr = []

function changeKey(oldKey, newKey, obj) {
    delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey];
}
const rawData = fetch("./data.json")
    .then(response => response.json())
    .then(json => json.map((item, index, array) => {
        changeKey("Wat is je oogkleur?", "oogkleur", item)
        oogkleurArr.push(item.oogkleur.toLowerCase())
        console.log(item, index)
    }))

console.log(oogkleurArr)
