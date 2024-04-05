"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    database: 'teamnis',
    username: 'root',
    password: 'root',
    host: 'teamnis_db',
    dialect: 'mysql',
    port: 3306,
    models: [__dirname + '/src/**/*.model.ts'],
};
exports.default = config;
//# sourceMappingURL=sequelize.config.js.map