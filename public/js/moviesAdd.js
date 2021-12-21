let $h1 = document.querySelector('h1');
let $section = document.querySelector('section');
let $article = document.querySelector('article');

$h1.innerText += 'AGREGAR PELICULAS';
$h1.classList.toggle('titulo');
$article.classList.toggle('fondoTransparente'); 
$section.classList.toggle('fondoCRUD'); 