const cantidaduno1 = document.getElementById("cantidad_uno1");
const cantidaddos1 = document.getElementById("cantidad_dos1");
const selectoruno1 = document.getElementById("selector_uno1");
const selectordos1 = document.getElementById("selector_dos1");
const invertirBoton1 = document.getElementById("botonInvertir1");

const cantidaduno2=document.getElementById("cantidad_uno2");
const cantidaddos2= document.getElementById("cantidad_dos2");
const selectoruno2=document.getElementById("selector_uno2");
const selectordos2= document.getElementById("selector_dos2");
const invertirBoton2= document.getElementById("botonInvertir2");

const cantidaduno3=document.getElementById("cantidad_uno3");
const cantidaddos3= document.getElementById("cantidad_dos3");
const selectoruno3=document.getElementById("selector_uno3");
const selectordos3= document.getElementById("selector_dos3");
const invertirBoton3= document.getElementById("botonInvertir3");





invertirBoton1.addEventListener('click', function () {
  const tempUno = cantidaduno1.value;
  const tempDos = cantidaddos1.value;
  cantidaduno1.value = tempDos;
  cantidaddos1.value = tempUno;

  const unidadUno = selectoruno1.value;
  const unidadDos = selectordos1.value;
  selectoruno1.value = unidadDos;
  selectordos1.value = unidadUno;

  convertirTemperatura();
});

invertirBoton2.addEventListener('click', function () {
    const tempUno= cantidaduno2.value;
    const tempDos= cantidaddos2.value;
    cantidaduno2.value= tempDos;
    cantidaddos2.value=tempUno;
    
    const unidadUno= selectoruno2.value;
    const unidadDos=selectordos2.value;
    selectoruno2.value=unidadDos;
    selectordos2.value=unidadUno;
    });

invertirBoton3.addEventListener('click', function () {
    const tempUno= cantidaduno3.value;
    const tempDos= cantidaddos3.value;
    cantidaduno3.value= tempDos;
    cantidaddos3.value=tempUno;
    
    const unidadUno= selectoruno3.value;
    const unidadDos=selectordos3.value;
    selectoruno3.value=unidadDos;
    selectordos3.value=unidadUno;
    });



selectoruno1.addEventListener('change', convertirTemperatura);
selectordos1.addEventListener('change', convertirTemperatura);
cantidaduno1.addEventListener('input', convertirTemperatura);
cantidaddos1.addEventListener('input', convertirTemperatura);

function convertirTemperatura() {
  const tempUno = parseFloat(cantidaduno1.value);
  const tempDos = parseFloat(cantidaddos1.value);
  const unidadUno = parseInt(selectoruno1.value);
  const unidadDos = parseInt(selectordos1.value);

  let resultado;


  if (unidadUno === 1 && unidadDos === 1) {
    resultado = (tempUno - 32) * 5 / 9;
  } else if (unidadUno === 2 && unidadDos === 1) {
    resultado = tempUno - 273.15;
  } else {

    resultado = tempUno;
  }


  cantidaddos1.value = resultado.toFixed(2);
}


selectoruno2.addEventListener('change',convertirLongitud);
selectordos2.addEventListener('change', convertirLongitud);
cantidaduno2.addEventListener('input', convertirLongitud);
cantidaddos2.addEventListener('input', convertirLongitud);

function convertirLongitud() {
  const cantidadUno = parseFloat(cantidaduno2.value);
  const cantidadDos = parseFloat(cantidaddos2.value);
  const unidadUno = parseInt(selectoruno2.value);
  const unidadDos = parseInt(selectordos2.value);

  let resultado;


  if (unidadUno === 1 && unidadDos === 1) {
    // Convertir pulgadas a centímetros
    resultado = cantidadUno * 2.54;
  } else if (unidadUno === 2 && unidadDos === 1) {
    // Convertir pies a centímetros
    resultado = cantidadUno * 30.48;
  } else if (unidadUno === 3 && unidadDos === 1) {
    // Convertir yardas a centímetros
    resultado = cantidadUno * 91.44;
  } else if (unidadUno === 4 && unidadDos === 1) {
    // Convertir millas a centímetros
    resultado = cantidadUno * 160934.4;
  } else {

    resultado = cantidadUno;
  }


  cantidaddos2.value = resultado;
}



selectoruno3.addEventListener('change',convertirMoneda);
selectordos3.addEventListener('change', convertirMoneda);
cantidaduno3.addEventListener('input', convertirMoneda);
cantidaddos3.addEventListener('input',convertirMoneda);

function convertirMoneda() {
  const cantidadUno = parseFloat(cantidaduno3.value);
  const cantidadDos = parseFloat(cantidaddos3.value);
  const unidadUno = parseInt(selectoruno3.value);
  const unidadDos = parseInt(selectordos3.value);

  let resultado;

  // Realizar los cálculos de conversión según las unidades seleccionadas
  if (unidadUno === 1 && unidadDos === 1) {
    // Convertir Dólares a Pesos Mexicanos
    resultado = cantidadUno * 19.79;
  } else if (unidadUno === 2 && unidadDos === 1) {
    // Convertir Euros a Pesos Mexicanos
    resultado = cantidadUno * 22.84;
  } else if (unidadUno === 3 && unidadDos === 1) {
    // Convertir Pesos Chilenos a Pesos Mexicanos
    resultado = cantidadUno * 0.022;
  } else {
    // Unidades iguales, no es necesario hacer la conversión
    resultado = cantidadUno;
  }

  // Mostrar el resultado en el campo correspondiente
  cantidaddos3.value = resultado;
}



