
function addToCart(id) {
   alert("add to cart")
}


function removeFromCart(id) {
    alert("remove to cart")
}


/// ADD & REMOVE PRODUCT 1 
let cardId1 = document.getElementById("card1");
console.log(cardId1);


document.getElementById("card1").addEventListener("click", addCard1);

function addCard1(evento) {
if (evento.target.classList == 'fas fa-cart-plus cardAdd') {
    console.log("agregar producto 1 al carrito");
}
if (evento.target.classList == 'fas fa-trash-alt cardAdd') {
    console.log("quitar producto 1 del carrito");
}
}
/// ADD & REMOVE PRODUCT 2

let cardId2 = document.querySelector("#card2");
console.log(cardId2);

document.querySelector("#card2").addEventListener("click", addCard2);

function addCard2(evento) {
    if (evento.target.classList == 'fas fa-cart-plus') {
        console.log("agregar producto 2 al carrito");
    }
    if (evento.target.classList == 'fas fa-trash-alt') {
        console.log("quitar producto 2 del carrito");
    }
}

/// ADD & REMOVE PRODUCT 3:

let cardId3 = document.querySelector("#card3");

document.querySelector("#card3").addEventListener("click", addCard3);

function addCard3(event) {
    if (event.target.classList == 'fas fa-cart-plus') {
        console.log("agregar producto 3 al carrito");
    }
    if (event.target.classList == 'fas fa-trash-alt') {
        console.log("quitar producto 3 del carrito");
    }
}

/// ADD & REMOVE PRODUCT 4:

let cardId4 = document.querySelector("#card4");
document.querySelector("#card4").addEventListener("click", addCard4);
function addCard4(evento) {
    if (evento.target.classList == 'fas fa-cart-plus') {
        console.log("agregar producto 4 al carrito");
    }
    if (evento.target.classList == 'fas fa-trash-alt') {
        console.log("quitar producto 4 del carrito");
    }
}
/// ADD & REMOVE PRODUCT 5:

let cardId5 = document.querySelector("#card5");
document.querySelector("#card5").addEventListener("click", addCard5);
function addCard5(evento) {
    if (evento.target.classList == 'fas fa-cart-plus') {
        console.log("agregar producto 5 al carrito");
    }
    if (evento.target.classList == ' fas fa-trash-alt') {
        console.log("quitar producto 5 del carrito");
    }
}

/// ADD & REMOVE PRODUCT 6:

let cardId6 = document.querySelector("#card6");
document.querySelector("#card6").addEventListener("click", addCard6);
function addCard6(evento) {
    if (evento.target.classList == 'fas fa-cart-plus') {
        console.log("agregar producto 6 al carrito");
    }
    if (evento.target.classList == 'fas fa-trash-alt') {
        console.log("quitar producto 6 del carrito");
    }
}
/// ADD & REMOVE PRODUCT 7:

let cardId7 = document.querySelector("#card7");
document.querySelector("#card7").addEventListener("click", addCard7);
function addCard7(evento) {
    if (evento.target.classList == 'fas fa-cart-plus') {
        console.log("agregar producto 7 al carrito");
    }
    if (evento.target.classList == ' fas fa-trash-alt') {
        console.log("quitar producto 7 del carrito");
    }
}
/// ADD & REMOVE PRODUCT 8:

let cardId8 = document.querySelector("#card8");
document.querySelector("#card8").addEventListener("click", addCard8);
function addCard8(evento) {
    if (evento.target.classList == 'fas fa-cart-plus') {
        console.log("agregar producto 8 al carrito");
    }
    if (evento.target.classList == 'fas fa-trash-alt') {
        console.log("quitar producto 8 del carrito");
    }
}
