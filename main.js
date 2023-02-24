let tabla = document.getElementById("clientes-tabla");
let lista_clientes;
fetch("./clientes.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    lista_clientes = data.client;
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
            <button class ="btn-list" value="${i}">
                <img src="./img/edit.svg" id="edit-client" class="icon">
            </button>
            <button class ="btn-list" value="${i}" onclick=" delete_cliente(event)" >
                <img  src="./img/trash.svg" id="delete-client" class="icon">
            </button>
            </td>
        </tr>`;
    }
  });

// el boton tiene el evento onClick y llama esta funcion
function delete_cliente(e) {
  e.target.parentNode.parentNode.parentNode.remove();
}

function add_cliente() {
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let nit_cc = document.getElementById("nit_cc").value;
  let direccion = document.getElementById("direccion").value;
  let ciudad = document.getElementById("ciudad").value;
  let telefono = document.getElementById("telefono").value;
  let estado = document.getElementById("estado").value;
  let cupoDisponible = document.getElementById("cupoDisponible").value;
  let diasG = document.getElementById("diasG").value;
  let cupoTotal = document.getElementById("cupoTotal").value;

  console.log(lista_clientes);

  if (
    nombre != "" &&
    apellido != "" &&
    nit_cc != "" &&
    direccion != "" &&
    ciudad != "" &&
    telefono != "" &&
    estado != "" &&
    cupoDisponible != "" &&
    cupoTotal != "" &&
    diasG != ""
  ) {
    if (nit_cc > 0 && telefono > 0) {
      if (ciudad != "select") {
        window.location.href = "./clientes.html";

        console.log(`nombre ${nombre}`);
        console.log(`apellido ${apellido}`);
        console.log(`nit_cc ${nit_cc}`);
        console.log(`direccion ${direccion}`);
        console.log(`ciudad ${ciudad}`);
        console.log(`telefono ${telefono}`);
        console.log(`estado ${estado}`);
        console.log(`cupoDisponible ${cupoDisponible}`);
        console.log(`cupoTotal ${cupoTotal}`);
        console.log(`diasG ${diasG}`);
        
        tabla.innerHTML += `
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${nit_cc}</td>
            <td>${direccion}</td>
            <td>${ciudad}</td>
            <td>${telefono}</td>
            <td>${cupoDisponible}</td>
            <td>${estado}</td>
            <td>     
           <button value="${lista_clientes.length}">
                <img src="./img/edit.svg" id="edit-client" class="icon">
            </button>
            <button value="${lista_clientes.length}" onclick=" delete_cliente(event)" >
                <img  src="./img/trash.svg" id="delete-client" class="icon">
            </button>
            </td>
        </tr>`;

        lista_clientes.push({
          nombre: nombre,
          apellido: apellido,
          nit_cc: nit_cc,
          direccion: direccion,
          ciudad: ciudad,
          telefono: telefono,
          cupoDisponible: cupoDisponible,
          estado: estado,
        });

        window.location.href = "./clientes.html";
      } else {
        alert("Debe escoger una ciaudad");
      }
    } else {
      alert("Nit o CC y el Telefono no puede contener simbolos o letras");
    }
  } else {
    alert("faltan datos por llenar");
  }

  console.log(lista_clientes);
}
