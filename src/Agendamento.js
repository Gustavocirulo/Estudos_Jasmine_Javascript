class Agendamento {

    constructor() {

    }

    para(consulta) {
        const umDiaEmMilisegundos = 1000 * 60 * 60 * 24;
        const vinteDiasEmMilisegundos = umDiaEmMilisegundos * 20;

        let novaData = new Date(consulta.getData.getTime() + vinteDiasEmMilisegundos);
        while (novaData.getDay() == 0 || novaData.getDay() == 6) {
            novaData = new Date(novaData.getTime() + umDiaEmMilisegundos);
        }


        let novaConsulta = new Consulta(consulta.getNome, consulta.getProcediemntos, consulta.isParticular, true, novaData);
        return novaConsulta;
    }



}