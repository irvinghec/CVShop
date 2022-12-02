import datos from "./ropa.json" assert {type: "json"};
//buscador
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

//buscador
const filtrar = ()=>{
    // console.log(formulario.value);
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    
    for(let i of datos){
        for(let inf of i.blusas){
         //console.log(i.blusas);
        let blusasC = inf.color.toLowerCase(); 
        let blusasT = inf.talla.toLowerCase(); 
        let blusasN = inf.nombre.toLowerCase();
        if(blusasC.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <div class="card-group">
                <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${inf.img}" alt="Card image cap" height="400rem">
                <div class="card-body">
                    <h5 class="card-title">${inf.nombre}</h5>
                    <p class="card-text">Caracteristicas: ${inf.descripcion}</p>
                    <p class="card-text">Talla: ${inf.talla}</p>
                    <p class="card-text">Color: ${inf.color}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Precio: $${inf.precio}</small>
                </div>
                </div>
            </div>
            `;
        }     
        }
        for(let inf of i.pantalones){
         //console.log(i.blusas);
        let pantalones = inf.color.toLowerCase(); 
        if(pantalones.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <div class="card-group">
            <br><div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${inf.img}" alt="Card image cap" height="400rem">
            <div class="card-body">
                <h5 class="card-title">${inf.nombre}</h5>
                <p class="card-text">Caracteristicas: ${inf.descripcion}</p>
                <p class="card-text">Talla: ${inf.talla}</p>
                <p class="card-text">Color: ${inf.color}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Precio: $${inf.precio}</small>
            </div>
        </div>
        </div>
            `;
        }     
        }
        for(let inf of i.vestidos){
         //console.log(i.blusas);
        let vestidos = inf.color.toLowerCase(); 
        if(vestidos.indexOf(texto) !== -1){
            resultado.innerHTML += ` 
            <div class="card-group">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${inf.img}" alt="Card image cap" height="400rem">
                <div class="card-body">
                    <h5 class="card-title">${inf.nombre}</h5>
                    <p class="card-text">Caracteristicas: ${inf.descripcion}</p>
                    <p class="card-text">Talla: ${inf.talla}</p>
                    <p class="card-text">Color: ${inf.color}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Precio: $${inf.precio}</small>
                </div>
            </div>
            </div>
            `;
        }    
        }
    }
    if(resultado === ''){
        resultado.innerHTML += `    
            <li>
                Producto no encontrado...
            </li>
            `;
    }
}
boton.addEventListener('click', filtrar);