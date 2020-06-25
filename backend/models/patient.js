module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define("patient", {
        userid: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true,
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