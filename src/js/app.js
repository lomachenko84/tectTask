import goblin from "../img/goblin.png"
let field = document.createElement("div")
field.className = "field"
document.body.append(field)
let newCouter = 0;
let secondCounter = 0;
let myFields = []
let index = Math.floor(Math.random() * 15)

for (let i = 0; i < 16; i++) {
  let myField = document.createElement("div")
  myField.className = "myField"
  field.append(myField)
  myFields.push(myField)
}

let img = document.createElement("img")
img.src = goblin
img.className = "img"
myFields[index].append(img)
img.onclick = function () {
  img.remove()
  ++newCouter;
  secondCounter = 0;
  score.textContent = `record : ${newCouter}`;
}

let score = document.createElement("div")
score.className = "score"
document.body.append(score)
score.textContent = `record : ${newCouter}`;


let endGame = setInterval(() => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * 15)
  } while (newIndex === index);
  index = newIndex
  myFields[newIndex].append(img)
  ++secondCounter;
  if (secondCounter > 5) {
    alert("Игра завершена")
    img.remove()
    clearInterval(endGame)
  }
}, 1000)


