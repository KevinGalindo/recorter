// Elementos del html

// inputs .value
const separador = document.querySelector('#separador');
const textArea = document.querySelector('#textArea');
const buscador = document.querySelector('#buscador');

// Botones
const btnSeparar = document.querySelector('#btnSeparar');
const btnBuscar = document.querySelector('#btnBuscar');

// Contenedores de resultados
const contenedorArray = document.querySelector('#resulArray');
const contenedorImg = document.querySelector('#contenImg');

separador.value = '"';


// Seprar string
const separarStrign = () => {

    console.log(separador.value.length);

    if (separador.value.length === 0) {
     console.log('No hay valor');
     return;
    }

    // Convierte el string a un array
    let array = textArea.value.split(`${separador.value}`);

    arrayHTML(array);

    return array;

}

const arrayHTML = (array) => {
    console.log(array);
    const frament = document.createDocumentFragment();
    contenedorArray.innerHTML = '';
    
    frament.textContent = '[' + `${array}` + ']';
    
    contenedorArray.appendChild(frament);

}

const borrarArrayHTML = () => {
    contenedorArray.innerHTML = `<div class="alert text-muted text-center"><h4 class="alert-heading animate__animated animate__fadeIn">Se borro el separador</h4></div>`;
}

separador.addEventListener( 'keyup', () =>  {

    if (separador.value.length === 0) {
        borrarArrayHTML();
        return;
    }

});

btnSeparar.addEventListener( 'click', () => separarStrign() );

// ***********************************************************************************************
// ************************************ Buscador *******************************************
// ***********************************************************************************************

const buscarImg = () => {

    if(buscador.value.length === 0){
        return;
    }

    const frament2 = document.createDocumentFragment();
    contenedorImg.innerHTML = '';

    let arrayIMG = [];

    separarStrign().filter((arreglo) => {

        let solo = arreglo.indexOf(buscador.value);

        if (solo >= 0) {
            arrayIMG.push(arreglo);
        }

        return arrayIMG;
    });

    let elemento;
    
    arrayIMG.filter((data) => {

        elemento = imgHTML(data);

        frament2.appendChild(elemento);

    });
    
    contenedorImg.appendChild(frament2);
    

}

const borrarArrayImg = () => {
    contenedorImg.innerHTML = ` <div class="alert alert-warning text-center"><h4 class="alert-heading animate__animated animate__fadeIn">Se borro la busqueda</h4></div>`;
}

const imgHTML = (url) => {

    const conImg = document.createElement("DIV");
    const img = document.createElement('IMG');

    conImg.classList.add("img");
    conImg.classList.add("animate__animated");
    conImg.classList.add("animate__fadeIn");

    img.setAttribute("src", url);
    img.setAttribute("alt", 'manga');

    conImg.appendChild(img);

    return conImg;

}

buscador.addEventListener( 'keyup', () =>  {

    if (buscador.value.length === 0) {
        borrarArrayImg();
        return;
    }


});

btnBuscar.addEventListener( 'click' , () => buscarImg() );

// let nombre = ['Kevin', 'Galindo', 'Humberto'];

// arrayHTML(nombre);