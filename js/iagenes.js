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
// textArea.value = `<a href="https://imgbox.com/nAh5Am2Z" target="_blank"><img src="https://images2.imgbox.com/ea/49/nAh5Am2Z_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/iXQ6VksN" target="_blank"><img src="https://images2.imgbox.com/21/1d/iXQ6VksN_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/NYO8vLCE" target="_blank"><img src="https://images2.imgbox.com/fa/f7/NYO8vLCE_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/nDX2RtoY" target="_blank"><img src="https://images2.imgbox.com/bf/f6/nDX2RtoY_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/lwbgJ7e8" target="_blank"><img src="https://images2.imgbox.com/f6/da/lwbgJ7e8_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/eRHkDKLa" target="_blank"><img src="https://images2.imgbox.com/68/2c/eRHkDKLa_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/N68F92R9" target="_blank"><img src="https://images2.imgbox.com/88/62/N68F92R9_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/BPjTRkhs" target="_blank"><img src="https://images2.imgbox.com/87/70/BPjTRkhs_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/Q9Lk1WUI" target="_blank"><img src="https://images2.imgbox.com/cf/14/Q9Lk1WUI_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/BTtJbQLe" target="_blank"><img src="https://images2.imgbox.com/66/f6/BTtJbQLe_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/KGbxFecc" target="_blank"><img src="https://images2.imgbox.com/e3/95/KGbxFecc_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/b3kdWQui" target="_blank"><img src="https://images2.imgbox.com/4f/fa/b3kdWQui_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/dwSf9XwP" target="_blank"><img src="https://images2.imgbox.com/47/6b/dwSf9XwP_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/1b7PMDqI" target="_blank"><img src="https://images2.imgbox.com/23/a5/1b7PMDqI_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/W35uhu6J" target="_blank"><img src="https://images2.imgbox.com/8d/48/W35uhu6J_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/r5gYcWcH" target="_blank"><img src="https://images2.imgbox.com/a3/e2/r5gYcWcH_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/YAzvhGbb" target="_blank"><img src="https://images2.imgbox.com/4c/cd/YAzvhGbb_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/cFAmJvfs" target="_blank"><img src="https://images2.imgbox.com/a3/12/cFAmJvfs_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/WG5bpdXF" target="_blank"><img src="https://images2.imgbox.com/88/70/WG5bpdXF_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/PWWDJrxl" target="_blank"><img src="https://images2.imgbox.com/4a/03/PWWDJrxl_o.jpg" alt="imgbox"/></a> <a href="https://imgbox.com/wWHwdz6j" target="_blank"><img src="https://images2.imgbox.com/2d/44/wWHwdz6j_o.jpg" alt="imgbox"/></a>`;
// buscador.value = '_o';

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
