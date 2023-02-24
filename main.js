
let tabla = document.getElementById('clientes-tabla');
fetch('./clientes.json').then((response) => response.json()).then((data) => {
    console.log(data);
    console.log(data.client[0].nombre);
    for (let i = 0; i < data.client.length; i++) {
        console.log(i);
        tabla.innerHTML += `
        <tr>
            <td>${data.client[i].nombre}</td>
            <td>${data.client[i].apellido}</td>
            <td>${data.client[i].nit_cc}</td>
            <td>${data.client[i].direccion}</td>
            <td>${data.client[i].ciudad}</td>
            <td>${data.client[i].telefono}</td>
            <td>${data.client[i].cupoDisponible}</td>
            <td>${data.client[i].estado}</td>
            <td>
            <button value="i">
                <img src="./img/edit.svg" id="edit-client" class="icon">
            </button>
            <button value="i">
                <img src="./img/trash.svg" id="delete-client" class="icon">
            </button>
            </td>
        </tr>`
    }
    let deleteClient = document.getElementById('delete-client');
    deleteClient.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(`clien en eliminar cliente #${e.value}`);
    });
})


let buscar_cliente= document.getElementById('bi-search');
