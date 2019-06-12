class Consulta {

    constructor(paciente, procedimentos, particular, retorno, data = new Date()) {
        this.paciente = paciente;
        this.procedimentos = procedimentos;
        this.particular = particular;
        this.retorno = retorno;
        this.data = data;
    }

    preco() {
        if (this.retorno) {
            return 0;
        }

        let precoFinal = 0;

        this.procedimentos.forEach(procedimento => {
            if (procedimento == 'raio-x') {
                precoFinal += 55;
            } else if (procedimento == 'gesso') {
                precoFinal += 32;
            } else {
                precoFinal += 25;
            }
        });

        if (this.particular) {
            precoFinal += 25;
        }

        return precoFinal;
    }

    get getNome() {
        return this.paciente;
    }

    get getProcedimentos() {
        return this.procedimentos;
    }

    get isParticular() {
        return this.particular;
    }

    get isRetorno() {
        return this.retorno;
    }

    get getData() {
        return this.data;
    }
}