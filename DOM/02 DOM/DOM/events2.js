const escribe = document.querySelector('.busqueda');
console.log(escribe);
document.querySelector(".busqueda").addEventListener("input", escribeAlgo);

function escribeAlgo() {
    if (escribe == 'a') {
        alert('has escrito a')
    }
}
