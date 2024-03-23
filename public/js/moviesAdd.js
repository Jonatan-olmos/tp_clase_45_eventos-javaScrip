window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

titulo.addEventListener('mouseover', function(){
    titulo.style.color = "red"
})
titulo.addEventListener('mouseout', function(){
    titulo.style.color = "black"
})
let estadoSecreto = 0
document.getElementById('titulo').addEventListener('keydown', (e) => {
   const teclaPresionada = e.key.toLocaleLowerCase();

   estadoSecreto = estadoSecreto === 0 && teclaPresionada === 's' ? 1 : estadoSecreto === 1 && teclaPresionada === 'e' ? 2 : estadoSecreto === 2 && teclaPresionada === 'c' ? 3 : estadoSecreto === 3 && teclaPresionada === 'r' ? 4 : estadoSecreto === 4 && teclaPresionada === 'e' ? 5 : estadoSecreto === 5  && teclaPresionada === 't' ? 6 : estadoSecreto === 6 && teclaPresionada === 'o' ? (alert ('Secreto Magico'), 0) : 0 ; 
})
}