/* Faça um programa para calcular o valor de uma viagem:

Você terá 3 variáveis:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por Km;
3 - Distância em Km;

*/

const combustivel = 5.79;
const gastoKm = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / gastoKm;
const combustivelGasto = litrosConsumidos * combustivel;
console.log(combustivelGasto.toFixed(2));
