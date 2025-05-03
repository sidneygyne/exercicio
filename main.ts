// FUNÇÃO MULTIPLICAÇÃO
const multipicacao = (numero1: number, numero2: number): number => numero1 * numero2;
const num1: number = 8;
const num2: number = 5;
const num3: number = 7;
const num4: number = 9;

console.log(`${num1} * ${num2} =`,(multipicacao(num1, num2)));
console.log(`${num3} * ${num4} =`,(multipicacao(num3, num4)));

//FUNÇÃO SAUDAÇÃO
const ola = (nome: string): string => `Olá ${nome}`;
console.log(ola('Sidney'));
console.log(ola('Lucas'));
console.log(ola('Juliana'));