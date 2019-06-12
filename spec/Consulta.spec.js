describe('Consulta', () => {

    let guilherme;

    beforeEach(() => {
        guilherme = new PacienteBuilder().constroi();
    });
    describe('Consultas que são retornos', () => {
        it('nao deve cobrar nada se for um retorno', () => {
            var consulta = new Consulta(guilherme, [], true, true);

            expect(consulta.preco()).toEqual(0);
        });
    });
    describe('Consultas que são particulares', () => {
        it('deve cobrar 25 em uma consulta particular em procedimentos comuns', () => {
            var consulta = new Consulta(guilherme, ['proc1', 'proc2'], true, false);
            expect(consulta.preco()).toEqual(25 + 25 + (25));
        });

        it('deve cobrar 25 em uma consulta particular em procedimentos especiais', () => {
            var consulta = new Consulta(
                guilherme,
                ['procedimento-comum', 'raio-x', 'procedimento-comum', 'gesso'],
                true,
                false
            );
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32 + (25));
        });
    });
    describe('Consultas por um convênio', () => {

        it('deve cobrar 25 por cada procedimento comum', () => {
            var consulta = new Consulta(guilherme, ['proc1', 'proc2'], false, false);
            expect(consulta.preco()).toEqual(50);
        });

        it('deve cobrar preco especifico dependendo do procedimento', () => {
            var consulta = new Consulta(
                guilherme,
                ['procedimento-comum', 'raio-x', 'procedimento-comum', 'gesso'],
                false,
                false
            );
            expect(consulta.preco()).toEqual(25 + 55 + 25 + 32);
        });
    });

});