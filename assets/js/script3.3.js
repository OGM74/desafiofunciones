elemento = document.querySelector('.key');
elemento.style.backgroundColor = 'whitesmoke';

function pintarosado() {
    elemento.style.backgroundColor = 'pink';
}
elemento1 = document.querySelector('.key');
function pintarnaranjo() {
    elemento1.style.backgroundColor = 'orange';
}
elemento2 = document.querySelector('.key');
function pintarceleste() {
    elemento2.style.backgroundColor = 'skyblue';
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        pintarosado();

    } if (event.key === 's') {
        pintarnaranjo();
    } if (event.key === 'd')
        pintarceleste();

})
function agregarElemento() {
    caja = document.querySelector(".caja");
    nuevoElemento = document.createElement("div");
    nuevoElemento.textContent = "Elemento agregado";
    caja.appendChild(nuevoElemento);

}
document.addEventListener('keydown', function (event) {
    if (event.key === 'q' || event.key === 'w' || event.key === 'e') {
        agregarElemento();
    }
})
caja = document.querySelector('.caja');
caja.style.backgroundColor = 'whitesmoke';

function pintarmorado() {
    caja.style.backgroundColor = 'purple';
}
caja1 = document.querySelector('.caja');
function pintargris() {
    caja1.style.backgroundColor = 'gray';
}
caja2 = document.querySelector('.caja');
function pintarcafe() {
    caja2.style.backgroundColor = 'brown';
}
document.addEventListener('keydown', function (event) {
    if (event.key === 'q') {
        pintarmorado();

    } if (event.key === 'w') {
        pintargris();
    } if (event.key === 'e')
        pintarcafe();
});