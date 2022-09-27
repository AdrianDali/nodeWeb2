import { Sequelize } from 'sequelize';
const db= new Sequelize ("informacion", "root", "1234", {
    dialect : "mariadb",
    dialectOptions: {
        host: "localhost",
        port: 3306,
        timestamps: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
            },
            operatorsAliases: false
            }
            });

export default db;