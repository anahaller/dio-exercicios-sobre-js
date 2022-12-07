/* O IMC - Indíce de Massa Corporal é um critério da OMS para dar a indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado peso e altura de uma pessoa mostre sua condição de acordo com a tebela abaixo:

IMC em adultos:
- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: Acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade grave;
*/

console.log ('Informe seu peso');
const peso = 64;
console.log (peso);

console.log ('Informe  sua altura');
const altura = 1.73;
console.log (altura);

const imc = peso / (altura * altura);
console.log ('Seu IMC' + imc.toFixed(2));

if (imc < 18.5) {
    console.log ('Abaixo do peso')
} else if (imc > 18.5 && imc <= 25) {
    console.log ('Peso normal')
} else if (imc > 25 && imc <= 30) {
    console.log ('Acima do peso')
} else if (imc > 30 && imc <= 40) {
    console.log ('Obeso')
} else if ( imc > 40) {
    console.log ('Obesidade grave')
}