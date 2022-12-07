/* Funções:
function main (){
console.log ()
}
main ()
*/

/* Main- função não nomeada
(function(){

}
)();
*/

/* Objetos:
- Objeto é declarado por chaves e agrega valores;
> Declarar obejto no console: console.log (variavel, variavel);
> Objeto é a função dinâmica entre chave/valor;
- Função dentro de um objeto é chamada de método;
> This assume o contexto em que a variável se encontra.
*/

class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor (nome, idade, anoDeNascimento) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - 23;
    }
    descrever () {
        console.log ('Meu nome é ${this.nome} e minha idade é ${this.idade}')
    }
}
const Ana = new pessoa ('Ana', 23);
console.log (Ana)
   
