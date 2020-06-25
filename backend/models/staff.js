module.exports = (sequelize, Sequelize) => {
    const Staff = sequelize.define("staff", {
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
        titel: {
            type: Sequelize.STRING,
            allowNull: true
        },
    });

    return Staff;
};