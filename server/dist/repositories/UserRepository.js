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
const userRepository = {
    createUser: (params, callback) => {
        let mysql = "INSERT INTO users (id, user, email, address, birth, document, date, contract) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        db.query(mysql, params, callback);
    },
    updateUser: (params, callback) => {
        let mysql = "UPDATE users SET user = ?, email = ?, address = ?, birth = ?, document = ?, date = ?, contract = ? WHERE id = ?";
        db.query(mysql, params, callback);
    },
    searchUser: (params, callback) => {
        let mysql = "SELECT * from users WHERE id = ? AND user = ? AND email = ? AND address = ? AND birth = ? AND document = ? AND date = ? AND contract = ?";
        db.query(mysql, params, callback);
    },
    getUsers: (callback) => {
        let mysql = "SELECT * FROM dbclients.users";
        db.query(mysql, callback);
    },
    deleteUser: (id, callback) => {
        let mysql = "DELETE FROM users WHERE id = ?";
        db.query(mysql, id, callback);
    },
};
exports.default = userRepository;
//# sourceMappingURL=UserRepository.js.map