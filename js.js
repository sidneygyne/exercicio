 function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
 }

function Veiculo (marca, modelo, anoModelo, anoFabricação, valorVenda) {
    this.marca = marca;
    this.modelo = modelo;
    this.anoModelo = anoModelo;
    this.anoFabricação = anoFabricação;
    this.valorVenda = valorVenda;

    Pessoa.call(this, nome, sobrenome)
}

const veiculoSidney = new Veiculo("FORD", "Ka", 2025, 2025, 70000.00, "Sidney", "Magalhães");
const veiculoLuis = new Veiculo("VW", "Polo", 2024, 2023, 65000.00, "Luis", "Souza");
const veiculoAna = new Veiculo("Chevrolet", "Onix", 2023, 2022, 68000.00, "Ana", "Silva");

console.log(veiculoSidney);
console.log(veiculoLuis);
console.log(veiculoAna);
