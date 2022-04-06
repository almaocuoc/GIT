//crear un elemento desde javascript

const lista = document.getElementById('lista');
/* console.log('lista'); */

/* const li = document.createElement('li')
li.textContent = "primer elemento"

lista.appendChild(li)
console.log('li'); */


//crear un array dentro de un elemento desde javascript:
const arrayElement = ['primer elemento', 'segundo', 'tercero']

/* arrayElement.forEach(item => {
    console.log(item);
    const li = document.createElement('li')
    li.textContent = item
    lista.appendChild(li)  
}); */
//crear un array dentro de un elemento desde javascript:

arrayElement.forEach(item => {
    lista.innerHTML += `<li>${item}`
});

