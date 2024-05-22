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

let pacientes = [
    {
        nome: "Paciente 01",
        idade: 33,
        peso: 80,
        altura: 1.80
    },
    paciente3
]

pacientes.push(paciente2)

let pacientesNomes = []

for (let paciente of pacientes) {
    pacientesNomes.push(paciente.nome)
}

console.log(pacientesNomes);