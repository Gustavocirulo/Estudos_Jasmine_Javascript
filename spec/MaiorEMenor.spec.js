describe("Maior e Menor", function () {

    it("deve entender numeros em ordem nao sequencial", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra(5, 15, 7, 9);

        expect(algoritmo.pegaMaior()).toEqual(15);
        expect(algoritmo.pegaMenor()).toEqual(5);
    });

    it("deve entender numeros em ordem decrescente", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra(9, 8, 7, 6);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it("deve entender numeros em ordem crescente", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra(6, 7, 8, 9);

        expect(algoritmo.pegaMaior()).toEqual(9);
        expect(algoritmo.pegaMenor()).toEqual(6);
    });

    it("deve entender arrays de um número apenas", function () {
        var algoritmo = new MaiorEMenor();
        algoritmo.encontra(2);
        expect(algoritmo.pegaMaior()).toEqual(2);
        expect(algoritmo.pegaMenor()).toEqual(2);
    });

});