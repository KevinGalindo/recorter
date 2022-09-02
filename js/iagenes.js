// Elementos del html

// inputs .value
const separador = document.querySelector('#separador');
const textArea = document.querySelector('#textArea');
const buscador = document.querySelector('#buscador');

// Botones
const btnSeparar = document.querySelector('#btnSeparar');
const btnBuscar = document.querySelector('#btnBuscar');
const btnUltimo = document.querySelector('#btnUltimo');

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

    // console.log("Esta aca abjo");
    // console.log(arrayIMG);
    let elemento;
    
    arrayIMG.filter((data) => {

        elemento = imgHTML(data);

        frament2.appendChild(elemento);

    });
    
    contenedorImg.appendChild(frament2);
    
    return arrayIMG;

}

const borrarArrayImg = () => {
    contenedorImg.innerHTML = ` <div class="alert alert-warning text-center"><h4 class="alert-heading animate__animated animate__fadeIn">Se borro la busqueda</h4></div>`;
}

const imgHTML = (url) => {

    const conImg = document.createElement("DIV");
    const img = document.createElement('IMG');
    const divSpan = document.createElement('DIV');
    const btnSpan = document.createElement('SPAN');
    const urlCop = document.createElement('SPAN');

    // Agregando clases
    conImg.classList.add("img");
    conImg.classList.add("animate__animated");
    conImg.classList.add("animate__fadeIn");

    divSpan.classList.add('cortina');
    urlCop.classList.add('hidden');

    // Agregando Atributos
    img.setAttribute("src", url);
    img.setAttribute("alt", 'manga');

    urlCop.setAttribute("contenteditable", "true");

    // Agregando contenido
    btnSpan.textContent = 'Copy!';
    urlCop.textContent = url;

    divSpan.appendChild(btnSpan);
    
    conImg.appendChild(urlCop);
    conImg.appendChild(divSpan);
    conImg.appendChild(img);

    btnSpan.addEventListener('click', () => {

        urlCop.focus();
        document.execCommand( 'selectAll' );
        document.execCommand('copy');

        btnSpan.classList.add('animate__animated', 'animate__heartBeat');
        btnSpan.textContent = 'Copied';

        setTimeout(() => {
            btnSpan.classList.remove('animate__animated', 'animate__heartBeat');
            btnSpan.textContent = 'Copy!';
        }, 1000);

    });

    return conImg;

}

buscador.addEventListener( 'keyup', () =>  {

    if (buscador.value.length === 0) {
        borrarArrayImg();
        return;
    }


});

btnBuscar.addEventListener( 'click' , () => buscarImg() );

btnUltimo.addEventListener('click', () => {

    let nuevoArray = buscarImg().reverse();

    const frament2 = document.createDocumentFragment();
    contenedorImg.innerHTML = '';

    nuevoArray.filter((data) => {

        elemento = imgHTML(data);

        frament2.appendChild(elemento);

    });

    contenedorImg.appendChild(frament2);

});
