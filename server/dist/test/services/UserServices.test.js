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
const UserRepository_1 = __importDefault(require("../../repositories/UserRepository"));
const UserService_1 = require("../../services/UserService");
jest.mock('../../repositories/UserRepository');
describe('UserService', () => {
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
        UserRepository_1.default.createUser.mockImplementation((params, callback) => {
            callback(null, expectedResult);
        });
        yield (0, UserService_1.registerUser)(mockReq, res);
        expect(UserRepository_1.default.createUser).toHaveBeenCalledWith([1, 'TestUser', undefined, undefined, undefined, undefined, undefined, undefined], expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should edit a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { id: 1, user: 'TestUser' } };
        const expectedResult = { id: 1, user: 'TestUser' };
        UserRepository_1.default.updateUser.mockImplementation((params, callback) => {
            callback(null, expectedResult);
        });
        yield (0, UserService_1.editUser)(mockReq, res);
        expect(UserRepository_1.default.updateUser).toHaveBeenCalledWith(['TestUser', undefined, undefined, undefined, undefined, undefined, undefined, 1], expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should search for a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { body: { id: 1, user: 'TestUser' } };
        const expectedResult = { id: 1, user: 'TestUser' };
        UserRepository_1.default.searchUser.mockImplementation((params, callback) => {
            callback(null, expectedResult);
        });
        yield (0, UserService_1.searchUser)(mockReq, res);
        expect(UserRepository_1.default.searchUser).toHaveBeenCalledWith(['TestUser', undefined, undefined, undefined, undefined, undefined, undefined, 1], expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should get users', () => __awaiter(void 0, void 0, void 0, function* () {
        const expectedResult = [{ id: 1, user: 'TestUser' }];
        UserRepository_1.default.getUsers.mockImplementation((callback) => {
            callback(null, expectedResult);
        });
        yield (0, UserService_1.getUsers)(req, res);
        expect(UserRepository_1.default.getUsers).toHaveBeenCalledWith(expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
    it('should delete a user', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockReq = { params: { id: 1 } };
        const expectedResult = { message: 'User deleted successfully' };
        UserRepository_1.default.deleteUser.mockImplementation((params, callback) => {
            callback(null, expectedResult);
        });
        yield (0, UserService_1.deleteUser)(mockReq, res);
        expect(UserRepository_1.default.deleteUser).toHaveBeenCalledWith(1, expect.any(Function));
        expect(res.send).toHaveBeenCalledWith(expectedResult);
    }));
});
//# sourceMappingURL=UserServices.test.js.map