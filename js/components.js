const mainSelector = document.querySelector("#productos");

export const insertarProductosHtml = (platos)=>{

    for (const plato of platos) {
        
    const section = document.createElement('section');
    section.innerHTML= `<section>
    <article class="menu-plato">
        <figure>
            <img class="img-producto" src="${plato.foto}" alt="">
        </figure> 
        <div class="descplato"> 
                <p class="precio">${plato.precio}€</p>
                <p class="tituloproducto">${plato.nombre}</p>
                <p class="descproducto">${plato.descripcion}</p>
            <ul class="contador">
                <li><button id="btnmn-id${plato.id}" class="btn-menos btn-mm">-</button></li>
                <li><label id="counter-id${plato.id}" class="btn-counter" for="">00</label></li>
                <li><button id="btnms-id${plato.id}" class="btn-mas btn-mm">+</button></li>
            </ul>
        </div> 
    
    </article>
    </section>`;

    mainSelector.append(section.firstElementChild);

}};



