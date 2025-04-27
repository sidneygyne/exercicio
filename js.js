const listaAlunosComNota = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 6 },
    { nome: "Carla", nota: 9 },
    { nome: "Diego", nota: 4 },
    { nome: "Elisa", nota: 10 },
    { nome: "Fábio", nota: 7 },
    { nome: "Gabriela", nota: 5 },
    { nome: "Henrique", nota: 3 },
    { nome: "Isabela", nota: 9 },
    { nome: "João", nota: 2 }
  ];

console.log(listaAlunosComNota);

// const alunosAprovados = listaAlunosComNota.filter(function(aluno) {
//     return aluno.nota >= 6
// })
// ou
const alunosAprovados = listaAlunosComNota.filter((aluno) => aluno.nota >= 6);

console.log(alunosAprovados);