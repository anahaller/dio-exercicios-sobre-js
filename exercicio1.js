/* Faça um algoritmo que dada 3 notas tiradas por um aluno tiradas em um semestre da faculdade calcule e imprima a média e a classificação conforme a tabela abaixo:

Média = (nota1 + nota 2 + nota 3)/3

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado;
*/

console.log ('Informe a nota 1');
let nota1 = 5;

console.log ('Informe a nota 2');
let nota2 = 6;

console.log ('Informe a nota 3');
let nota3 = 9;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log ('Reprovrado');
}else if (media >= 5 && media <= 7) {
    console.log ('Recuperação');
}else if (media > 7) {
    console.log ('Aprovado');
}
console.log (media.toFixed(1));