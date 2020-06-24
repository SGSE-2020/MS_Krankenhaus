module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
        userid: {
            type: Sequelize.STRING,
            primaryKey: true,
            autoIncrement: false
        },
        station: {
            type: Sequelize.STRING,
            allowNull: true
        },
        faculty: {
            type: Sequelize.STRING,
            allowNull: true
        },
        symtomps: {
            type: Sequelize.STRING,
            allowNull: true
        },
        diagnosis: {
            type: Sequelize.STRING,
            allowNull: true
        },
        medication: {
            type: Sequelize.STRING,
            allowNull: true
        },
    });

    return Patient;
};