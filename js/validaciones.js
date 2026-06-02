const formulario = document.getElementById("formRegistro");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const edad = document.getElementById("edad").value.trim();

    if(nombre === ""){
        mostrarMensaje("El nombre es obligatorio","error");
        return;
    }

    if(nombre.length < 3){
        mostrarMensaje("El nombre debe tener al menos 3 caracteres","error");
        return;
    }

    if(!correo.includes("@")){
        mostrarMensaje("Correo inválido","error");
        return;
    }

    if(telefono.length < 8){
        mostrarMensaje("Teléfono inválido","error");
        return;
    }

    const usuario = {
        nombre,
        correo,
        telefono,
        direccion,
        edad
    };

    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    mostrarMensaje(
        "Registro guardado correctamente",
        "success"
    );

});

function mostrarMensaje(texto,tipo){

    mensaje.innerHTML = texto;

    mensaje.className = "";

    mensaje.classList.add(tipo);

}