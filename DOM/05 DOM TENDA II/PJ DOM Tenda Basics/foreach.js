document.addEventListener('DOMContentLoaded', () => {
    printCardsProducts();
});

function printCardsProducts() {
    products.forEach(item => {
        const card = document.getElementById('card'+ item.id);
        card.getElementsByClassName('p').textContent = item.price
    });
}
printCardsProducts(8)
