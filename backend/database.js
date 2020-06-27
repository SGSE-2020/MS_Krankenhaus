const Sequelize = require("sequelize");

const sequelize = new Sequelize('krankenhaus', 'krankenhaus', 'sgse-ss2020', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.patient = require("./models/patient")(sequelize, Sequelize);
db.staff = require("./models/staff")(sequelize, Sequelize);
db.appointment = require("./models/appointment")(sequelize, Sequelize);

module.exports = db;