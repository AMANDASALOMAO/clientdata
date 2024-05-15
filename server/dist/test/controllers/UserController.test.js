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
const userService = __importStar(require("../../services/UserService"));
const UserController_1 = require("../../controllers/UserController");
jest.mock('../../services/UserService');
describe('UserController', () => {
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
    it('should register a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { id: 1, user: 'TestUser' } };
        const expectedResult = { id: 1, user: 'TestUser' };
        userService.registerUser.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, UserController_1.registerUser)(mockReq, res);
        expect(userService.registerUser).toHaveBeenCalledWith(mockReq, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should edit a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { id: 1, user: 'TestUser' } };
        const expectedResult = { id: 1, user: 'TestUser' };
        userService.editUser.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, UserController_1.editUser)(mockReq, res);
        expect(userService.editUser).toHaveBeenCalledWith(mockReq, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should search for a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { id: 1, user: 'TestUser' } };
        const expectedResult = { id: 1, user: 'TestUser' };
        userService.searchUser.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, UserController_1.searchUser)(mockReq, res);
        expect(userService.searchUser).toHaveBeenCalledWith(mockReq, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should get users', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedResult = [{ id: 1, user: 'TestUser' }];
        userService.getUsers.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, UserController_1.getUsers)(req, res);
        expect(userService.getUsers).toHaveBeenCalledWith(req, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should delete a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { params: { id: 1 } };
        const expectedResult = { message: 'User deleted successfully' };
        userService.deleteUser.mockImplementation((req, res) => {
            res.send(expectedResult);
        });
        yield (0, UserController_1.deleteUser)(mockReq, res);
        expect(userService.deleteUser).toHaveBeenCalledWith(mockReq, res);
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
});
//# sourceMappingURL=UserController.test.js.map