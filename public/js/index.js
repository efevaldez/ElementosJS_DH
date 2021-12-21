let $main = document.querySelector('main');
let $h2 = document.querySelector('h2');
let $a = document.querySelector('a');
let $p = document.querySelector('p');

let nombre = prompt('Ingrese su nombre');
$h2.innerText += (nombre.trim() === '')? ' Invitado' : ' ' + nombre;

$h2.style.textTransform = 'uppercase';
$a.style.color = '#E51B3E';

confirm('¿Desea colocar un fondo de pantalla?')? document.querySelector('body').classList.toggle('fondo') : '';

for(let i = 0; i < $p.length; i++){
    $p[i].classList.toggle((i % 2 == 0)? 'destacadoPar' : 'destacadoImpar');
}

$main.style.display = 'block';