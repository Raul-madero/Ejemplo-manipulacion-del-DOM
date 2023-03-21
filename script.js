//const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafo');
//const pid = document.querySelector('#pid');
//const input = document.querySelector('input');

//console.log(input.value);
//console.log({
  //  h1,
    //p,
    //parrafito,
    //pid,
    //input,
//});
//h1.innerHTML = 'Patito <br> Feo';
//h1.innerText = 'Patito <br> Feo';
//h1.setAttribute('class', 'rojo');
//console.log(h1.getAttribute('class'));
//
//input.value = '456';

//const img = document.createElement('img')');
//console.log(img)

//pid.append(img)

//Clase2

const h1 = document.querySelector('h1');
const form = document.querySelector('#formulario');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#resultado')
form.addEventListener('submit', btnOnClick)

function btnOnClick(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value
    pResult.innerText = "Resultado " + sumaInputs

}