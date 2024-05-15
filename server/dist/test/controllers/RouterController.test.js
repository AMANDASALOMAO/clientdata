"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const routerService = __importStar(require("../../services/RouterService"));
const RouterController_1 = require("../../controllers/RouterController");
jest.mock('../../services/RouterService');
describe('RouterController', () => {
    let req;
    let res;
    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should register a router', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } };
        const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
        routerService.registerRouter.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, RouterController_1.registerRouter)(mockReq, res);
        expect(routerService.registerRouter).toHaveBeenCalledWith(mockReq, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should edit a router', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } };
        const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
        routerService.editRouter.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, RouterController_1.editRouter)(mockReq, res);
        expect(routerService.editRouter).toHaveBeenCalledWith(mockReq, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should search for a router', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } };
        const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
        routerService.searchRouter.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, RouterController_1.searchRouter)(mockReq, res);
        expect(routerService.searchRouter).toHaveBeenCalledWith(mockReq, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should get routers', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedResult = [{ ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' }];
        routerService.getRouters.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, RouterController_1.getRouters)(req, res);
        expect(routerService.getRouters).toHaveBeenCalledWith(req, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should delete a router', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { params: { routerid: '123' } };
        const expectedResult = { message: 'Router deleted successfully' };
        routerService.deleteRouter.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, RouterController_1.deleteRouter)(mockReq, res);
        expect(routerService.deleteRouter).toHaveBeenCalledWith(mockReq, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
});
//# sourceMappingURL=RouterController.test.js.map