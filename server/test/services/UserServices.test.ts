import { Request, Response } from 'express';
import db from '../../repositories/UserRepository';
import { registerUser, editUser, searchUser, getUsers, deleteUser } from '../../services/UserService';

jest.mock('../../repositories/UserRepository');
describe('UserService', () => {
    let req: Partial<Request>;
    let res: Partial<Response>;
  
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
  
    it('should register a user', async () => {
      const mockReq = { body: { id: 1, user: 'TestUser' } } as Request;
      const expectedResult = { id: 1, user: 'TestUser' };
        (db.createUser as jest.Mock).mockImplementation((params: any, callback: Function) => {
        callback(null, expectedResult);
      });
  
      await registerUser(mockReq, res as Response);
  
      expect(db.createUser).toHaveBeenCalledWith(
        [1, 'TestUser', undefined, undefined, undefined, undefined, undefined, undefined],
        expect.any(Function)
      );
      expect(res.send).toHaveBeenCalledWith(expectedResult);
    });
  
    it('should edit a user', async () => {
      const mockReq = { body: { id: 1, user: 'TestUser' } } as Request;
      const expectedResult = { id: 1, user: 'TestUser' };
        (db.updateUser as jest.Mock).mockImplementation((params: any, callback: Function) => {
        callback(null, expectedResult);
      });
  
      await editUser(mockReq, res as Response);
  
      expect(db.updateUser).toHaveBeenCalledWith(
        ['TestUser', undefined, undefined, undefined, undefined, undefined, undefined, 1],
        expect.any(Function)
      );
      expect(res.send).toHaveBeenCalledWith(expectedResult);
    });
  
    it('should search for a user', async () => {
      const mockReq = { body: { id: 1, user: 'TestUser' } } as Request;
      const expectedResult = { id: 1, user: 'TestUser' };
        (db.searchUser as jest.Mock).mockImplementation((params: any, callback: Function) => {
        callback(null, expectedResult);
      });
  
      await searchUser(mockReq, res as Response);
  
      expect(db.searchUser).toHaveBeenCalledWith(
        ['TestUser', undefined, undefined, undefined, undefined, undefined, undefined, 1],
        expect.any(Function)
      );
      expect(res.send).toHaveBeenCalledWith(expectedResult);
    });
  
    it('should get users', async () => {
      const expectedResult = [{ id: 1, user: 'TestUser' }];
        (db.getUsers as jest.Mock).mockImplementation((callback: Function) => {
        callback(null, expectedResult);
      });
  
      await getUsers(req as Request, res as Response);
  
      expect(db.getUsers).toHaveBeenCalledWith(expect.any(Function));
      expect(res.send).toHaveBeenCalledWith(expectedResult);
    });
  
    it('should delete a user', async () => {
      const mockReq = { params: { id: 1 } } as unknown as Request;
      const expectedResult = { message: 'User deleted successfully' };
        (db.deleteUser as jest.Mock).mockImplementation((params: any, callback: Function) => {
        callback(null, expectedResult);
      });
  
      await deleteUser(mockReq, res as Response);
  
      expect(db.deleteUser).toHaveBeenCalledWith(1, expect.any(Function));
      expect(res.send).toHaveBeenCalledWith(expectedResult);
    });
  });