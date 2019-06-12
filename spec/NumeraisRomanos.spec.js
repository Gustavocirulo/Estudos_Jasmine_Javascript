describe('Numerais Romanos', () => {
    let numeralRomano;

    beforeEach(() => {
        numeralRomano = new NumeraisRomanos();
    });

    it('Deve saber que o número máximo é 3 na sequência.', () => {
        expect(() => numeralRomano.transforma('IIII')).toThrow(new Error('String Inválida'));
    });

    describe('Deve devolver valores corretos das Unidades.', () => {

        it('Unidade Básica', () => {
            expect(numeralRomano.transforma('I')).toEqual(1);
        });

        it('Unidade Cinco', () => {
            expect(numeralRomano.transforma('V')).toEqual(5);
        });

        it('Unidade Dez', () => {
            expect(numeralRomano.transforma('X')).toEqual(10);
        });

        it('Unidade Cinquenta', () => {
            expect(numeralRomano.transforma('L')).toEqual(50);
        });

        it('Unidade Cem', () => {
            expect(numeralRomano.transforma('C')).toEqual(100);
        });

        it('Unidade Quinhentos', () => {
            expect(numeralRomano.transforma('D')).toEqual(500);
        });

        it('Unidade Mil', () => {
            expect(numeralRomano.transforma('M')).toEqual(1000);
        });
    });

    describe('Deve entender todos os Números.', () => {
        it('1841', () => {
            expect(numeralRomano.transforma('MDCCCXLI')).toEqual(1841);
        });
        it('548', () => {
            expect(numeralRomano.transforma('DXLVIII')).toEqual(548);
        });
        it('729', () => {
            expect(numeralRomano.transforma('DCCXXIX')).toEqual(729);
        });
        it('788', () => {
            expect(numeralRomano.transforma('DCCLXXXVIII')).toEqual(788);
        });
        it('69', () => {
            expect(numeralRomano.transforma('LXIX')).toEqual(69);
        });
        it('15', () => {
            expect(numeralRomano.transforma('XV')).toEqual(15);
        });
        it('554', () => {
            expect(numeralRomano.transforma('DLIV')).toEqual(554);
        });
        it('2015', () => {
            expect(numeralRomano.transforma('MMXV')).toEqual(2015);
        });
    });

});
