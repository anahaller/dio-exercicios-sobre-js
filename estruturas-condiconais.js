/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo de combustível usado no carro;
4 - Gasto médio de combustível por KM;
5 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar essa viagem.
 */

const etanol = 5.98;
const gasolina = 4.75;
const gastoKm = 10;
const distanciaKM = 100;
const combustivel = 'Etanol';

const litrosConsumidos = distanciaKM / gastoKm;
if (combustivel === 'Etanol') {
    const combustivelEtanol = litrosConsumidos * etanol;
    console.log ("O gasto em etanol foi de" + combustivelEtanol.toFixed(2));
} 

if (combustivel === 'Gasolina') {
    const combustivelGasolina = litrosConsumidos * gasolina;
    console.log ("O gasto em gasolina foi de" + combustivelGasolina.toFixed(2));
}