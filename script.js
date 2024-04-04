let personas = [
    { nombre: "Juan", oficio: "Programador" },
    { nombre: "María", oficio: "Diseñador" },
    { nombre: "Pedro", oficio: "Ingeniero" }
];

function mostrarPersonas() {
    const personasList = document.getElementById("personas-list");
    personasList.innerHTML = '';

    personas.forEach(persona => {
        const li = document.createElement("li");
        li.textContent = `${persona.nombre} - ${persona.oficio}`;
        li.addEventListener("click", () => contratarPersona(persona.nombre));
        personasList.appendChild(li);
    });
}

function agregarPersona() {
    const nombreInput = document.getElementById("nombre-input");
    const oficioInput = document.getElementById("oficio-input");

    const nombre = nombreInput.value.trim();
    const oficio = oficioInput.value.trim();

    if (nombre !== "" && oficio !== "") {
        personas.push({ nombre, oficio });
        mostrarPersonas();
        nombreInput.value = '';
        oficioInput.value = '';
    } else {
        alert("Por favor ingrese un nombre y un oficio válido.");
    }
}

function contratarPersona(nombre) {
    console.log(`Contratado: ${nombre}`);
}

mostrarPersonas();

document.getElementById("contratar-btn").addEventListener("click", agregarPersona);
