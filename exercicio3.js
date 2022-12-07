/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considero o preço normal na etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para lerqual a condição de pagamento escolhida e efetuar o cálculo adequado.

Condição de pagamento:
1 - À vista débito, recebe 10% de desconto;
2 - À vista dinheiro ou PIX, recebe 15% de desconto;
3 - Em 2x, preço normal da etiqueta sem juros;
4 - Mais de 2x, preço normal de etiqueta mais juros de 10%
*/

function aplicarDesconto (valor, desconto) {
    return (valor - (valor * (desconto / 100)))
}
function aplicarJuros (valor, juros) {
    return (valor + (valor * (juros / 100)))
}

console.log ('Informe preço do produto');
const produto = 90;
console.log (produto);
console.log ('Informe a forma de pagamento');
const formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log ('Débito à vista')
    console.log (aplicarDesconto (produto, 10))
} else if (formaDePagamento === 2) {
    console.log ('Dinheiro ou pix')
    console.log (aplicarDesconto (produto, 15))
} else if (formaDePagamento === 3) {
    console.log ('Parcelado em duas vezes')
    console.log (aplicarDesconto (produto))
} else {
    console.log ('Mais de duas parcelas')
}    console.log (aplicarJuros (produto, 10))
