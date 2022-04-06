document.addEventListener('DOMContentLoaded', () => {
    printCardsProducts();
});

function printCardsProducts() {
    products.forEach(item => {
        const card = document.getElementById('card'+ item.id);
        card.querySelector('h3').textContent = item.name;
        card.querySelector('h5').textContent = item.price;
        card.querySelector('h6').textContent = item.type;
    })
}