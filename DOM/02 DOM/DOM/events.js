// al cargar la página aperece una alerta:
/* window.addEventListener('DOMContentLoaded', (event) => {
    alert('hello world!');
    }); */

const changeNav = document.querySelector(".navegacion");

document.querySelector(".navegacion").addEventListener("mouseenter", mouseEnter);

function mouseEnter() {
    console.log('entra mouse');
    changeNav.style.backgroundColor = 'white'; 
}


const changeNav2 = document.querySelector(".navegacion");

document.querySelector(".navegacion").addEventListener("mouseout", mouseOut);

function mouseOut() {
    console.log('sale mouse');
    changeNav2.style.backgroundColor = 'red';
}
