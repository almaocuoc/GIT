
const modifyCards = document.getElementById("card1");
console.log(modifyCards);

document.getElementById("card1").addEventListener("DOMContentLoaded", modifyCard1);

function modifyCard1() {
    modifyCards.querySelector('.h3').textContent = "aceite EVOO"
    modifyCards.querySelector('.h5').textContent = '5€'
    modifyCards.querySelector('.h6').textContent = 'supermercado'
}