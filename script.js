let card1 = document.querySelector(".cardjs");

function datos(){
    fetch('ropa.json')
        .then(respuesta => respuesta.json())
        .then(info => {
            categorias(info)
        })
}
function categorias(info){
    //console.log(info);
    card1.innerHTML='';
    for(let i of info.blusas){
        console.log(i.img)
        card1.innerHTML += `
        <div class="col">
        <div class="card">
            <img class="card-img-top" src="${i.img}" alt="...">
            <div class="card-body">
                <h5 class="card-title">${i.nombre}</h5>
                <p class="card-text">${i.descripcion}</p>
                <p class="card-text">${i.talla}</p>
                <p class="card-text">${i.color}</p>
                <a href="#" class="btn btn-primary">$${i.precio}</a>
            </div>
        </div>
        </div>
      `;
    }

}
datos();
categorias();