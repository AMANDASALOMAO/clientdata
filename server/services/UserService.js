"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.getUsers = exports.searchUser = exports.editUser = exports.registerUser = void 0;
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const registerUser = (req, res) => {
    const { id, user, email, address, birth, document, date, contract } = req.body;
    UserRepository_1.default.createUser([id, user, email, address, birth, document, date, contract], (err, result) => {
        if (err) {
            console.error("Erro ao registrar usuário:", err);
            return res.status(500).json({ error: "Erro ao registrar usuário", details: err.message });
        }
        else {
            res.status(201).json(result);
        }
    });
};
exports.registerUser = registerUser;
const editUser = (req, res) => {
    const { id, user, email, address, birth, document, date, contract } = req.body;
    UserRepository_1.default.updateUser([user, email, address, birth, document, date, contract, id], (err, result) => {
        if (err) {
            console.error("Erro ao editar usuário:", err);
            res.status(500).send({ error: "Erro ao editar usuário.", details: err.message });
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
};
exports.editUser = editUser;
const searchUser = (req, res) => {
    const { id, user, email, address, birth, document, date, contract } = req.body;
    UserRepository_1.default.searchUser([user, email, address, birth, document, date, contract, id], (err, result) => {
        if (err)
            res.send(err);
        res.send(result);
        console.log(result);
    });
};
exports.searchUser = searchUser;
const getUsers = (req, res) => {
    UserRepository_1.default.getUsers((err, result) => {
        if (err) {
            console.log("Erro ao listar usuários:", err);
            res.status(500).send({ error: "Erro ao listar usuários.", details: err.message });
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
};
exports.getUsers = getUsers;
const deleteUser = (req, res) => {
    const { id } = req.params;
    UserRepository_1.default.deleteUser(id, (err, result) => {
        if (err) {
            console.log("Erro ao deletar usuários:", err);
            res.status(500).send({ error: "Erro ao deletar usuário.", details: err.message });
        }
        else {
            res.send(result);
        }
    });
};
exports.deleteUser = deleteUser;
