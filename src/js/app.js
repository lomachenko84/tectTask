let input = document.querySelector('.input')
input.oninput = function() {
    console.log(input.value)
    let number = input.value.slice(0,2)
    if(number[0] === "4"){
       document.getElementById("1").classList.add("activ")
    }
  };