class PacienteBuilder {

    constructor() {
        this.nome = "Guilherme";
        this.idade = 28;
        this.peso = 72;
        this.altura = 1.80;
    }

    comNome(valor) {
        this.nome = valor;
        return this;
    }

    comIdade(valor) {
        this.idade = valor;
        return this;
    }

    comPeso(valor) {
        this.peso = valor;
        return this;
    }
    comAltura(valor) {
        this.altura = valor;
        return this;
    }

    constroi() {
        return new Paciente(this.nome, this.idade, this.peso, this.altura);
    }

}