class NumeraisRomanos {

    constructor() { }

    transforma(stringRomana) {
        let valorConvertido = 0;

        if (stringRomana == 'IIII') {
            return this.verificaString(stringRomana);
        }
        stringRomana.split('').forEach((element, i, array) => {

            valorConvertido = valorConvertido + this.procuraNumeroMaiorNaFrente(element, i, array);
        });

        console.log(valorConvertido);
        return valorConvertido;

    }

    verificaString(stringRomana) {
        console.log(stringRomana, 'String Inválida');
        throw new Error('String Inválida');
    }

    procuraNumeroMaiorNaFrente(element, index, array) {
        let valueReturn = 0;
        for (let i = index; i < array.length; i++) {
            switch (element) {
                case 'I':
                    if (array[i] == 'V' || array[i] == 'X' || array[i] == 'L' ||
                        array[i] == 'C' || array[i] == 'D' || array[i] == 'M') {
                        valueReturn = -1;
                    }
                    break;

                case 'X':
                    if (array[i] == 'L' || array[i] == 'C' || array[i] == 'D' || array[i] == 'M') {
                        valueReturn = -10;
                    }
                    break;

                case 'C':
                    if (array[i] == 'D' || array[i] == 'M') {
                        valueReturn - 100;
                    }
                    break;
            }
        }
        if (valueReturn == 0) {
            switch (element) {
                case 'I':
                    valueReturn = 1;
                    break;
                case 'V':
                    valueReturn = 5;
                    break;
                case 'X':
                    valueReturn = 10;
                    break;
                case 'L':
                    valueReturn = 50;
                    break;
                case 'C':
                    valueReturn = 100;
                    break;
                case 'D':
                    valueReturn = 500;
                    break;
                case 'M':
                    valueReturn = 1000;
                    break;
            }
        }

        return valueReturn;
    }

}

