let paciente2 = {
    nome: "Paciente 02",
    idade: 33,
    peso: 80,
    altura: 1.80
}

let paciente3 = {
    nome: "Paciente 03",
    idade: 33,
    peso: 80,
    altura: 1.80
}

let paciente4 = {
    nome: "Paciente 04",
    idade: 33,
    peso: 80,
    altura: 1.80
}

let pacientes = [
    {
        nome: "Paciente 01",
        idade: 33,
        peso: 80,
        altura: 1.80
    },
    paciente2,
    paciente3,
    paciente4
]

function IMC(peso, altura) {
    return peso / (altura * altura)
}

function printIMCPaciente(paciente) {
    return `Paciente ${paciente.nome} 
    possui o IMC de ${IMC(paciente.peso, paciente.altura)}`
}

function displayPacientes() {
    const pacientesContainer = document.getElementById("pacientes")

    pacientes.forEach((paciente) => {
        const pacienteDiv = document.createElement("div")
        pacienteDiv.className = "paciente"
        pacienteDiv.innerHTML = printIMCPaciente(paciente)
        pacientesContainer.appendChild(pacienteDiv)
    })
}

window.onload = displayPacientes
