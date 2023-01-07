let increase = document.querySelector(`#increase`)
let decrease = document.querySelector(`#decrease`)
let numerator = document.querySelector(`#numerator`)
let number = 0

increase.addEventListener(`click`, up)
decrease.addEventListener(`click`, down)
   
function up(){
    number++
    numerator.textContent = number
}

function down(){
    number--
    (number < 0) ? number = 0 : ``
    numerator.textContent = number
}