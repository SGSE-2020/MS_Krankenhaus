module.exports = (sequelize, Sequelize) => {
    const Appointment = sequelize.define("appointment", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        patientid: {
            type: Sequelize.STRING,
            allowNull: true
        },
        time: {
            type: Sequelize.STRING,
            allowNull: true
        },
        faculty: {
            type: Sequelize.STRING,
            allowNull: true
        },
        station: {
            type: Sequelize.STRING,
            allowNull: true
        },
    });

    return Appointment;
};