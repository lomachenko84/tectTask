let input = document.querySelector('.input')
function removeActiv() {
   let imgs = document.querySelectorAll(".img")
   for (let i = 0; i < imgs.length; i++) {
      imgs[i].classList.remove("activ")
   }
}

input.oninput = function () {
   removeActiv();
   let number = input.value.slice(0, 3)
   console.log(number)
   if (number[0] === "4") {
      document.getElementById("1").classList.add("activ")

   }
   if (number[0] === "5") {
      document.getElementById("2").classList.add("activ")

   }
   if (number === "371") {
      document.getElementById("3").classList.add("activ")
   }
   if (number[0] === "6") {
      document.getElementById("4").classList.add("activ")
   }
   if (number === "353") {
      document.getElementById("5").classList.add("activ")
   }
   if (number === "305") {
      document.getElementById("6").classList.add("activ")
   }
   if (number[0] === "2") {
      document.getElementById("7").classList.add("activ")
   }
}
function isValid(cardNumber) {
   var arr = [],
      card_number = cardNumber.toString();
   for (var i = 0; i < card_number.length; i++) {
      if (i % 2 === 0) {
         var m = parseInt(card_number[i]) * 2;
         if (m > 9) {
            arr.push(m - 9);
         } else {
            arr.push(m);
         }
      } else {
         var n = parseInt(card_number[i]);
         arr.push(n)
      }
   }
   var summ = arr.reduce(function (a, b) { return a + b; });
   return Boolean(!(summ % 10));

}

let button = document.querySelector(".button")
button.onclick = function () {
   let e = isValid(input.value)
   if (e) {
      alert("Ваша карта валидна")
   } else {
      alert("Ваша карта не валидна")
   }
}
