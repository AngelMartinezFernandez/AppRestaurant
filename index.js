// import {crearProductoHtml, insertarProductosHtml,platos} from './js/components';

const mainSelector = document.querySelector("#productos");

const platos = [
    
    {
        nombre: "Fabada Asturiana",
        precio: 13.90,
        descripcion:"Tabla de Fabada Asturiana para 3 personas.",
        foto:"./img/productos/platos/fabada.png",
        categoria: "platos"
    },
    {
        nombre: "Licor de Guindas Asturiano",
        precio: 13.75,
        descripcion:"Botella de licor asturiano 70cl.",
        foto:"./img/productos/bebidas/licordeguindas.png",
        categoria: "bebidas"
    },
    {
        nombre: "Casadiellas Asturianas",
        precio: 4.95,
        descripcion:"Media docena de Casadiellas.",
        foto:"./img/productos/postres/casadiellas.png",
        categoria: "postres"
    },
    {
        nombre: "Fabada Asturiana",
        precio: 13.90,
        descripcion:"Tabla de Fabada Asturiana para 3 personas.",
        foto:"./img/productos/platos/fabada.png",
        categoria: "platos"
    },
    {
        nombre: "Licor de Guindas Asturiano",
        precio: 13.75,
        descripcion:"Botella de licor asturiano 70cl.",
        foto:"./img/productos/bebidas/licordeguindas.png",
        categoria: "bebidas"
    },
    {
        nombre: "Casadiellas Asturianas",
        precio: 4.95,
        descripcion:"Media docena de Casadiellas.",
        foto:"../img/productos/postres/casadiellas.png",
        categoria: "postres"
    },
    {
        nombre: "Fabada Asturiana",
        precio: 13.90,
        descripcion:"Tabla de Fabada Asturiana para 3 personas.",
        foto:"./img/productos/platos/fabada.png",
        categoria: "platos"
    },
    {
        nombre: "Licor de Guindas Asturiano",
        precio: 13.75,
        descripcion:"Botella de licor asturiano 70cl.",
        foto:"./img/productos/bebidas/licordeguindas.png",
        categoria: "bebidas"
    },
    {
        nombre: "Casadiellas Asturianas",
        precio: 4.95,
        descripcion:"Media docena de Casadiellas.",
        foto:"./img/productos/postres/casadiellas.png",
        categoria: "postres"
    },
    

];

const crearProductoHtml = (foto,precio,nombre,descripcion) => {

    const crearProducto = 
    `<section>
    <article class="menu-plato">
        <figure>
            <img class="img-producto" src="${foto}" alt="">
        </figure> 
        <div class="descplato"> 
                <p class="precio">${precio}€</p>
                <p class="tituloproducto">${nombre}</p>
                <p class="descproducto">${descripcion}</p>
            <ul class="contador">
                <li><button class="btn-menos btn-mm">-</button></li>
                <li><label class="btn-counter" for="">00</label></li>
                <li><button class="btn-mas btn-mm">+</button></li>
            </ul>
        </div> 
    
    </article>
    </section>`
    
    return crearProducto;
};

const insertarProductosHtml = (platos)=>{

    for (const plato of platos) {
        
    
    const section = document.createElement('section');
    section.innerHTML= crearProductoHtml(plato.foto,plato.precio,plato.nombre,plato.descripcion);
    mainSelector.append(section.firstElementChild);

}};

const init = ()=>{
insertarProductosHtml(platos);
}

init();