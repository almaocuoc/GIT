const firstCard = function firstCard(){
    card.querySelector('p').textContent = '99€'
}

document.addEventListener('DOMContentLoaded', () => {
    firstCard();
});

const card = document.getElementById('card1')

