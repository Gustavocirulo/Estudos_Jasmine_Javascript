class Paciente {

    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    imprime() {
        alert(this.nome + " tem " + this.idade + "anos");
    }

    batimentos() {
        return this.idade * 365 * 24 * 60 * 80;
    }

    imc() {
        return this.peso / (this.altura * this.altura);
    }
}

let guilherme = new Paciente("Marcos", 15, 45, 1.65);