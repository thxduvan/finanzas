const categoria = document.getElementById('categoria')

fetch('http://localhost:4000/api/categoria')
    .then(respuesta => respuesta.json())
        .then(datos => {

            for (i=0;i < datos.length; i ++){
                categoria.innerHTML += `<option>${datos[i].nombre} </option>`
            }
        })