"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterRepository_1 = __importDefault(require("../../repositories/RouterRepository"));
const RouterService_1 = require("../../services/RouterService");
jest.mock('../../repositories/RouterRepository');
describe('RouterService', () => {
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
        RouterRepository_1.default.createRouter.mockImplementation((params, callback) => {
            callback(null, expectedResult);
        });
        yield (0, RouterService_1.registerRouter)(mockReq, res);
        expect(RouterRepository_1.default.createRouter).toHaveBeenCalledWith(['192.168.0.1', '::1', 'Model X', 'Brand Y', '123', 'Client A', 'Contract 1'], expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should edit a router', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } };
        const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
        RouterRepository_1.default.updateRouter.mockImplementation((params, callback) => {
            callback(null, expectedResult);
        });
        yield (0, RouterService_1.editRouter)(mockReq, res);
        expect(RouterRepository_1.default.updateRouter).toHaveBeenCalledWith(['192.168.0.1', '::1', 'Model X', 'Brand Y', 'Client A', 'Contract 1', '123'], expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should search for a router', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' } };
        const expectedResult = { ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' };
        RouterRepository_1.default.searchRouter.mockImplementation((params, callback) => {
            callback(null, expectedResult);
        });
        yield (0, RouterService_1.searchRouter)(mockReq, res);
        expect(RouterRepository_1.default.searchRouter).toHaveBeenCalledWith(['192.168.0.1', '::1', 'Model X', 'Brand Y', '123', 'Client A', 'Contract 1'], expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should get routers', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedResult = [{ ip: '192.168.0.1', ipv6: '::1', model: 'Model X', brand: 'Brand Y', routerid: '123', client: 'Client A', contractrouter: 'Contract 1' }];
        RouterRepository_1.default.getRouters.mockImplementation((callback) => {
            callback(null, expectedResult);
        });
        yield (0, RouterService_1.getRouters)(req, res);
        expect(RouterRepository_1.default.getRouters).toHaveBeenCalledWith(expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should delete a router', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { params: { routerid: '123' } };
        const expectedResult = { message: 'Router deleted successfully' };
        RouterRepository_1.default.deleteRouter.mockImplementation((params, callback) => {
            callback(null, expectedResult);
        });
        yield (0, RouterService_1.deleteRouter)(mockReq, res);
        expect(RouterRepository_1.default.deleteRouter).toHaveBeenCalledWith('123', expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
});
//# sourceMappingURL=RouterService.test.js.map