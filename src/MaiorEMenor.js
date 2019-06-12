class MaiorEMenor {
    menor = Number.MAX_VALUE;
    maior = Number.MIN_VALUE;

    encontra(...nums) {
        nums.forEach(num => {
            if (num < this.menor) {
                this.menor = num;
            }
            if (num > this.maior) {
                this.maior = num;
            }
        });
    }

    pegaMaior() {
        return this.maior;
    }

    pegaMenor() {
        return this.menor;
    }
}

