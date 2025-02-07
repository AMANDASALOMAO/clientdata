"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = require("mysql");
const db = (0, mysql_1.createPool)({
    host: "localhost",
    user: "root",
    password: "andrade123",
    database: "dbclients",
    port: 3306,
});
const routerRepository = {
    createRouter: (params, callback) => {
        let mysql = "INSERT INTO router (ip, ipv6, model, brand, routerid, client, contractrouter) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(mysql, params, callback);
    },
    updateRouter: (params, callback) => {
        let mysql = "UPDATE router SET ip = ?, ipv6 = ?, model = ?, brand = ?, client = ?, contractrouter = ? WHERE routerid = ?";
        db.query(mysql, params, callback);
    },
    searchRouter: (params, callback) => {
        let mysql = "SELECT * from router WHERE routerid = ? AND client = ? AND ip = ? AND ipv6 = ? AND model = ? AND brand = ? AND contractrouter = ?";
        db.query(mysql, params, callback);
    },
    getRouters: (callback) => {
        let mysql = "SELECT * FROM dbclients.router";
        db.query(mysql, callback);
    },
    deleteRouter: (routerid, callback) => {
        let mysql = "DELETE FROM router WHERE routerid = ?";
        db.query(mysql, routerid, callback);
    },
};
exports.default = routerRepository;
