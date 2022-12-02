import datos from "./ropa.json" assert {type: "json"};

//cards
let blusas = document.querySelector('#blusas');
let pantalones = document.querySelector('#pantalones');
let vestidos = document.querySelector('#vestidos');

//cards
datos.forEach(element => {
    //console.log(element.blusas);
    for(let i of element.blusas){
        blusas.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${i.img}" alt="Card image cap" height="400rem">
            <div class="card-body">
                <h5 class="card-title">${i.nombre}</h5>
                <p class="card-text">Caracateristicas: ${i.descripcion}</p>
                <p class="card-text">Talla: ${i.talla}</p>
                <p class="card-text">Color: ${i.color}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Precio: $${i.precio}</small>
            </div>
        </div>
        `;    
    }

});

datos.forEach(element => {
    //console.log(element.blusas);
    for(let i of element.pantalones){
        pantalones.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${i.img}" alt="Card image cap" height="400rem">
            <div class="card-body">
                <h5 class="card-title">${i.nombre}</h5>
                <p class="card-text">Caracteristicas: ${i.descripcion}</p>
                <p class="card-text">Talla: ${i.talla}</p>
                <p class="card-text">Color: ${i.color}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Precio: $${i.precio}</small>
            </div>
        </div>
        `;    
    }

});

datos.forEach(element => {
    //console.log(element.blusas);
    for(let i of element.vestidos){
        vestidos.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${i.img}" alt="Card image cap" height="400rem">
            <div class="card-body">
                <h5 class="card-title">${i.nombre}</h5>
                <p class="card-text">Caracteristicas: ${i.descripcion}</p>
                <p class="card-text">Talla: ${i.talla}</p>
                <p class="card-text">Color: ${i.color}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Precio: $${i.precio}</small>
            </div>
        </div>
        `;    
    }

});
