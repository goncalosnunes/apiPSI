module.exports = (sequelize, DataTypes) => {

    const Utente = sequelize.define("utente", {
        nome: {
            type: DataTypes.STRING
        },
        dataNascimento: {
            type: DataTypes.DATE
        },
        sitUtente: {
            type: DataTypes.STRING
        },
        dAlteraSit: {
            type: DataTypes.DATE
        },
        estadoCivil: {
            type: DataTypes.STRING
        },
        nacionalidade: {
            type: DataTypes.STRING
        },
        morada: {
            type: DataTypes.STRING
        },
        codigoPostal: {
            type: DataTypes.STRING
        },
        contacto: {
            type: DataTypes.STRING
        },
        contacEmergencia: {
            type: DataTypes.STRING
        },
        foto: {
            type: DataTypes.STRING
        },
        notas: {
            type: DataTypes.STRING
        }
    })

    return Utente

}