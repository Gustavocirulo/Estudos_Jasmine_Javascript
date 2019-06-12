describe("Paciente", function () {
    it("deve calcular o IMC", function () {
        let guilherme = new Paciente("Reginaldo", 24, 72, 1.76);

        expect(guilherme.imc()).toEqual(72 / (1.76 * 1.76));
    });

    it("deve calcular o número de batimentos em sua vida", function () {
        let guilherme = new Paciente("Reginaldo", 24, 72, 1.76);

        expect(guilherme.batimentos()).toEqual(24 * 365 * 24 * 60 * 80);
    });
});