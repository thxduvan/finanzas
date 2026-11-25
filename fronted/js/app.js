const categoria = document.getElementById('categoria')
const gastos = document.getElementById(`gastos`)
fetch('http://localhost:4000/api/categoria')
    .then(respuesta => respuesta.json())
        .then(datos => {

            for (i=0;i < datos.length; i ++){
                categoria.innerHTML += `<option>${datos[i].nombre} </option>`
            }
        })

fetch(`http://localhost:4000/api/gastos`)
    .then(respuesta => respuesta.json())
        .then(gas => {
            for(i=0; i <gas.length; i ++){
                gastos.innerHTML +=
            `<div class="registro gasto">
                <div class="informacion">
                    <span class="monto-valor">$${gas[i].monto}</span>
                    <span class="categoria-valor">${gas[i].nombre}</span>
                    
                </div>
                <div class="acciones">
                    <button class="accion">editar</button>
                    <button class="accion">eliminar</button>
                </div>
            </div>`
            }
        })