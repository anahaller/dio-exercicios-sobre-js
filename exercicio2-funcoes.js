/* Crie uma classe para representar carros.
OS carros possuem cor, marca e gasto médio de combustível por KM rodado.
Crie um método que dado a quantidade KM e o preço do combustível, nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    cor;
    marca;
    gastoDeCombustivel;

    constructor (cor, marca, gastoDeCombustivel) {
        this.cor = cor;
        this.marca = marca;
        this.gastoDeCombsutivel = gastoDeCombustivel;
    }
    calcularGastoDoPercurso (distancia, precoCombustivel) {
        return distancia * precoCombustivel * this.gastoDeCombsutivel;
    }

    }

const uno = new Carro ('Prata', 'Fiat', 1/12);
console.log (uno.calcularGastoDoPercurso(70, 5));
