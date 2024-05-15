"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRouter = exports.getRouters = exports.searchRouter = exports.editRouter = exports.registerRouter = void 0;
const RouterRepository_1 = __importDefault(require("../repositories/RouterRepository"));
const registerRouter = (req, res) => {
    const { ip, ipv6, model, brand, routerid, client, contractrouter } = req.body;
    RouterRepository_1.default.createRouter([ip, ipv6, model, brand, routerid, client, contractrouter], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro ao registrar roteador.");
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
};
exports.registerRouter = registerRouter;
const editRouter = (req, res) => {
    const { ip, ipv6, model, brand, routerid, client, contractrouter } = req.body;
    RouterRepository_1.default.updateRouter([ip, ipv6, model, brand, client, contractrouter, routerid], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Erro ao editar roteador.");
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
};
exports.editRouter = editRouter;
const searchRouter = (req, res) => {
    const { ip, ipv6, model, brand, routerid, client, contractrouter } = req.body;
    RouterRepository_1.default.searchRouter([ip, ipv6, model, brand, routerid, client, contractrouter], (err, result) => {
        if (err)
            res.send(err);
        res.send(result);
        console.log(result);
    });
};
exports.searchRouter = searchRouter;
const getRouters = (req, res) => {
    RouterRepository_1.default.getRouters((err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
            console.log(result);
        }
    });
};
exports.getRouters = getRouters;
const deleteRouter = (req, res) => {
    const { routerid } = req.params;
    RouterRepository_1.default.deleteRouter(routerid, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
};
exports.deleteRouter = deleteRouter;
//# sourceMappingURL=RouterService.js.map