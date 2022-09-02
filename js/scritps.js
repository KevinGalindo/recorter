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
const contenedorLink = document.querySelector('#contenLink');

separador.value = '"';

contenedorLink.innerHTML = `<div class="alert alert-warning text-center"><h4 class="alert-heading">No hay busqueda</h4></div>`;


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

const buscarLink = () => {

    if(buscador.value.length === 0){
        return;
    }

    const frament2 = document.createDocumentFragment();
    contenedorLink.innerHTML = '';

    let arrayLink = [];

    separarStrign().filter((arreglo) => {

        let solo = arreglo.indexOf(buscador.value);

        if (solo >= 0) {
            arrayLink.push(arreglo);
        }

        return arrayLink;
    });

    let elemento;
    
    arrayLink.filter((data) => {

        elemento = linkHTML(data);

        frament2.appendChild(elemento);

    });
    
    contenedorLink.appendChild(frament2);
    

}

const borrarArrayLink = () => {
    contenedorLink.innerHTML = ` <div class="alert alert-warning text-center"><h4 class="alert-heading animate__animated animate__fadeIn">Se borro la busqueda</h4></div>`;
}

const linkHTML = (url) => {

    const conlink = document.createElement("TR");
    const th = document.createElement("TH");
    const link = document.createElement('TD');

    link.setAttribute("contenteditable", "true");
    conlink.classList.add('animate__animated');
    conlink.classList.add('animate__fadeInDown');

    th.textContent = '#';
    link.textContent = url;

    conlink.appendChild(th);
    conlink.appendChild(link);

    return conlink;

}

buscador.addEventListener( 'keyup', () =>  {

    if (buscador.value.length === 0) {
        borrarArrayLink();
        return;
    }


});

btnBuscar.addEventListener( 'click' , () => buscarLink() );
